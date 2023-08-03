import {categoriesFetch} from "@/constants";
import {Suspense} from "react";
import {FetchPost} from "@/components";


const Offer = () => {
  return (
    <div className={"flex flex-col text-gray-200"}>
      {categoriesFetch.map(([id, title]) => (
        <section id={id} key={id} className={"relative z-10 border-b border-gray-50/10"}>
          <div className={"flex items-center"}>
            <h1 className={"text-2xl sm:text-3xl font-extrabold tracking-tight text-indigo-400 my-4"}>
              {title}
            </h1>
          </div>
          <Suspense fallback={"loading..."}>
            <div className={"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 pb-4"}>
              {/*<FetchPost idTitle={id}/>*/}
              123
            </div>
          </Suspense>
        </section>
      ))}
    </div>
  );
};

export default Offer;
