import React, { useEffect, useState } from "react";
import { getNSX } from "../../../services/NSXService";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChangeKeyShop = () => {
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const [confirmPasswordNew, setConfirmPasswordNew] = useState("");
  const [nsx, setNsx] = useState(null);
  const navigate = useNavigate();

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

  const isvalidData = () => {
    if (passwordOld === "" || passwordNew === "" || confirmPasswordNew === "") {
      return false;
    }
    return true;
  };

  const isvalidPassword = (pass) => {
    if (pass === nsx.secretKey) return true;
    return false;
  };

  const handleChangePassword = () => {
    if (!isvalidData()) {
      alert("Vui lòng nhập đầy đủ thông tin");
    } else if (!isvalidPassword(passwordOld)) {
      alert("Mật khẩu cũ không chính xác");
    } else {
      axios
        .put(`${process.env.REACT_APP_BE}/nsx/update/${nsx._id}`, {
          secretKey: passwordNew,
        })
        .then(() => {
          alert("Đổi mật khẩu thành công");
          navigate("/shop");
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
          <h1 className="mb-8 text-3xl text-center">ĐỔI MẬT KHẨU CỬA HÀNG</h1>
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

export default ChangeKeyShop;
