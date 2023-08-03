import React from 'react';

const LayoutOffer = (props:{
  children:React.ReactNode;
  admin:React.ReactNode;
}) => {
  return (
    <div className={"grid grid-cols-2 gap-4"}>
      {props.children}
      {props.admin}
    </div>
  );
};

export default LayoutOffer;
