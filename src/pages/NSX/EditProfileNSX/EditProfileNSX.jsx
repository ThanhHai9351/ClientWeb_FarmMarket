import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getNSX } from "../../../services/NSXService";

const EditProfileNSX = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [logo, setLogo] = useState("");
  const [nsx, setNsx] = useState(null);
  const nsxid = localStorage.getItem("nsxid");

  const navigate = useNavigate();

  useEffect(() => {
    getNSX(nsxid)
      .then((data) => {
        setNsx(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleUpdateProfile = () => {
    if (name === "" || address === "") {
      alert("Vui lòng nhập đầy đủ thông tin");
    } else {
      axios
        .put(`${process.env.REACT_APP_BE}/nsx/update/${nsx._id}`, {
          name: name,
          address: address,
          logo: logo,
        })
        .then(() => {
          alert("Đổi thông tin thành công");
          navigate("/shop");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div className="p-3">
        <div className="p-5">
          <h6 className="font-semibold text-xl">
            Chỉnh sửa thông tin cửa hàng
          </h6>
        </div>
        <div>
          <div className="w-full border border-gray-400 p-3 rounded-md">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Tên
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder={nsx ? nsx.name : ""}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Đia chỉ
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder={nsx ? nsx.address : ""}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mt-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Logo cửa hàng
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  onChange={(e) => setLogo(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Mật khẩu xác nhận
                </label>
                <button
                  onClick={() => {
                    navigate("/shop/edit/changepassword");
                  }}
                  className=" w-25 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight hover:bg-gray-500 hover:text-white duration-200"
                  id="grid-password"
                  type="password"
                >
                  {" "}
                  Đổi mật khẩu xác nhận
                </button>
              </div>
            </div>
            <div className="text-center m-3">
              <button
                onClick={handleUpdateProfile}
                className="bg-blue-700 px-5 pr-5 pt-2 pb-2 rounded-lg text-white hover:opacity-70 duration-300"
              >
                Đổi thông tin
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfileNSX;
