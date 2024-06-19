import React, { useEffect, useState } from "react";
import OrderComponent from "../../components/OrderComponent/OrderComponent";
import { getUserToken } from "../../services/UserService";
import { getOrderFromUser } from "../../services/OrderService";

const MyOrder = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("ustoken");

  useEffect(() => {
    document.title = "Đơn hàng của tôi";

    const getUser = () => {
      getUserToken(token)
        .then((res) => {
          setUser(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getUser();
  }, [token]);

  useEffect(() => {
    if (user !== null) {
      const getOrder = () => {
        getOrderFromUser(user._id)
          .then((res) => {
            setOrders(res);
          })
          .catch((err) => {
            console.log(err);
          });
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
