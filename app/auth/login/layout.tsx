"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const Authlayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const session: any = useSession();
  const accessToken = session?.data?.token;
  const role = session?.data?.role;
  if (!accessToken) {
    return <div>{children}</div>;
  } else if (accessToken && role?.toLowerCase().includes("admin")) {
    return router.push("/admin");
  } 
  else {
    return router.push("/");
  }
};
export default Authlayout;
