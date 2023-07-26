import {PropsLinkOffer} from "@/types";
import Link from "next/link";
import {useEffect} from "react";

const LinkOffer = (props: PropsLinkOffer) => {
  function handleClick(event: any) {
    event.preventDefault();
    const elem = document.querySelector(props.href);
    elem?.scrollIntoView({behavior: 'smooth'});
    props.setCurrentSection(props.href.slice(1))
  }
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            props.setCurrentSection(entry.target.id)
          }
        })
      },
      {threshold: 0.5}
    )
    document.querySelectorAll('section').forEach((elem) => {
      observer.observe(elem)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <Link href={props.href}
          onClick={handleClick}>
      {props.children}
    </Link>
  );
};

export default LinkOffer;
