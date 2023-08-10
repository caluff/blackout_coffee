import React from 'react';
import {Category} from "@/types";
import classNames from "classnames";
import {useAppDispatch } from '@/utils/hooks'
import {falseSidebar} from "@/features/sidebar/sidebarSlice";

interface PropsLinkOfferIn{
  key:string,
  category:Category
  isActive:boolean,
  index:number,
}
const LinkOfferIn = (props: PropsLinkOfferIn) => {
  const dispatch = useAppDispatch()
  return (
    <li
      className={`animate-fade-right animate-once animate-duration-[1500ms] animate-delay-0 animate-ease-out animate-normal animate-fill-forwards`}>
      <div
        className={classNames({
          "block border-l pl-4 -ml-px border-transparent hover:border-slate-500 text-slate-400 hover:text-slate-300": !props.isActive,
          "block border-l pl-4 -ml-px text-indigo-400 border-current font-semibold": props.isActive
        })}
        onClick={()=>dispatch(falseSidebar())}
      >
        {props.category.title}
      </div>
    </li>
  );
};

export default LinkOfferIn;
