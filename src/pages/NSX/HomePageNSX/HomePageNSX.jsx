import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getNSX } from "../../../services/NSXService";
import NumOfProduct from "../../../components/NumOfProduct/NumOfProduct";
import NumOfProductCleanOut from "../../../components/NumOfProductCleanOut/NumOfProductCleanOut";
import NumOfOrder from "../../../components/NumOfOrder/NumOfOrder";
import Revenue from "../../../components/Revenue/Revenue";

const HomePageNSX = () => {
  const [nsx, setNsx] = useState(null);

  useEffect(() => {
    const nsxid = localStorage.getItem("nsxid");
    getNSX(nsxid)
      .then((data) => {
        setNsx(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem("nsxid");
      navigate("/");
    }
  };

  return (
    <div className="grid grid-cols-5 p-3">
      <div className="col-span-1  border border-gray-600">
        <div className="p-2 text-center">
          <img
            src={
              nsx?.logo ||
              "https://p7.hiclipart.com/preview/980/304/8/computer-icons-user-profile-avatar.jpg"
            }
            className="rounded-full w-32 h-32 m-auto"
            alt=""
          />
          <h6 className="pt-2 text-xl font-semibold">{nsx ? nsx.name : ""}</h6>
        </div>
        <hr />
        <div>
          <Link
            to="/shop/edit"
            className="block border-b p-2 font-semibold hover:opacity-70 hover:mx-2 duration-300"
          >
            Sửa thông tin Shop
          </Link>
          <Link
            to="/shop/product"
            className="block border-b p-2 font-semibold hover:opacity-70 hover:mx-2 duration-300"
          >
            Xem tất cả sản phẩm
          </Link>
          <Link
            to="/shop/product/create"
            className="block border-b p-2 font-semibold hover:opacity-70 hover:mx-2 duration-300"
          >
            Thêm sản phẩm
          </Link>
          <Link
            to="/shop/order"
            className="block border-b p-2 font-semibold hover:opacity-70 hover:mx-2 duration-300"
          >
            Đơn hàng của bạn
          </Link>
          <button
            onClick={handleLogout}
            className="block border-b p-2 text-red-700 font-semibold hover:opacity-70 hover:mx-2 duration-300"
          >
            Đăng xuất Shop
          </button>
        </div>
      </div>
      <div className="col-span-4">
        <div className="grid grid-cols-2 p-3">
          <div className="col-span-1">
            <NumOfProduct />
          </div>
          <div className="col-span-1">
            <Revenue />
          </div>
          <div className="col-span-1">
            <NumOfProductCleanOut />
          </div>
          <div className="col-span-1">
            <NumOfOrder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageNSX;
