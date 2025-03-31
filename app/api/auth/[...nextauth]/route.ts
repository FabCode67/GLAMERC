import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/prisma/client";
import { comparePassword } from "@/app/utils/hash";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({ where: { email: credentials?.email } });
        if (!user) throw new Error("Invalid credentials");

        const isValid = await comparePassword(credentials!.password, user.password);
        if (!isValid) throw new Error("Invalid credentials");

        return { id: user.id, email: user.email, role: user.role,name:user.name,phone:user.phone,gender:user.gender };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: any, user: any }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.role = user.role;
        token.name = token.name,
        token.phone = token.phone,
        token.gender = token.gender
      }
      return token;
    },
    async session({ session, token }: { session: any, token: any }) {
      if (token) {
        session.user = {
          id: token.id,
          email: token.email,
          role: token.role,
          name: token.name,
          phone:token.phone,
         gender:token.gender
        };
      }
      return session;
    },
  },
};
  

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
