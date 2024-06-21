import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserToken } from "../../services/UserService";
import { getNSXFromUser } from "../../services/NSXService";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [nsx, setNSX] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Thông tin cá nhân";

    const token = localStorage.getItem("ustoken");
    getUserToken(token)
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        console.log(err);
      });

    const getNSX = () => {
      getNSXFromUser(user._id)
        .then((res) => {
          setNSX(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    if (user != null) {
      getNSX();
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("ustoken");
    localStorage.removeItem("nsxid");
    navigate("/");
  };

  const handleLoginMyShop = () => {
    if (nsx) {
      navigate("/user/comfirmshop");
    } else {
      navigate("/user/registershop");
    }
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
              alt=""
            />
            <p className="inline-block mx-3 font-bold text-white">
              {user && user.name}
            </p>
          </div>
          <hr />
          <div className="p-1">
            <Link
              to={user && `/user/profile/edit/${user._id}`}
              className="block text-white p-3 mx-5 hover:opacity-70"
            >
              Đổi thông tin cá nhân
            </Link>
            <button
              onClick={handleLoginMyShop}
              className="block text-white p-3 mx-5 hover:opacity-70"
            >
              Shop của bạn
            </button>
            <Link
              to="/user/myorder"
              className="block text-white p-3 mx-5 hover:opacity-70"
            >
              Sản phẩm đã mua
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
              Tên
            </th>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300  border-b-2">
              {user && user.name}
            </td>
          </tr>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
              Email
            </th>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300  border-b-2">
              {user && user.email}
            </td>
          </tr>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
              Số điện thoại
            </th>
            <td className="px-6 py-4 whitespace-no-wrap  border-gray-300  border-b-2">
              {user && user.phone}
            </td>
          </tr>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
              mật khẩu
            </th>
            <td className="px-6 py-4 whitespace-no-wrap border-gray-300  border-b-2">
              ******
            </td>
          </tr>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
              Hình thức
            </th>
            <td className="px-6 py-4 whitespace-no-wrap  border-gray-300  border-b-2 ">
              Khách hàng tiềm năng
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ProfilePage;
