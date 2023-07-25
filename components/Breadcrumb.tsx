"use client"
import {useSelectedLayoutSegments} from 'next/navigation';
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Breadcrumb = () => {
  const segments = useSelectedLayoutSegments();
  return (
    <nav aria-label={"breadcrumb"}>
      <ol className={"ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0"}>
        {segments.length === 0 ?
          (<li className={"felx item-center text-gray-400"}>
            <Link href={"/"} passHref>
              Home
            </Link>
          </li>)
          :
          segments.map((segment, index) => {
            const isLastItem = index === segments.length - 1;
            if (!isLastItem) {
              return (
                <li className={"flex items-center text-white"} key={index}>
                  <Link href={`${segment}`} passHref>
                    {segment}
                  </Link>
                  <ChevronRightIcon className={"mx-3 overflow-visible text-gray-400 w-3 h-6"}/>
                </li>
              )
            } else {
              return (
                <li className={"flex item-center text-white"} key={index}>
                  <Link href={`${segment}`} passHref>
                    {segment}
                  </Link>
                  <ChevronRightIcon className={"mx-3 overflow-visible text-gray-400 w-3 h-6"}/>
                </li>
              )
            }
          })
        }
      </ol>
    </nav>
  );
};

export default Breadcrumb;
