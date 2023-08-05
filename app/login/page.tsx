import {ArrowSmallLeftIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import bg_admin from '@/public/bg_admin.jpg'
import Link from "next/link";

const Login = () => {
  return (
    <div className={"h-screen w-screen flex overflow-hidden relative"}>
      <Link
        href={"/"}
        className={"absolute z-10 top-5 right-5 w-8 h-8 flex items-center justify-center hover:text-slate-300 text-slate-400"}>
        <span className={"sr-only"}>Volver a Home</span>
        <ArrowSmallLeftIcon width={24} height={24}/>
      </Link>
      <div className={"hidden h-screen w-2/5 md:block relative"}>
        <Image
          src={bg_admin}
          alt={"bg login"}
          fill
        />
      </div>
      <div className={"bg-gray-900 shadow-md px-8 pt-6 pb-8 mb-4 w-full md:w-3/5 h-screen"}>
        <div className={"flex mt-32"}>
          <div className="w-full max-w-xs mx-auto">
            <form className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  className="border text-sm rounded-lg block w-full py-2 px-3 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"/>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="border text-sm rounded-lg block w-full placeholder-gray-400 text-white bg-gray-700 border-red-500 py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
                <p className="text-red-500 text-xs italic">Please choose a password.</p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
