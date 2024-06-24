import React, { useEffect, useState } from "react";
import { getUserToken } from "../../services/UserService";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditProfile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("ustoken");
    getUserToken(token)
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const isValidData = () => {
    if (name === "" || phone === "") return false;
    return true;
  };

  const handleUpdateProfile = () => {
    if (isValidData()) {
      const data = {
        name: name,
        phone: phone,
      };
      axios
        .put(`${process.env.REACT_APP_BE}/user/update/${user._id}`, data)
        .then(() => {
          alert("Update thành công");
          navigate("/user/profile");
        })
        .catch((err) => {
          console.log("Update thất bại: " + err);
        });
    } else {
      alert("Vui lòng nhập đầy đủ thông tin");
    }
  };

  return (
    <>
      <div className="p-3">
        <div className="p-5">
          <h6 className="font-semibold text-xl">Edit Profile</h6>
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
                  placeholder={user ? user.name : ""}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Số điện thoại
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder={user ? user.phone : ""}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <button
                  onClick={() => {
                    navigate("/user/profile/changepassword");
                  }}
                  className=" w-25 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight hover:bg-gray-500 hover:text-white duration-200"
                  id="grid-password"
                  type="password"
                >
                  {" "}
                  Đổi mật khẩu
                </button>
              </div>
            </div>
            <div className="text-center m-3">
              <button
                onClick={handleUpdateProfile}
                className="bg-blue-700 px-5 pr-5 pt-2 pb-2 rounded-lg text-white hover:opacity-70 duration-300"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
