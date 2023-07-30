import {getXataClient} from "@/xata";
import Image from "next/image";
import picture from '@/public/Caipiroska.jpg'

const xata = getXataClient();
const FetchPost = async ({idTitle}: { idTitle: string }) => {
  const records = await xata.db.offer.getAll()

  return records.map((record) => (
    idTitle === record.category && (
      <div
        key={record.id}
        className={"rounded-2xl group relative block bg-black cursor-pointer h-64 md:h-72 lg:h-96"}
      >
        <Image
          src={picture}
          alt={record.name+""}
          fill
          className={"rounded-2xl absolute inset-0 object-cover opacity-75 transition-opacity group-hover:opacity-30"}
        />
        <div className={"relative p-4 sm:p-6 lg:p-8"}>
          <p className="text-xl font-medium uppercase tracking-widest text-slate-200 sm:text-sm">
            {record.name}
          </p>
          <p className="text-sm text-indigo-300 sm:text-xl">{`$${record.price}.00`}</p>
          <div className="mt-24 sm:mt-36 lg:mt-52">
            <div
              className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                {record.description}
              </p>
              {/*     <div className="mt-4 flex flex-wrap gap-1">
                                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                                    {record.description}
                                </span>
                            </div>*/}
            </div>
          </div>
        </div>
      </div>
    )))
};

export default FetchPost;
