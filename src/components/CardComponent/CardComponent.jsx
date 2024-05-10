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
    <Link to={`/product/detail/${card.id}`}>
      <div className="w-56 card-product m-2 p-3">
        <img
          className="w-full"
          src="https://product.hstatic.net/200000189007/product/xoai_cat_hoa_loc_-_1_kg_a8030c3d93294ffabf301f4059409710_master.jpg"
          alt=""
        />
        <p className="text-center">{card.name}</p>
        <p className="text-center font-bold">{formattedPrice}</p>
      </div>
    </Link>
  );
};

export default CardComponent;
