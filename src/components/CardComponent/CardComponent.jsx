import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { formattedPrice } from "../constants";

const CardComponent = (item) => {
  const card = item.props;

  return (
    <Link to={`/product/detail/${card._id}`}>
      <div className="w-56 card-product m-2 p-3 hover:border-2 border-gray-300 rounded-sm">
        <img
          className="w-full"
          src={`${process.env.REACT_APP_BE}/image/${card.image}`}
          alt=""
        />
        <p className="text-center">{card.name}</p>
        <p className="text-center font-bold">{formattedPrice(card.price)}</p>
      </div>
    </Link>
  );
};

export default CardComponent;
