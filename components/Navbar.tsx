import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {Breadcrumb} from "@/components/index";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Blackhole from '@/public/black-hole.svg'
import {PropsNav} from "@/types";


const Navbar = (props:PropsNav) => {
  return (
    <div
      className={"sticky z-10 w-full backdrop-blur-lg flex-none transition-colors duration-500 lg:border-b border-slate-50/[0.06] bg-transparent"}>
      <div className={"mx-auto"}>
        <div className={"py-4 border-b lg:px-8 lg:border-0 border-slate-300/10 mx-4 lg:mx-0"}>
          <div className={"relative flex items-center"}>
            <Link
              className={"mr-3 flex w-[2.0625] overflow-hidden md:w-auto"}
              href={"/"}
            >
              <Image
                className="w-auto h-6"
                src={Blackhole}
                alt={"Logo Black Out"}
              />
              <div className={"relative py-1 px-3 flex"}>
                <span className={"hidden lg:block text-white text-xs"}>Blackout</span>
              </div>
            </Link>
            <button
              type={"button"}
              className={"ml-auto text-gray-400 w-8 h-8 -my-1 flex items-center justify-center hover:text-gray-300 lg:hidden"}
            >
              <span className={"sr-only"}>Search</span>
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className={"flex item-center p-4 border-gray-50/[0.06] lg:hidden"}>
          <button
            type="button"
            className={"text-gray-400 hover:text-gray-300"}
            onClick={props.onMenuButtonClick}
          >
            <span className={"sr-only"}>Navigation</span>
            <Bars3Icon className={"w-6 h-6"}/>
          </button>
          <Breadcrumb/>
          {/*{currentSection !== null ?*/}
          {/*  <span className={"flex item-center text-indigo-400"}>{categoriesFetch.map(([id,text])=>(*/}
          {/*    (id===currentSection)?text:<></>*/}
          {/*  ))}</span>*/}
          {/*  :*/}
          {/*  <></>}*/}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
