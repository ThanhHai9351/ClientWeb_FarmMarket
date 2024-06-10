import React from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";

const CardComponent = (item) => {
  const card = item.props;
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(card.price);
  return (
    <Link to={`/product/detail/${card._id}`}>
      <div className="w-56 card-product m-2 p-3">
        <img className="w-full" src={card.image} alt="" />
        <p className="text-center">{card.name}</p>
        <p className="text-center font-bold">{formattedPrice}</p>
      </div>
    </Link>
  );
};

export default CardComponent;
