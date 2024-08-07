import React, { useEffect, useState } from "react";
import { formattedPrice } from "../../components/constants";
import CardShoppingCartComponent from "../../components/CardShoppingCartComponent/CardShoppingCartComponent";
import ConfirmInfo from "../../components/ConfirmInfo/ConfirmInfo";
import { getUserToken } from "../../services/UserService";
import { getAllShoppingCartFromUser } from "../../services/ShoppingCartService";

const ShoppingCartPage = () => {
  const [itemShoppingCarts, setItemShoppingCarts] = useState([]);
  const [isShowConfirmInfo, setIsShowConfirmInfo] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.title = "Giỏ hàng";
    const token = localStorage.getItem("ustoken");

    const getUser = () => {
      getUserToken(token)
        .then((res) => {
          setUser(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getShoppingCarts = (userId) => {
      getAllShoppingCartFromUser(userId)
        .then((res) => {
          setItemShoppingCarts(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const fetchData = async () => {
      await getUser();
    };

    fetchData().then(() => {
      if (user && user._id) {
        getShoppingCarts(user._id);
      }
    });
  }, [user]);

  return (
    <div className="p-3">
      <h5 className="text-2xl font-medium m-5">Shopping Cart</h5>
      <div className="border border-gray-500">
        <div className="grid grid-cols-7 d-flex p-3 text-center">
          <div className="col-span-1">#</div>
          <div className="col-span-2">Name</div>
          <div className="col-span-1">Price</div>
          <div className="col-span-1">Quantity</div>
          <div className="col-span-1">Total</div>
          <div className="col-span-1">Function</div>
        </div>
        <hr />
        {itemShoppingCarts.map((item) => (
          <CardShoppingCartComponent
            key={item._id}
            item={item}
            user={user._id}
          />
        ))}
      </div>
      <div className="p-3 grid grid-cols-4">
        <div className="col-span-2">
          <span className="mr-2">Total money:</span>
          <span className="text-red-700 font-semibold total-money">
            {formattedPrice(
              itemShoppingCarts.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )
            )}
          </span>
        </div>
        <div className="col-span-2">
          <span>Hình thức thanh toán: </span>
          <span
            onClick={() => setIsShowConfirmInfo(!isShowConfirmInfo)}
            className="border border-blue-700 px-3 pr-3 pt-2 pb-2 text-white bg-blue-700 rounded-md mx-2 font-medium hover:opacity-70 duration-300 cursor-pointer"
          >
            Chọn hình thức thanh toán
          </span>
        </div>
      </div>
      {isShowConfirmInfo ? (
        <ConfirmInfo
          user={user._id}
          shoppingCartItems={itemShoppingCarts}
          totalPrice={itemShoppingCarts.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          )}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ShoppingCartPage;
