'use client'
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

export interface AuthContextProps {
  children: React.ReactNode;
  session: Session;
}

export default function AuthContext({ children ,session }: AuthContextProps) {
  console.log("object");
  console.log(session);
  return (
    <SessionProvider session={session} >
        {children}
    </SessionProvider>
  );
}