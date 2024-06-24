import React, { useEffect, useState } from "react";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAllOrder } from "../../services/OrderService";
import { formattedPrice } from "../constants";
import axios from "axios";

const Revenue = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const nsxid = localStorage.getItem("nsxid");

  useEffect(() => {
    getAllOrder()
      .then((res) => {
        setOrders(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (orders.length > 0) {
      axios
        .get(`${process.env.REACT_APP_BE}/product/getAll?nsxid=${nsxid}`)
        .then((res) => {
          setProducts(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [orders]);

  const isOfNSX = (productid) => {
    return products.some((product) => product._id === productid);
  };

  const revenue = () => {
    let sum = 0;
    orders.forEach((order) => {
      order.orderItems.forEach((orderItem) => {
        if (isOfNSX(orderItem.productid)) {
          sum += orderItem.quantity * orderItem.price;
        }
      });
    });
    return sum;
  };
  return (
    <div className="m-3 p-3 bg-yellow-500 h-36 rounded-md grid grid-cols-3  shadow-lg shadow-gray-500">
      <div className="col-span-2">
        <h6 className="text-white p-2 text-3xl">Doanh thu bán được</h6>
        <p className="text-white p-2 text-2xl">
          {orders.length > 0 && products.length > 0
            ? formattedPrice(revenue())
            : 0}
        </p>
      </div>
      <div className="col-span-1 text-center">
        <FontAwesomeIcon icon={faBitcoin} className=" h-28" />
      </div>
    </div>
  );
};

export default Revenue;
