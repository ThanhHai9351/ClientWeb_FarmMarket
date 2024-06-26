import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUncharted } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { getAllOrder } from "../../services/OrderService";

const NumOfOrder = () => {
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
    <div className="m-3 p-3 bg-orange-500 h-36 rounded-md grid grid-cols-3 shadow-lg shadow-gray-500">
      <div className="col-span-2">
        <h6 className="text-white p-2 text-3xl">Số lượng đơn hàng </h6>
        <p className="text-white p-2 text-2xl">
          {orders.length > 0 && products.length > 0 ? numOfOrder() : 0}
        </p>
      </div>
      <div className="col-span-1 text-center">
        <FontAwesomeIcon icon={faUncharted} className="h-28" />
      </div>
    </div>
  );
};

export default NumOfOrder;
