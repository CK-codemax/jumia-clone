// import GitHubProvider from 'next-auth/providers/github'
// import CredentialsProvider from 'next-auth/providers/credentials'

// export const options = {
//     providers : [
//         GitHubProvider({
//             clientId : process.env.GITHUB_ID,
//             clientSecret : process.env.GITHUB_SECRET,
//         }),

//         CredentialsProvider({
//             name : 'Credentials',
//             credentials : {
//                 username : {
//                     label : 'Username:',
//                     type : 'text',
//                     placeholder : 'Enter your username',
//                 },

//                 password : {
//                     label : 'Password:',
//                     type : 'password',
//                     placeholder : 'Enter your password',
//                 },

//                 // async Authorize(credentials){
//                 //     const user = {id : 30, name : 'ochuko', password : 'JavascriptDoctor_WH1'}

//                 //     if(credentials?.username === user.name && credentials?.password === user.password){
//                 //         return user
//                 //     }else{
//                 //         return null
//                 //     }
//                 // }
//             },
//         })
//     ],
//     //pages : {},
// }

import GoogleProvider from "next-auth/providers/google";

export const options = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      })

      
    ],
  }
