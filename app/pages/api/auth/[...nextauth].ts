import NextAuth from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";
import * as models from "../../../models";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, {
    providers: [
      Providers.Google({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
    ],
    adapter: Adapters.TypeORM.Adapter(process.env.DATABASE_URL!, {
      models,
    }),
    session: {
      jwt: true,
    },
    callbacks: {
      async session(session, user) {
        session.userId = user.id;
        return Promise.resolve(session);
      },
    },
  });
}
