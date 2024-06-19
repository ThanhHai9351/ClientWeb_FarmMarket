import React from "react";

const ComfirmShopping = () => {
  const handleLoginMyShop = () => {
    alert("Xác nhận thành công");
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
          <h1 className="mb-8 text-3xl text-center">MÃ XÁC NHẬN SHOP</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Nhập key ..."
          />

          <button
            onClick={handleLoginMyShop}
            type="submit"
            className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Xác thực
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComfirmShopping;
