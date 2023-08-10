"use client"
import {useState, useEffect} from "react";
import useEmblaCarousel, {EmblaOptionsType} from "embla-carousel-react";
import {PropsWithChildren} from "react";
import {length} from "postcss";
import classNames from "classnames";

type DotsProps = {
  itemsLength: number;
  selectedIndex: number;
};
const Dots = ({ itemsLength, selectedIndex }: Props) => {
  const arr = new Array(itemsLength).fill(0);
  return (
    <div className="flex gap-1 my-2 justify-center -translate-y-5">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            className={classNames({
              "h-2 w-2 rounded-full transition-all duration-300 bg-gray-900":
                true,
              "opacity-50": !selected,
            })}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};

type Props = PropsWithChildren & EmblaOptionsType;
const Carousel = ({children, ...options}: Props) => {

    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
      function selectHandler() {
        const index = emblaApi?.selectedScrollSnap();
        setSelectedIndex(index || 0);
      }

      emblaApi?.on("select", selectHandler);
      return () => {
        emblaApi?.off("select", selectHandler);
      };
    }, [emblaApi]);

    return (
      <>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">{children}</div>
        </div>
        <Dots itemsLength={length} selectedIndex={selectedIndex}/>
      </>
    );
  }
export default Carousel;

