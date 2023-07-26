"use client"
import './globals.css'
import {Navbar, ParticlesCanvas, Sidebar} from "@/components";
import React, {useState} from "react";

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({children,}: { children: React.ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  return (
    <html lang="en">
    <body className={"relative bg-fixed bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black "}>
    {/*<ParticlesCanvas/>*/}
    <Navbar
      currentSection={currentSection}
      onMenuButtonClick={() => setShowSidebar((prev) => !prev)}
    />
    <div className={"overflow-hidden"}>
      <div className={"mx-auto px-4 sm:px-6 md:px-8"}>
        <Sidebar open={showSidebar} onMenuButtonClick={()=>setShowSidebar((prev)=>!prev)}/>
        <div className={"lg:pl-[19.5rem]"}>
          {children}
        </div>
      </div>
    </div>
    </body>
    </html>
  )
}
