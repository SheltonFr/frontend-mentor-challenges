import React from "react";

interface Props {
  cvc?: string;
}
const CardBack: React.FC<Props> = ({cvc = "000"}) => {
  return (
    <div className="card-back absolute rounded-md p-5 h-[12.3rem] w-96 space-y-10 bottom-[25%] left-[39%]">
      <span className="relative top-16 left-72 text-white">{cvc}</span>
    </div>
  );
};

export default CardBack;
