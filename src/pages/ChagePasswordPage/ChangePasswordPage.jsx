import React, { useEffect, useState } from "react";
import { getUserToken } from "../../services/UserService";
import bcrypt from "bcryptjs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChangePasswordPage = () => {
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const [confirmPasswordNew, setConfirmPasswordNew] = useState("");
  const [user, setUser] = useState(null);
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

  const isvalidPassword = (pass) => {
    if (bcrypt.compareSync(pass, user.password)) return true;
    return false;
  };

  const isvalidData = () => {
    if (passwordOld === "" || passwordNew === "" || confirmPasswordNew === "") {
      return false;
    }
    return true;
  };

  const handleChangePassword = () => {
    if (!isvalidData()) {
      alert("Vui lòng nhập đầy đủ thông tin");
    } else if (!isvalidPassword(passwordOld)) {
      alert("Mật khẩu cũ không chính xác");
    } else {
      const newPass = bcrypt.hashSync(passwordNew, 10);
      axios
        .put(`${process.env.REACT_APP_BE}/user/update/${user._id}`, {
          password: newPass,
        })
        .then(() => {
          alert("Đổi mật khẩu thành công");
          navigate("/user/profile");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
          <h1 className="mb-8 text-3xl text-center">ĐỔI MẬT KHẨU</h1>
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Nhập mật khẩu cũ"
            onChange={(e) => setPasswordOld(e.target.value)}
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Nhập mật khẩu mới"
            onChange={(e) => setPasswordNew(e.target.value)}
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Nhập lại mật khẩu mới lần 2"
            onChange={(e) => setConfirmPasswordNew(e.target.value)}
          />

          <button
            onClick={handleChangePassword}
            className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Đổi mật khẩu
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
