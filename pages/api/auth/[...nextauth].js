import NextAuth from "next-auth";
import Providers from "next-auth/providers";


export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Providers.GitHub({
      clientId: process.env.HITHUB_CLIENT_ID,
      clientSecret: process.env.HITHUB_CLIENT_SECRET
    })
  ]
})