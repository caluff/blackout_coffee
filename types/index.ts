import React from "react";

export interface PropsNav{
  onMenuButtonClick():void
  currentSection:any
}
export interface PropsSidebar{
  open:boolean,
  onMenuButtonClick():void
}
export interface PropsLinkOffer{
  href:string,
  children:React.ReactNode,
  setCurrentSection:any,
}