import React, { useState } from "react";

const RegisterShop = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleRegisterShop = () => {
    alert(name, address, password, confirmPassword);
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Đăng Ký Nhà Phát Triển</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Tên cửa hàng"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Địa chỉ cửa hàng"
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Mật khẩu cấp 2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Xác nhận mật khẩu cấp 2"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            onClick={handleRegisterShop}
            type="submit"
            className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Tạo cửa hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterShop;
