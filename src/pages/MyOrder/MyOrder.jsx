import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderComponent from "../../components/OrderComponent/OrderComponent";

const MyOrder = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("ustoken");

  useEffect(() => {
    document.title = "Đơn hàng của tôi";

    const getUser = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BE}/user/getUserToken/${token}`
        );
        setUser(res.data.data);
      } catch (err) {
        console.log("Error fetching user data", err);
      }
    };

    getUser();
  }, [token]);

  useEffect(() => {
    if (user !== null) {
      const getOrder = async () => {
        try {
          const res = await axios.get(
            `${process.env.REACT_APP_BE}/order/getOrderFromUser/${user._id}`
          );
          setOrders(res.data.data);
        } catch (err) {
          console.log("Error fetching orders", err);
        }
      };

      getOrder();
    }
  }, [user]);

  return (
    <div>
      <div className="p-3">
        <h6 className="text-2xl font-medium m-5">Sản phẩm đã đặt</h6>
        {orders === null
          ? "No orders found."
          : orders.map((order) => (
              <OrderComponent key={order._id} item={order} />
            ))}
      </div>
    </div>
  );
};

export default MyOrder;
