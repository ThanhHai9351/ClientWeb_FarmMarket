import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { getNSX } from "../../../services/NSXService";
import NumOfProduct from "../../../components/NumOfProduct/NumOfProduct";
import NumOfProductCleanOut from "../../../components/NumOfProductCleanOut/NumOfProductCleanOut";
import NumOfOrder from "../../../components/NumOfOrder/NumOfOrder";

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
          <Link className="block border-b p-2 font-semibold hover:opacity-70 hover:mx-2 duration-300">
            Sửa thông tin Shop
          </Link>
          <Link className="block border-b p-2 font-semibold hover:opacity-70 hover:mx-2 duration-300">
            Xem tất cả sản phẩm
          </Link>
          <Link className="block border-b p-2 font-semibold hover:opacity-70 hover:mx-2 duration-300">
            Thêm sản phẩm
          </Link>
          <Link className="block border-b p-2 font-semibold hover:opacity-70 hover:mx-2 duration-300">
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
            <div className="m-3 p-3 bg-yellow-500 h-36 rounded-md grid grid-cols-3  shadow-lg shadow-gray-500">
              <div className="col-span-2">
                <h6 className="text-white p-2 text-3xl">Doanh thu bán được</h6>
                <p className="text-white p-2 text-2xl">90</p>
              </div>
              <div className="col-span-1 text-center">
                <FontAwesomeIcon icon={faBitcoin} className=" h-28" />
              </div>
            </div>
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
