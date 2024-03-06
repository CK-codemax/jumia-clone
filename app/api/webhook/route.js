import * as admin from 'firebase-admin'
import { NextResponse } from "next/server";

//Connection to firebase
const serviceAccount = require('../../../permissions.json')
const app = !admin.apps.length ? admin.initializeApp({
   credential : admin.credential.cert(serviceAccount)
}) : admin.app()

//Establish connection to stripe

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNIN_SECRET;


const fulfillOrder = async(session) => {
   console.log('fulfilling order', session)

   return app.firestore().collection('users').doc(session.metadata.email).collection('orders').doc(session.id).set({
      amount : session.amount_total / 100,
      amount_shipping : session.total_details.amount_shipping / 100,
      images : JSON.parse(session.metadata.images),
      currency : session.currency,
      timestamp : admin.firestore.FieldValue.serverTimestamp(),
   })
   .then(() => {
      console.log(`SUCCESS : Order ${session.id} has been added to the DB`)
   })
}

export async function POST(request){
  console.log(request)

   const sig = request.headers.get("stripe-signature");
    const payload =await request.text()
  console.log(`SIG : ${sig}`)
  console.log(`PAYLOAD : ${payload}`)

   let event;
   //Verify the event came from stripe

   try{
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
   }catch(error){
      console.log(`ERROR : ${error.message}`)
      return NextResponse.json({error : error.message})
   }

   //handle the checkout.session.completed event

   if(event.type === 'checkout.session.completed'){
      const session = event.data.object;

   fulfillOrder(session)
  
   }
   
   return NextResponse.json({message : 'succeeded'})

}
