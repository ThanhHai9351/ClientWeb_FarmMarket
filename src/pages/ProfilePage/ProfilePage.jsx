import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("ustoken");
    navigate("/");
  };
  return (
    <div className="grid grid-cols-5 m-11 border border-r-slate-500">
      <div className="col-span-1">
        <div className="bg-slate-500">
          <div className="p-5">
            <img
              src="https://hothanhhai.000webhostapp.com/template/images/TH.jpg"
              width={60}
              height={60}
              className="inline-block rounded-full  border-gray-300 border-2"
            />
            <p className="inline-block mx-3 font-bold text-white">
              Hồ Thanh Hải
            </p>
          </div>
          <hr />
          <div className="p-1">
            <Link className="block text-white p-3 mx-5">
              Đổi thông tin cá nhân
            </Link>
            <Link className="block text-white p-3 mx-5">Shop của bạn</Link>
            <Link className="block text-white p-3 mx-5">
              Đổi thông tin cá nhân
            </Link>
            <button
              onClick={handleLogout}
              className="block text-red-700 p-3 mx-5 font-semibold hover:opacity-40"
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-4 p-2 ">
        <table className="bg-white w-full">
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
              Name
            </th>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300  border-b-2">
              Hồ Thanh Hải
            </td>
          </tr>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
              Name
            </th>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300  border-b-2">
              Hồ Thanh Hải
            </td>
          </tr>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
              Name
            </th>
            <td className="px-6 py-4 whitespace-no-wrap  border-gray-300  border-b-2">
              Hồ Thanh Hải
            </td>
          </tr>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
              Name
            </th>
            <td className="px-6 py-4 whitespace-no-wrap border-gray-300  border-b-2">
              Hồ Thanh Hải
            </td>
          </tr>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
              Email
            </th>
            <td className="px-6 py-4 whitespace-no-wrap  border-gray-300  border-b-2 ">
              Hồ Thanh Hải
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ProfilePage;
