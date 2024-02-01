import { NextResponse } from 'next/server'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

// // export default async function POST(req, res){
    
// //     const { items, email } = req.body;

// //     const transformedItems = items.map((item) => ({
// //        description : item.description,
// //        quantity : 1,
// //         price_data : {
// //             currency : 'gbp',
// //             unit_amount : item.deal.price * 100,
// //             product_data : {
// //                 name : item.name,
// //                 images : [item.img],
// //             },
// //         }
// //     }))

// //     const session = await stripe.checkout.sessions.create({
// //         payment_method_types : ['card'],
// //         line_items : transformedItems,
// //         shipping_address_collection : {
// //           allowed_countries : ['GB', 'US', 'CA',],
// //         },
// //         shipping_rates : ['shr_1OeoDYL6zEQMXk8ImT2SYRsp'],
// //         mode : payment,
// //         success_url : `${process.env.HOST}/success`,
// //         cancel_url : `${process.env.HOST}/checkout`,
// //         metadata : {
// //             email,
// //             images : JSON.stringify(items.map((item) => item.img)),
// //         }
// //     })

// //     res.status(200).json({ id: session.id })

// //     console.log(items, email)
// // }

export async function POST(response){
    
    const data = await response.json()
    

    const { cartItems : items, email } = data
    console.log(items, email)

   
    const transformedItems = items.map((item) => ({


      
        // description: 'Comfortable cotton t-shirt',
        // images: ['https://ng.jumia.is/cms/0-1-initiatives/weekend-super-savers/2023/Artboard_1_copy_2.png'],
        price_data: {
          currency: 'usd',
          unit_amount: item.deal.price * 100,
          product_data: {
            name: item.name,
            description: item.description,
            images: [item.img],
          },
        },
        quantity: item.quantity,
      
      //  description : item.description,
      //  quantity : item.quantity,
      //   price_data : {
      //       currency : 'gbp',
      //       unit_amount : item.deal.price * 100,
      //       product_data : {
      //           name : item.name,
      //           images : [item.img],
      //       },
      //   }

      
        // name: 'T-shirt',
        // description: 'Comfortable cotton t-shirt',
        // images: ['https://example.com/t-shirt.png'],
        // amount: 2000,
        // currency: 'usd',
        // price_data: {
        //   currency: 'usd',
        //   unit_amount: 2000,
        //   product_data: {
        //     name: 'T-shirt',
        //     description: 'Comfortable cotton t-shirt',
        //     images: ['https://example.com/t-shirt.png'],
        //   },
        // },
        // quantity: 1,
      
    }))

   



    const session = await stripe.checkout.sessions.create({
        payment_method_types : ['card'],
       line_items : transformedItems,
      //  line_items: [{
      //   // description: 'Comfortable cotton t-shirt',
      //   // images: ['https://ng.jumia.is/cms/0-1-initiatives/weekend-super-savers/2023/Artboard_1_copy_2.png'],
      //   price_data: {
      //     currency: 'usd',
      //     unit_amount: 2000,
      //     product_data: {
      //       name: 'T-shirt',
      //       description: 'Comfortable cotton t-shirt',
      //       images: ['https://ng.jumia.is/cms/0-1-initiatives/weekend-super-savers/2023/Artboard_1_copy_2.png'],
      //     },
      //   },
      //   quantity: 1,
      // }],
        shipping_address_collection : {
          allowed_countries : ['GB', 'US', 'CA',],
        },
      //  shipping_options : ['shr_1OeoDYL6zEQMXk8ImT2SYRsp'],
        mode : 'payment',
        success_url : `${process.env.HOST}/success`,
        cancel_url : `${process.env.HOST}/checkout`,
        metadata : {
            email,
            images : JSON.stringify(items.map((item) => item.img)),
        }
    })

    //   res.status(200).json({ id: session.id })
 return NextResponse.json({ items, transformedItems, email, session})
//  return NextResponse.json({ id: session.id })

   
}



// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       // Create Checkout Sessions from body params.
//       const session = await stripe.checkout.sessions.create({
//         line_items: [
//           {
//             // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//             price: '800',
//             quantity: 1,
//           },
//         ],
//         mode: 'payment',
//         success_url: `${req.headers.origin}/?success=true`,
//         cancel_url: `${req.headers.origin}/?canceled=true`,
//       });
//       res.redirect(303, session.url);
//     } catch (err) {
//       res.status(err.statusCode || 500).json(err.message);
//     }
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
// }

// import Stripe from "stripe";

// const stripe = new Stripe('sk_test_51OemV9L6zEQMXk8IzjZzO1k7WbEP4i2ufgXIrOVPydJCL6TZXVO33PYtbdFBAu09M1meygLb4EECELHQJFeTQHmG00aSHtjRN5')

// const stripe = require('stripe')('sk_test_51OemV9L6zEQMXk8IzjZzO1k7WbEP4i2ufgXIrOVPydJCL6TZXVO33PYtbdFBAu09M1meygLb4EECELHQJFeTQHmG00aSHtjRN5')
// const HOST = process.env.HOST

// export async function handler(req, res){
//   const {method, body} = req;

//   const { cartItems : items, email } = body;
  

//   if(method === 'POST'){
//     try{

     
//     console.log(items, email)

   
//     const transformedItems = items.map((item) => ({
//        description : item.description,
//        quantity : item.quantity,
//         price_data : {
//             currency : 'gbp',
//             unit_amount : item.deal.price * 100,
//             product_data : {
//                 name : item.name,
//                 images : [item.img],
//             },
//         }
//     }))

   



//      const session = await stripe.checkout.sessions.create({
//          payment_method_types : ['card'],
//          line_items : transformedItems,
//          shipping_address_collection : {
//            allowed_countries : ['GB', 'US', 'CA',],
//          },
//          shipping_rates : ['shr_1OeoDYL6zEQMXk8ImT2SYRsp'],
//        mode : payment,
//          success_url : `${process.env.HOST}/success`,
//          cancel_url : `${process.env.HOST}/checkout`,
//          metadata : {
//              email,
//              images : JSON.stringify(items.map((item) => item.img)),
//          }
//      })
//     res.status(200).json({sessionId : session.id});
//     }catch(err){
//       res.status(500).json({error : 'Error in checkout session'});
//     }
//   }else{
//     res.status(405).json({error : 'Method not allowed'});
//   }
// }

