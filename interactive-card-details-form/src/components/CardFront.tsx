import React from "react";

interface Props {
  name?: string;
  number?: string;
  mounth?: string;
  year?: string;
}
const CardFront: React.FC<Props> = ({name = "Jane Appleseed", mounth = "00", number = "0000 0000 0000 0000", year = "00"}) => {
  return (
    <div className="card-front absolute rounded-md p-5 w-96 space-y-10 top-[17%] left-[25%]">
      <svg
        width="84"
        height="47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
        <path
          d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
          stroke="#fff"
        />
      </svg>

      <div className="space-y-3 text-white/80">
        <h2 className="text-3xl tracking-wide">{number}</h2>
        <div className="flex justify-between pr-8">
          <p>{name}</p>
          <p>{mounth}/{year}</p>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
