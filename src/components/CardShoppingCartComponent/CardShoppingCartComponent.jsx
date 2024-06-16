import React, { useEffect, useState } from "react";
import { formattedPrice } from "../constants";
import axios from "axios";

const CardShoppingCartComponent = (props) => {
  const item = props.item;
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BE}/product/detail/${item.productid}`
        );
        setProduct(res.data.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    getProduct();
  }, [product]);

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      axios.post(
        `${process.env.REACT_APP_BE}/shoppingcart/update/${item._id}`,
        {
          quantity: item.quantity - 1,
          total: (item.quantity - 1) * item.price,
        }
      );
    }
  };

  const handleIncreaseQuantity = () => {
    axios
      .post(`${process.env.REACT_APP_BE}/shoppingcart/update/${item._id}`, {
        quantity: item.quantity + 1,
        total: (item.quantity + 1) * item.price,
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      axios
        .delete(`${process.env.REACT_APP_BE}/shoppingcart/delete/${item._id}`)
        .then(() => {
          alert("Item deleted successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <div key={item._id} className="grid grid-cols-7 d-flex p-3 text-center">
        <div className="col-span-1">
          <img
            className="border border-gray-400 m-auto"
            src={product ? product.image : ""}
            alt={item.name}
            width={120}
            height={120}
          />
        </div>
        <div className="col-span-2">
          <h6 className="font-semibold text-xl">{item.name}</h6>
        </div>
        <div className="col-span-1">
          <p className="text-red-700 font-semibold">
            {formattedPrice(item.price)}
          </p>
        </div>
        <div className="col-span-1">
          <div>
            <button
              onClick={handleDecreaseQuantity}
              className="border border-gray-500 px-2 rounded-full bg-black text-white"
            >
              -
            </button>
            <input
              type="text"
              className="w-10 text-center"
              value={item.quantity}
              readOnly
            />
            <button
              onClick={handleIncreaseQuantity}
              className="border border-gray-500 px-2 rounded-full  bg-black text-white"
            >
              +
            </button>
          </div>
        </div>
        <div className="col-span-1">
          <p className="text-red-700 font-semibold">
            {formattedPrice(item.total)}
          </p>
        </div>
        <div className="col-span-1">
          <button
            onClick={handleDelete}
            className=" px-10 pt-2 font-bold pb-2 pr-10 bg-white rounded-lg text-red-700 border border-red-700 hover:bg-red-700 hover:text-white cursor-pointer transition duration-300"
          >
            X
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CardShoppingCartComponent;
