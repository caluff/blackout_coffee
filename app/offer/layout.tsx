"use client"
import {useAppSelector} from "@/utils/hooks";

const LayoutOffer = (props: {
  children: React.ReactNode;
  admin: React.ReactNode;
}) => {
  const valueUser = useAppSelector(state => state.user.value)
  return (
    valueUser ?
      <div className={"grid md:grid-cols-4 gap-4"}>
        <div className={"md:col-span-3"}>
          {props.children}
        </div>
        <div>
          {props.admin}
        </div>
      </div>
      :
      <div className={"grid gap-4"}>
        {props.children}
      </div>

  );
};

export default LayoutOffer;
