import React from "react";
import { Link } from "react-router-dom";
import { formattedPrice } from "../constants";

const CardComponent = (item) => {
  const card = item.props;

  return (
    <Link to={`/product/detail/${card._id}`}>
      <div className="w-56 card-product m-2 p-3">
        <img className="w-full" src={card.image} alt="" />
        <p className="text-center">{card.name}</p>
        <p className="text-center font-bold">{formattedPrice(card.price)}</p>
      </div>
    </Link>
  );
};

export default CardComponent;
