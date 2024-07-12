import axios from "axios";
import React, { useEffect, useState } from "react";
import { formattedPrice } from "../constants";

const ItemCartDetail = (props) => {
  const [product, setProduct] = useState(null);
  const productid = props.product;
  const order = props.item;

  useEffect(() => {
    const getProduct = () => {
      axios
        .get(`${process.env.REACT_APP_BE}/product/detail/${productid}`)
        .then((res) => {
          setProduct(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getProduct();
  }, []);

  return (
    <>
      {product === null ? (
        ""
      ) : (
        <>
          <div className="grid grid-cols-5 text-center m-1">
            <div className="col-span-1">
              <img
                src={`${process.env.REACT_APP_BE}/image/${product.image}`}
                className="m-auto"
                width={150}
                height={150}
              />
            </div>
            <div className="col-span-1 font-semibold">{product.name}</div>
            <div className="col-span-1 text-xl">{order.quantity}</div>
            <div className="col-span-1 font-semibold text-red-700">
              {formattedPrice(product.price)}
            </div>
            <div className="col-span-1 font-semibold text-red-700">
              {formattedPrice(order.quantity * product.price)}
            </div>
          </div>
          <hr />
        </>
      )}
    </>
  );
};

export default ItemCartDetail;
