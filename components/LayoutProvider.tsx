"use client"
import {usePathname} from "next/navigation";
import Login from '@/app/login/page'

export const LayoutProvider = ({ children, }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/login" ? <Login/>: children}
    </>
  )
};