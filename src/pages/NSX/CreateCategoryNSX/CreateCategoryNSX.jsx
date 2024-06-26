import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateCategoryNSX = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleCreateCategory = () => {
    if (name === "") {
      alert("Vui lòng nhập đầy đủ thông tin");
    } else {
      axios
        .post(`${process.env.REACT_APP_BE}/category/create`, { name: name })
        .then(() => {
          alert("Tạo thể loại thành công");
          navigate("/shop/product/create");
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
          <h1 className="mb-8 text-3xl text-center">TẠO THỂ LOẠI MỚI</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Nhập tên thể loại cần thêm ..."
            onChange={(e) => setName(e.target.value)}
          />
          <button
            onClick={handleCreateCategory}
            type="submit"
            className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Tạo thể loại
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCategoryNSX;
