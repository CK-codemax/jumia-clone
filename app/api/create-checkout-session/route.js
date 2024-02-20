import { NextResponse } from 'next/server'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)



export async function POST(response){
    
    const data = await response.json()
    

    const { cartItems : items, email, currency } = data
   // console.log(items, email)

   
    const transformedItems = items.map((item) => ({
        price_data: {
          currency: currency,
          unit_amount: item.deal.price * 100,
          product_data: {
            
            name: item.name,
            description: item.description,
            images: [item.img],
         
          },
        },
        quantity: item.quantity,
    }))

   



    const session = await stripe.checkout.sessions.create({
        payment_method_types : ['card'],
       line_items : transformedItems,
   
        shipping_address_collection : {
          allowed_countries : ['GB', 'US', 'CA', 'NG',],
        },
      // shipping_options : [ {
      //   shipping_rate : 'shr_1OeoDYL6zEQMXk8ImT2SYRsp'
      // },],
        mode : 'payment',
        success_url : `${process.env.HOST}/success`,
        cancel_url : `${process.env.HOST}/checkout`,
        metadata : {
            email,
            images : JSON.stringify(items.map((item) => item.img)),
        }
    })

  
 return NextResponse.json({ items, transformedItems, email, session})


   
}
