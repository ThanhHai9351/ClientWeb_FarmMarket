import axios from "axios";
import React, { useEffect, useState } from "react";

const ItemCartDetail = (props) => {
  const [product, setProduct] = useState(null);
  const productid = props.product;
  const order = props.item;

  useEffect(() => {
    const getProduct = () => {
      axios
        .get(`${process.env.REACT_APP_BE}/product/detail/${productid}`)
        .then((res) => {
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getProduct();
  }, []);

  return <div>sdsd</div>;
};

export default ItemCartDetail;
