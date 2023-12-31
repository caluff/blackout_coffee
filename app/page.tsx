"use client"
import Link from "next/link";
import {ClockIcon, PhoneIcon, MapIcon, Cog6ToothIcon} from "@heroicons/react/24/outline";
import {Carousel} from '@/components/index'
import {NextPage} from "next";
import {trueOffer} from "@/features/offer/offerSlice";
import {useAppDispatch} from "@/utils/hooks";
import {setCurrentSection} from "@/features/currentSection/currentSectionSlice";

const Home : NextPage=()=>{
  const dispatch = useAppDispatch()
  function handleClick() {
    dispatch(trueOffer());
  }
  return (
    <header className={"relative"}>
      <div className={"relative flex flex-col justify-center items-center"}>
        <h1
          className={"mb-4 uppercase text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl text-center tracking-tight animate-fade-down animate-once animate-duration-[1300ms] animate-delay-0 animate-ease-in-out animate-normal animate-fill-forwards"}>
          Bienvenidos al
          <span
            className={"component animate-pulse animate-infinite animate-duration-[1500ms] animate-delay-[1300ms] animate-ease-linear"}>
            &nbsp;Blackout
          </span>
        </h1>
        <div
          className={"my-4 sm:mt-10 flex-row sm:flex justify-center space-x-6 text-sm animate-ping animate-once animate-duration-[1300ms] animate-delay-0 animate-ease-linear animate-reverse"}>
          <Link
            className={"mb-6 shadow-lg shadow-sky-500/50 bg-sky-500 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-12 rounded-lg w-full flex items-center justify-center sm:w-auto animate-fade-right animate-once animate-duration-[1300ms] animate-delay-0 animate-ease-in-out animate-normal animate-fill-forwards"}
            href={"/offer"}
            onClick={handleClick}
          >
            Get Offer
          </Link>
        </div>
        <Carousel/>
        {/*<ul className="flex items-center gap-6 md:gap-8 justify-center">*/}
        {/*  <li>*/}
        {/*    <Link*/}
        {/*      href={"/"}*/}
        {/*      rel={""}*/}
        {/*      target={""}*/}
        {/*      className={"text-sky-500 transition hover:sky-400"}*/}
        {/*    >*/}
        {/*      <span className="sr-only">Instagram</span>*/}
        {/*      <svg*/}
        {/*        className="mb-4 h-6 w-6 hover:shadow-lg hover:shadow-sky-500/50"*/}
        {/*        fill="currentColor"*/}
        {/*        viewBox="0 0 24 24"*/}
        {/*        aria-hidden="true"*/}
        {/*      >*/}
        {/*        <path*/}
        {/*          fillRule="evenodd"*/}
        {/*          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"*/}
        {/*          clipRule="evenodd"*/}
        {/*        />*/}
        {/*      </svg>*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <Link*/}
        {/*      href={"/"}*/}
        {/*      rel={""}*/}
        {/*      target={""}*/}
        {/*      className={"text-sky-500 transition hover:sky-400"}*/}
        {/*    >*/}
        {/*      <PhoneIcon*/}
        {/*        className="h-6 w-6 text-sky-500 mb-4 hover:shadow-lg hover:shadow-sky-500/50"/>*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*</ul>*/}

        {/*Horario*/}
        <div
          className={"justify-center gap-2 flex flex-col md:flex-row items-center mt-12 animate-fade-left animate-once animate-duration-[1300ms] animate-delay-[2600ms] animate-ease-linear"}>
          {/*panel izquierdo*/}
          <div className={"flex gap-2 items-center"}>
            <h1 className={"uppercase text-white font-bold"}>
              Horarios:
            </h1>
            <ClockIcon className="h-8 w-8 text-red-600"/>
            <h2 className={"text-red-600 font-semibold"}>
              Cerrado
              <span className={"text-gray-400/50"}> · Abre</span>
            </h2>
          </div>
          {/*panel gis derecho*/}
          <div
            className={"bg-gray-700/60 py-2 px-3 rounded-full flex justify-between w-full md:w-96 items-center"}>
            <h4
              className={"uppercase text-sm text-white"}>
              Todos los dias
            </h4>
            <h4
              className={"uppercase text-xs text-white"}>
              11:00 AM - 0:00 AM
            </h4>
          </div>
        </div>
        {/*Ubicación*/}
        <div
          className={"justify-center gap-2 flex flex-col md:flex-row items-center mt-12 animate-fade-left animate-once animate-duration-[1300ms] animate-delay-[2600ms] animate-ease-linear"}>
          {/*panel izquierdo*/}
          <div className={"flex gap-2 items-center"}>
            <h1 className={"uppercase text-white font-bold"}>
              Ubicación:
            </h1>
            <MapIcon className="h-8 w-8 text-gray-500"/>
          </div>
          {/*panel gis derecho*/}
          <div className={"pl-5 bg-gray-700/60 py-2 px-3 rounded-full w-full md:w-[31rem] text-start"}>
            <h4
              className={"text-sm text-white"}>
              SAN MIGUEL <span className={"text-green-400"}>#000</span> <span
              className={"text-xs text-gray-300/70"}>e/</span>MACEO Y UNION
            </h4>
            <h4
              className={"uppercase text-xs text-gray-400/70 mt-1"}>
              Santa Clara, Villa Clara
            </h4>
          </div>
        </div>
        <Link
          className={"group mb-4 relative pl-16 border-2 border-black w-32 mt-6 bg-black hover:bg-white focus:outline-none text-white hover:text-black font-semibold text-xs h-8 px-12 rounded-full flex items-center justify-center"}
          href={"/login"}>
          <Cog6ToothIcon className="h-5 w-5 text-white absolute left-3 group-hover:text-black"/>
          Administrar
        </Link>

      </div>
    </header>

  )
}
export default Home;
