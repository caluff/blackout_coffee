// Props Navbar
export interface PropsNav{
  onMenuButtonClick():void
}
// Props Sidebar
export interface PropsSidebar{
  open?:boolean,
  onMenuButtonClick?():void,
}
// Props PropsLinkOffer => Sidebar
export interface PropsLinkOffer{
  href:string,
  children:React.ReactNode,
}
// Props PropsLinkOfferIn => Sidebar => LinkOffer
export interface PropsLinkOfferIn{
  key:string,
  category:Category
  isActive:boolean,
  index:number,
}
export interface Category{
  id: string,
  title: string,
  route:string,
  current:boolean,
}