import React from "react";
import { formattedPrice } from "../../components/constants";

const ShoppingCartPage = () => {
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
        <div className="grid grid-cols-7 d-flex p-3 text-center">
          <div className="col-span-1">
            <img
              className="border border-gray-400"
              src="https://product.hstatic.net/200000189007/product/cha_lua_nha_que_-_250gr_1_707c6a6f6bac452ab73ba492ee64c06f_master.jpg"
            />
          </div>
          <div className="col-span-2">
            <h6 className="font-semibold text-xl">Chả Lụa - 250gr</h6>
          </div>
          <div className="col-span-1">
            <p className="text-red-700 font-semibold">
              {formattedPrice(60000)}
            </p>
          </div>
          <div className="col-span-1">
            <div>
              <button className="border border-gray-500 px-2 rounded-full bg-black text-white">
                -
              </button>
              <input
                type="text"
                className="w-10 text-center"
                value="1"
                readOnly
              />
              <button className="border border-gray-500 px-2 rounded-full  bg-black text-white">
                +
              </button>
            </div>
          </div>
          <div className="col-span-1">
            <p className="text-red-700 font-semibold">
              {formattedPrice(60000)}
            </p>
          </div>
          <div className="col-span-1">
            <buton className="px-10 pt-2 font-bold pb-2 pr-10 bg-white rounded-lg text-red-700 border border-red-700 hover:bg-red-700 hover:text-white cursor-pointer transition duration-300">
              X
            </buton>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-7 d-flex p-3 text-center">
          <div className="col-span-1">
            <img
              className="border border-gray-400"
              src="https://product.hstatic.net/200000189007/product/cha_lua_nha_que_-_250gr_1_707c6a6f6bac452ab73ba492ee64c06f_master.jpg"
            />
          </div>
          <div className="col-span-2">
            <h6 className="font-semibold text-xl">Chả Lụa - 250gr</h6>
          </div>
          <div className="col-span-1">
            <p className="text-red-700 font-semibold">
              {formattedPrice(60000)}
            </p>
          </div>
          <div className="col-span-1">
            <div>
              <button className="border border-gray-500 px-2 rounded-full bg-black text-white">
                -
              </button>
              <input
                type="text"
                className="w-10 text-center"
                value="1"
                readOnly
              />
              <button className="border border-gray-500 px-2 rounded-full  bg-black text-white">
                +
              </button>
            </div>
          </div>
          <div className="col-span-1">
            <p className="text-red-700 font-semibold">
              {formattedPrice(60000)}
            </p>
          </div>
          <div className="col-span-1">
            <buton className="px-10 pt-2 font-bold pb-2 pr-10 bg-white rounded-lg text-red-700 border border-red-700 hover:bg-red-700 hover:text-white cursor-pointer transition duration-300">
              X
            </buton>
          </div>
        </div>
      </div>
      <div className="p-3">
        <span className="mr-2">Total money:</span>
        <span className="text-red-700 font-semibold">
          {formattedPrice(60000)}
        </span>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
