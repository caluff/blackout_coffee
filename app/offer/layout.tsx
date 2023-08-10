import React from 'react';

const LayoutOffer = (props:{
  children:React.ReactNode;
  admin:React.ReactNode;
}) => {
  return (
    <div className={"grid md:grid-cols-4 gap-4"}>
      <div className={"md:col-span-3"}>
        {props.children}
      </div>
      <div>
        {props.admin}
      </div>

    </div>
  );
};

export default LayoutOffer;
