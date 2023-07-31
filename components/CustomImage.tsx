"use client"
import {useState} from "react";
import Image from "next/image";
import no_picture from '@/public/no_picture.jpg'

interface CustomImageProps{
  src: string
  alt: string
}
const CustomImage = ({src,alt}:CustomImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const handleError = () => {
    setImgSrc(no_picture.src)
  }
  return (
    <Image
      onError={handleError}
      src={imgSrc}
      alt={alt}
      fill
      className={"rounded-2xl absolute inset-0 object-cover opacity-75 transition-opacity group-hover:opacity-30"}
    />
  );
};

export default CustomImage;
