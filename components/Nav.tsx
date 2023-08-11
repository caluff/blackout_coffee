"use client"
import {usePathname} from "next/navigation";
import {HomeIcon, MagnifyingGlassIcon, QueueListIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import {categoriesRoute} from "@/constants";
import {Category} from "@/types";
import {LinkOffer, LinkOfferIn} from "@/components/index";

import { useAppSelector, useAppDispatch } from '@/utils/hooks'
import {trueOffer,falseOffer} from "@/features/offer/offerSlice";
import {falseSidebar} from "@/features/sidebar/sidebarSlice";
import {onCurrentSection} from "@/features/currentSection/currentSectionSlice";


const Nav = () => {
  const valueOffer = useAppSelector(state=>state.offer.value)
  const dispatch = useAppDispatch()
  let pathname = usePathname();
  const handleClick = () => {
    dispatch(falseSidebar())
    dispatch(falseOffer())
    dispatch(onCurrentSection())
  }
  return (
    <nav id={"nav"}
         className={"lg:text-sm lg:leading-6 relative h-full bg-transparent lg:border-r border-gray-50/[0.06]"}>
      <div className={"sticky top-0 -ml-0.5 pointer-events-none hidden lg:block"}>
        <div className={"h-10 bg-transparent"}></div>
        <div className={"bg-transparent relative pointer-events-auto ml-1 pr-1"}>
          <button type={"button"}
                  className={"group text-slate-400 hidden w-full lg:flex items-center text-sm leading-6 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-gray-300 opacity-80 hover:bg-gray-900 bg-gradient-to-r from-gray-700 to-transparent"}>
            <MagnifyingGlassIcon width={24} height={24} className={"mr-3 flex-none group-hover:animate-spin group-hover:animate-once group-hover:animate-duration-[1500ms] group-hover:animate-delay-0 group-hover:animate-ease-out group-hover:animate-alternate group-hover:animate-fill-forwards"}/>
            Quick search...
          </button>
        </div>
        <div className={"h-8 bg-gradient-to-b from-transparent"}></div>
      </div>
      <ul className={""}>
        <li>
          <Link href={"/"}
                className={"group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-sky-400 focus:animate-wiggle focus:animate-once focus:animate-duration-1000 focus:animate-delay-0 focus:animate-ease-in-out focus:animate-normal focus:animate-fill-forwards"}
                onClick={handleClick}
                >
            <div
              className={"mr-4 rounded-md ring-0 ring-slate-900/5 group-hover:ring-slate-900/10 group-hover:bg-sky-500 bg-slate-700"}>
              <HomeIcon width={24} height={24}/>
            </div>
            Home
          </Link>
        </li>
        <li>
          <Link href={"/offer"}
                onClick={() => dispatch(trueOffer())}
                className={"group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-indigo-400 focus:animate-wiggle focus:animate-once focus:animate-duration-1000 focus:animate-delay-0 focus:animate-ease-in-out focus:animate-normal focus:animate-fill-forwards"}>
            <div
              className={" mr-4 rounded-md ring-0 ring-slate-900/5 group-hover:ring-slate-900/10 group-hover:bg-indigo-500 bg-slate-800"}>
              <QueueListIcon width={24} height={24}/>
            </div>
            Offer
          </Link>
        </li>
        {valueOffer && (
          <li className={"mt-12 lg:mt-8"}>
            <h5
              className={"mb-8 lg:mb-3 font-semibold text-slate-200 animate-fade-down animate-once animate-duration-[1500ms] animate-delay-0 animate-ease-in-out animate-normal animate-fill-forwards"}>
              Category
            </h5>
            <ul className={"space-y-6 lg:space-y-2 border-l border-slate-800"}>
              {categoriesRoute.map((category: Category, index: number) => {
                const isActive = pathname.startsWith(`/offer/#${category.id}`);
                return (
                  <LinkOffer key={category.id} href={category.route} >
                    <LinkOfferIn
                      key={category.id}
                      category={category}
                      isActive={isActive}
                      index={index * 1000}
                    />
                  </LinkOffer>
                )
              })}
            </ul>
          </li>
        )}
      </ul>
    </nav>
  )
}
export default Nav;