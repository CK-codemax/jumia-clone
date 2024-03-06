import { NextResponse } from 'next/server'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

function shippingRate(cur){
  if(cur === 'usd')return 'shr_1Ood5KL6zEQMXk8I7LJzjTxs'
  if(cur === 'gbp')return 'shr_1OeoDYL6zEQMXk8ImT2SYRsp'
  if(cur === 'eur')return 'shr_1Ood8TL6zEQMXk8Ih96DMBrx'
}



export async function POST(response){
    
    const data = await response.json()
    

    const { cartItems : items, email, currency, uniqueId } = data
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
      shipping_options : [ {
        shipping_rate : shippingRate(currency)
      },],
        mode : 'payment',
        success_url : `${process.env.HOST}/success/${uniqueId}`,
        cancel_url : `${process.env.HOST}/checkout`,
        metadata : {
            email,
            images : JSON.stringify(items.map((item) => item.img)),
        }
    })

  
 return NextResponse.json({ items, transformedItems, email, session})


   
}
