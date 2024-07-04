import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendMail } from "../../../services/MailerService";

const CreateUserAdmin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const isValidData = () => {
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      password === "" ||
      role === ""
    )
      return false;
    return true;
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleCreateAccount = () => {
    if (!isValidData()) {
      alert("Bạn cần nhập đủ trường!");
    } else if (!isValidEmail(email)) {
      alert("Email không hơp lệ");
    } else {
      const data = {
        name: name,
        phone: phone,
        email: email,
        password: password,
        confirmPassword: password,
        role: role,
      };
      axios
        .post(`${process.env.REACT_APP_BE}/user/register`, data)
        .then(() => {
          alert("Tạo tài khoản thành công!");
          sendMail(
            "haihailua123456@gmail.com",
            "Tạo người dùng",
            "1 tài khoản đã được tạo!"
          );
          navigate("/admin/user");
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
          <h6 className="font-semibold text-xl">Tạo tài khoản</h6>
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
                  className="appearance-none block w-full bg-slate-300 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
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
                  className="appearance-none block w-full bg-slate-300 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mt-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-slate-300 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mt-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Chọn vai trò
                </label>
                <select
                  onChange={(e) => setRole(e.target.value)}
                  className="appearance-none block w-full bg-slate-300 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option value="">Vai trò</option>
                  <option value="admin">Quản trị viên</option>
                  <option value="user">Người dùng</option>
                </select>
              </div>
              <div className="w-full md:w-1/2 px-3 mt-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Mật khẩu
                </label>
                <input
                  className="appearance-none block w-full bg-slate-300 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="text-center m-3">
              <button
                onClick={handleCreateAccount}
                className="bg-blue-700 px-5 pr-5 pt-2 pb-2 rounded-lg text-white hover:opacity-70 duration-300"
              >
                Tạo tài khoản
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUserAdmin;
