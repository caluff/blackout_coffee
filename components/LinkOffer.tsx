'use client'
import {PropsLinkOffer} from "@/types";
import Link from "next/link";
import {useAppDispatch} from "@/utils/hooks";
import {setCurrentSection} from "@/features/currentSection/currentSectionSlice";
import {useEffect} from "react";

const LinkOffer = (props: PropsLinkOffer) => {
  const dispatch = useAppDispatch()
  function handleClick(event: any) {
    event.preventDefault();
    const elem = document.querySelector(props.href);
    elem?.scrollIntoView({behavior: 'smooth'});
    dispatch(setCurrentSection({value: props.href.slice(1)}))
  }
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            dispatch(setCurrentSection({value: entry.target.id}))
          }
        });
      },
      {threshold: 0.5}
    )
    document.querySelectorAll('section').forEach((elem) => {
      observer.observe(elem)
    })
    return () => observer.disconnect()
  }, [dispatch])

  return (
    <Link href={props.href}
          onClick={handleClick}>
      {props.children}
    </Link>
  );
};

export default LinkOffer;
