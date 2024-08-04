import React, { useState } from "react";
import { formattedPrice } from "../constants";
import axios from "axios";
import { deleteShoppingCartFromUser } from "../../services/ShoppingCartService";

const ConfirmInfo = (props) => {
  const [taxShip, setTaxShip] = useState(250000);
  const totalPrice = props.totalPrice;
  const itemShoppingCarts = props.shoppingCartItems;
  const userid = props.user;
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");

  const item = [];
  itemShoppingCarts.map((sp) => {
    item.push({
      name: sp.name,
      quantity: sp.quantity,
      price: sp.price,
      productid: sp.productid,
    });
  });

  const handlePayment = () => {
    if (city === "" || district === "" || city === "") {
      alert("Vui lòng nhập đầy đủ thông tin giao hàng");
    } else {
      const confirmDelete = window.confirm(
        "Are you sure you want to buy this items?"
      );
      if (confirmDelete) {
        const data = {
          orderItems: item,
          shippingAddress: {
            city: city,
            district: district,
            street: street,
          },
          paymentMethod: "VNPAY",
          taxPrice: taxShip,
          totalPrice: totalPrice + taxShip,
          userid: userid,
          isPaid: true,
          paidAt: Date.now(),
        };

        data.orderItems.forEach((item) => {
          axios
            .post(
              `${process.env.REACT_APP_BE}/product/updateQuantity/${item.productid}`,
              {
                quantity: item.quantity,
              }
            )
            .catch((err) => {
              console.log(err);
            });
        });

        deleteShoppingCartFromUser(userid);

        axios
          .post(`${process.env.REACT_APP_BE}/order/create`, data)
          .then((res) => {
            paymentVNPAY(res.data.data._id, totalPrice + taxShip);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };

  const handlePaymentMomo = () => {
    if (city === "" || district === "" || city === "") {
      alert("Vui lòng nhập đầy đủ thông tin giao hàng");
    } else {
      const confirmDelete = window.confirm(
        "Are you sure you want to buy this items?"
      );
      if (confirmDelete) {
        const data = {
          orderItems: item,
          shippingAddress: {
            city: city,
            district: district,
            street: street,
          },
          paymentMethod: "MoMo",
          taxPrice: taxShip,
          totalPrice: totalPrice + taxShip,
          userid: userid,
          isPaid: true,
          paidAt: Date.now(),
        };

        data.orderItems.forEach((item) => {
          axios
            .post(
              `${process.env.REACT_APP_BE}/product/updateQuantity/${item.productid}`,
              {
                quantity: item.quantity,
              }
            )
            .catch((err) => {
              console.log(err);
            });
        });

        deleteShoppingCartFromUser(userid);

        axios
          .post(`${process.env.REACT_APP_BE}/order/create`, data)
          .then((res) => {
            paymentMomo(res.data.data._id, totalPrice + taxShip);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };

  const paymentVNPAY = async (orderid, totalPrice) => {
    await axios
      .post(`${process.env.REACT_APP_BE}/payment/create_payment_url`, {
        orderId: orderid,
        amount: totalPrice,
      })
      .then((res) => {
        window.location.href = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const paymentMomo = async (orderid, totalPrice) => {
    await axios
      .post(`${process.env.REACT_APP_BE}/momo/payment`, {
        money: totalPrice,
      })
      .then((res) => {
        window.location.href = res.data.payUrl;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="grid grid-cols-3 p-3">
        <input
          className="col-span-1 p-2 m-2 border border-gray-600 rounded-md"
          type="text"
          placeholder="Nhập thành phố / tỉnh"
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          className="col-span-1 p-2 m-2 border border-gray-600 rounded-md"
          type="text"
          placeholder="Nhập huyện"
          onChange={(e) => setDistrict(e.target.value)}
        />
        <input
          className="col-span-1 p-2 m-2 border border-gray-600 rounded-md"
          type="text"
          placeholder="Nhập tên đường số nhà"
          onChange={(e) => setStreet(e.target.value)}
        />
      </div>
      <div className="p-3 grid-cols-2">
        <div>
          <span>Phí ship: </span>
          <span className="text-red-700 font-medium">
            {formattedPrice(taxShip)}
          </span>
        </div>
        <div className="mt-2">
          <span>Tổng tiền: </span>
          <span className="text-red-700 font-medium">
            {formattedPrice(totalPrice + taxShip)}
          </span>
        </div>
      </div>
      <div className="p-3">
        <button
          onClick={handlePayment}
          className="px-3 mr-2 py-3 pt-2 pb-2 border border-blue-700 text-blue-700 rounded-md hover:text-white hover:bg-blue-700 duration-300"
        >
          VNPAY
        </button>
        <button
          onClick={handlePaymentMomo}
          className="px-3 py-3 pt-2 pb-2 border border-red-700 text-red-700 rounded-md hover:text-white hover:bg-red-700 duration-300"
        >
          Momo
        </button>
      </div>
    </>
  );
};

export default ConfirmInfo;
