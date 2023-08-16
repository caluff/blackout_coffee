import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { XataAdapter } from '@next-auth/xata-adapter';
import {XataClient} from '@/xata'

const xata = new XataClient();

export default NextAuth({
  adapter: XataAdapter(xata),
  providers: [
    CredentialsProvider({
      name: "Credential",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize (credentials){
        const user = await xata.db.users
          .filter({ name: credentials?.username })
          .getFirst();
        if (credentials?.password === user?.password) {
          return user;
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user.id;
        token.username = user.name;
      }
      return token;
    },
    async session({ session }) {
      return session;
    }
  },
})