"use client"
import './globals.css'
import {Navbar, ParticlesCanvas, Sidebar} from "@/components";
import {LayoutProvider} from "@/components/LayoutProvider";
import {store} from '@/utils/store'
import {Provider} from 'react-redux'

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body
      className={"relative bg-fixed bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black "}>
    <Provider store={store}>
      <LayoutProvider>
        <ParticlesCanvas/>
        <Navbar/>
        <div className={"overflow-hidden"}>
          <div className={"mx-auto px-4 sm:px-6 md:px-8"}>
            <Sidebar/>
            <div className={"lg:pl-[19.5rem]"}>
              <main className="pt-32 lg:pt-24">
                {children}
              </main>
            </div>
          </div>
        </div>
      </LayoutProvider>
    </Provider>
    </body>
    </html>
  )
}
