import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { images } from "../../../components/constants";
import NumOfUserCard from "../../../components/NumOfUserCard/NumOfUserCard";
import RevenueAdmin from "../../../components/RevenueAdmin/RevenueAdmin";
import NumOfOrderAdmin from "../../../components/NumOfOrderAdmin/NumOfOrderAdmin";
import NumOfCategoryAdmin from "../../../components/NumOfCategoryAdmin/NumOfCategoryAdmin";

const HomePageAdmin = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem("rl");
      navigate("/");
    }
  };

  return (
    <div className="grid grid-cols-5 p-3">
      <div className="col-span-1  border border-gray-600">
        <div className="p-2 text-center">
          <img
            src={images.logo}
            className="rounded-md w-50 h-32 m-auto"
            alt=""
          />
          <h6 className="pt-2 text-xl font-semibold">Admin</h6>
        </div>
        <hr />
        <div>
          <Link
            to="/admin/product"
            className="block border-b p-2 font-semibold hover:opacity-70 hover:mx-2 duration-300"
          >
            Quản lý sản phẩm
          </Link>
          <Link
            to="/admin/category"
            className="block border-b p-2 font-semibold hover:opacity-70 hover:mx-2 duration-300"
          >
            Quản lý thể loại
          </Link>
          <Link
            to="/admin/order"
            className="block border-b p-2 font-semibold hover:opacity-70 hover:mx-2 duration-300"
          >
            Quản lý đơn hàng
          </Link>
          <Link
            to="/admin/user"
            className="block border-b p-2 font-semibold hover:opacity-70 hover:mx-2 duration-300"
          >
            Quản lý người dùng
          </Link>
          <button
            onClick={handleLogout}
            className="block border-b p-2 text-red-700 font-semibold hover:opacity-70 hover:mx-2 duration-300"
          >
            Đăng xuất
          </button>
        </div>
      </div>
      <div className="col-span-4">
        <div className="grid grid-cols-2 p-3">
          <div className="col-span-1">
            <NumOfUserCard />
          </div>
          <div className="col-span-1">
            <RevenueAdmin />
          </div>
          <div className="col-span-1">
            <NumOfOrderAdmin />
          </div>
          <div className="col-span-1">
            <NumOfCategoryAdmin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageAdmin;
