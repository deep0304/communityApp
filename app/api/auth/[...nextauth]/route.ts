import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();
const adapter = PrismaAdapter(prisma);
const handler = NextAuth({

    providers:[
        CredentialsProvider({
            name:"Email",
            credentials:{
                username:{label:"Username", type:"text", placeholder:"Enter email"},
                password: {label:"Password", type:"password",placeholder:"password"}
            },
            async authorize(credentials,req) {
                const userCredentials = {
                    email:credentials?.username,
                    password :credentials?.password
                }
                const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user/login`,
                    {
                        method:"POST",
                        body:JSON.stringify(userCredentials),
                        headers:{
                            "Content-Type":"application/json"
                        }
                    }
                )
                
                return {
                    id:"user1"
                }
            }
        }),
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        })

    ],
    adapter,
    session: {
        //@ts-ignore
      jwt: true,
    },
        
    callbacks: {
        //@ts-ignore
      async session(session:any, user:any) {
        session.userId = user.id;
        return Promise.resolve(session);
      },
    },

})


export { handler as GET, handler as POST };


