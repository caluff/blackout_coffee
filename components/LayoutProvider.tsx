"use client"
import {usePathname} from "next/navigation";
import React from "react";

export const LayoutProvider = ({ children, }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/admin" ? <h1>Welcome to Posts page!</h1>: children}
    </>
  )
};