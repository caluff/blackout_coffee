import React from 'react';
import Image from "next/image";
import bg_admin from '@/public/bg_admin.jpg'
const Admin = () => {
  return (
    <div className={"h-screen w-screen flex overflow-hidden"}>
      <Image
        className={"hidden h-screen w-3/6 md:block"}
        src={bg_admin}
        alt={"bg admin"}/>
    </div>
  );
};

export default Admin;
