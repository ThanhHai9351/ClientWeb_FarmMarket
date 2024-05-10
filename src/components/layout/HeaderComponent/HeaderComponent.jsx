import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import MenuComponent from "../MenuComponent/MenuComponent";

const HeaderComponent = () => {
  return (
    <>
      <div className="bg-slate-800 text-center p-2">
        <p className="text-slate-300 inline-block">
          Email: thanhhaihuit2k3@gmail.com
        </p>
        <p className="mx-20 text-slate-300 inline-block">hotline: 0384631254</p>
      </div>
      <div className="bg-slate-200 grid grid-cols-3 p-3">
        <div className="inline-block">
          <Link to="/">
            <img
              className="w-30 h-20 rounded-xl inline-block"
              src={logo}
              alt="logo"
            />
            <h6 className="inline-block p-3 font-semibold from-neutral-600 text-xl">
              THariCompany
            </h6>
          </Link>
        </div>
        <div>
          <div className="w-96 rounded-lg p-2 bg-white mt-5">
            <input
              className="w-80 p-1"
              type="text"
              placeholder="Tìm kiếm sản phẩm"
            />
            <button className="mx-4 rounded-lg hover:scale-50 transition-all duration-500 ">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
        <div>
          <div className="flex justify-end mt-5 mr-7">
            <Link to="/login">
              <button className="rounded-lg p-3 icon-header">
                <FontAwesomeIcon icon={faUser} className="icon" />
                <span className="mx-2">Đăng nhập</span>
              </button>
            </Link>
            <Link to="/shoppingcart">
              <button className="mx-5  p-3 icon-header rounded-lg">
                <FontAwesomeIcon icon={faCartShopping} className="icon" />
                <span className="mx-2">Giỏ hàng</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <MenuComponent />
    </>
  );
};

export default HeaderComponent;
