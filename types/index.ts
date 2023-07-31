// Props Navbar
export interface PropsNav{
  onMenuButtonClick():void
}
// Props Sidebar

// Props PropsLinkOffer => Sidebar
export interface PropsLinkOffer{
  href:string,
  children:React.ReactNode,
}
export interface Category{
  id: string,
  title: string,
  route:string,
  current:boolean,
}