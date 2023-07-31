import {XMarkIcon} from "@heroicons/react/24/outline";
import {Nav} from "@/components/index";

interface PropsSidebar{
  open?:boolean,
  noOpen(open:boolean): void,
  onMenuButtonClick?():void,
}
const Sidebar = (props: PropsSidebar) => {
  return (
    <>
      {props.open && (
        <div className={"fixed z-50 inset-0 overflow-y-auto lg:hidden"}>
          <div className={"fixed inset-0 bg-black/60 backdrop-blur-sm"}></div>
          <div className={"relative bg-black/60 p-6 w-80 max-w-[calc(100%-3rem)]"}>
            <button type={"button"}
                    className={"absolute z-10 top-5 right-5 w-8 h-8 flex items-center justify-center hover:text-slate-300 text-slate-400"}>
              <span className={"sr-only"}>Close Navigation</span>
              <XMarkIcon width={24} height={24} onClick={props.onMenuButtonClick}/>
            </button>
            <Nav noOpen={props.noOpen} onMenuButtonClick={() => props.noOpen(false)}/>
          </div>
        </div>
      )}
      <div
        className={"hidden h-full lg:block fixed z-20  top-[3.8125rem] left-[max(opx,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 pr-8 overflow-y-auto"}>
        <Nav/>
      </div>
    </>
  );
};

export default Sidebar;
