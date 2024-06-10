import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import MenuComponent from "../MenuComponent/MenuComponent";
import axios from "axios";

const HeaderComponent = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    var token = localStorage.getItem("ustoken");
    if (token != null) {
      axios
        .get(`${process.env.REACT_APP_BE}/user/getUserToken/${token}`)
        .then((res) => {
          setUser(res.data.data);
        })
        .catch((err) => {});
    }
  }, []);

  return (
    <>
      <div className="bg-slate-800 text-center p-2">
        <p className="text-slate-300 inline-block">
          Email: thanhhaihuit2k3@gmail.com
        </p>
        <p className="mx-20 text-slate-300 inline-block">hotline: 0384631254</p>
      </div>
      <div className="bg-slate-200 grid grid-cols-3 p-3">
        <div className="inline-block ">
          <Link to="/">
            <div className="inline-block">
              <img
                className="w-30 h-20 rounded-xl inline-block"
                src={logo}
                alt="logo"
              />
            </div>
            <h6 className="inline-block p-3 font-semibold from-neutral-600 text-xl">
              THariCompany
            </h6>
          </Link>
        </div>
        <div className="">
          <div className="w-96 rounded-lg p-2 bg-white mt-5">
            <input
              className="w-80 p-1"
              type="text"
              placeholder="Tìm kiếm sản phẩm"
            />
            <button className="mx-4 rounded-lg hover:scale-50 transition-all duration-500">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
        <div className="">
          <div className="flex justify-end mt-5 mr-7">
            {user !== null ? (
              <Link to="/user/profile">
                <button className=" hover:opacity-70 p-3 pr-4 px-4 rounded-3xl icon-header bg-slate-400">
                  <FontAwesomeIcon icon={faUser} className="icon text-lg" />
                  <span className="mx-2">{user.name}</span>
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className=" hover:opacity-70 p-3 pr-4 px-4 rounded-3xl icon-header bg-slate-400">
                  <FontAwesomeIcon icon={faUser} className="icon text-lg" />
                </button>
              </Link>
            )}

            <Link to="/shoppingcart">
              <button className="hover:opacity-70 mx-5 p-3 pr-4 px-4 icon-header rounded-3xl">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="icon text-lg"
                />
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
