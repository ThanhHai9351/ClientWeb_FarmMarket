import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUncharted } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { getAllProducts } from "../../services/ProductService";

const NumOfOrder = () => {
  const [orders, setOrder] = useState(null);
  const [products, setProduct] = useState(null);
  const nsxid = localStorage.getItem("nsxid");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BE}/order/getAll`)
      .then((res) => {
        setOrder(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    getAllProducts()
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const isOfNSX = (productid) => {
    let result = false;
    products.forEach((product) => {
      if (product.nsxid === nsxid) {
        result = true;
      }
    });
    return result;
  };

  const numOfOrder = () => {
    let count = 0;
    orders.forEach((order) => {
      order.orderItems.forEach((orderItem) => {
        if (isOfNSX(orderItem.productid)) {
          count++;
        }
      });
    });
    return count;
  };

  return (
    <div className="m-3 p-3 bg-orange-500 h-36 rounded-md grid grid-cols-3  shadow-lg shadow-gray-500">
      <div className="col-span-2">
        <h6 className="text-white p-2 text-3xl">Số lượng đơn hàng </h6>
        <p className="text-white p-2 text-2xl">{orders ? numOfOrder() : ""}</p>
      </div>
      <div className="col-span-1 text-center">
        <FontAwesomeIcon icon={faUncharted} className=" h-28" />
      </div>
    </div>
  );
};

export default NumOfOrder;
