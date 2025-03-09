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

        return { id: user.id, email: user.email, role: user.role };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: any, user: any }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }: { session: any, token: any }) {
      session.user.role = token.role;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' as 'jwt' },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
