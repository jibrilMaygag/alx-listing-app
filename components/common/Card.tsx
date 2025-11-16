import React from "react";
import Image from "next/image";
import type { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, image, description, price }) => {
  return (
    <div className="rounded-2xl shadow-md overflow-hidden bg-white">
      <div className="relative h-44 w-full">
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm mt-1 text-gray-600">{description}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-sm font-medium">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
