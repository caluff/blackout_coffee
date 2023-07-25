import React from 'react';
import {PropsSidebar} from "@/types";
import {MagnifyingGlassIcon, HomeIcon, QueueListIcon,XMarkIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import classNames from "classnames";

const Sidebar = ({open, setOpen}: PropsSidebar) => {
  return (
    <div
      className={classNames({
        "h-full lg:block fixed z-10 top-[3.8125rem] right-auto w-[19.5rem] pb-10 pr-8 overflow-auto overflow-y-auto lg:translate-x-1":true,
        "transition-transform .3s ease-in-out md:translate-x-o":true,
        "-translate-x-full":!open,
        // "fixed z-10 h-full lg:block top-[3.8125rem] right-auto w-[19.5rem] pb-10 pr-8 overflow-auto overflow-y-auto":open,
      })}>
      <div className={classNames({
        "fixed inset-0 backdrop-blur-sm lg:backdrop-blur-none":open,
      })}></div>
      {open &&(
        <button type={"button"}
                className={classNames({
                  "absolute z-10 top-5 right-5 w-8 h-8 lg:hidden flex items-center justify-center hover:text-slate-300 text-slate-400":true,
                })}>
          <span className={"sr-only"}>Close Navigation</span>
          <XMarkIcon width={24} height={24} onClick={()=>setOpen(!open)}/>
        </button>
      )}
      <nav id={"nav"} className={"lg:text-sm lg:leading-6 relative h-full bg-black/80"}>
        <div className={"sticky top-0 -ml-0.5 pointer-events-none hidden lg:block"}>
          <div className={"h-10 bg-transparent"}></div>
          <div className={"bg-transparent relative pointer-events-auto ml-1"}>
            <button type={"button"}
                    className={"text-slate-400 hidden w-full lg:flex items-center text-sm leading-6 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 bg-slate-700 opacity-80 hover:bg-slate-700"}>
              <MagnifyingGlassIcon width={24} height={24} className={"mr-3 flex-none"}/>
              Quick search...
            </button>
          </div>
          <div className={"h-8 bg-gradient-to-b from-transparent"}></div>
        </div>
        <ul>
          <li>
            <Link
              href={"/"}
              className={"group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-sky-400 "}
              // onClick={() => homeClick()}>
            >
              <div

                className={"shadow-lg shadow-sky-500/50 mr-4 rounded-md ring-0 ring-slate-900/5 group-hover:ring-slate-900/10 group-hover:bg-sky-500 bg-slate-700"}>
                <HomeIcon width={24} height={24}/>
              </div>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/offer"}
              // onClick={() => setVisibleOffer(true)}
                  className={"group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-indigo-400"}>
              <div

                className={"shadow-lg shadow-indigo-500/50 mr-4 rounded-md ring-0 ring-slate-900/5 group-hover:ring-slate-900/10 group-hover:bg-indigo-500 bg-slate-800"}>
                <QueueListIcon width={24} height={24}/>
              </div>
              Offer
            </Link>
          </li>
          {/*{visibleOffer && (*/}
          {/*  <li className={"mt-12 lg:mt-8"}>*/}
          {/*    <h5 className={"mb-8 lg:mb-3 font-semibold text-slate-200 "}>*/}
          {/*      Category*/}
          {/*    </h5>*/}
          {/*    <ul className={"space-y-6 lg:space-y-2 border-l border-slate-800"}>*/}
          {/*      {categoriesRoute.map((category, index) => {*/}
          {/*        const isActive = pathname.startsWith(`/offer/#${category.id}`);*/}
          {/*        return (*/}
          {/*          <ScrollLink href={category.route} setCurrentSection={setCurrentSection}>*/}
          {/*            <LiOffer key={category.id} category={category} isActive={isActive}*/}
          {/*                     isActiveS={isActiveS} isNotActiveS={isNotActiveS}*/}
          {/*                     metToggle={metToggle} index={index}/>*/}
          {/*          </ScrollLink>*/}
          {/*        )*/}
          {/*      })}*/}
          {/*    </ul>*/}
          {/*  </li>*/}
          {/*)}*/}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
