import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCategory, updateCategory } from "../../../services/CategoryService";

const EditCategoryAdmin = () => {
  const [name, setName] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCategory(id)
      .then((data) => {
        setName(data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleUpdateCategory = () => {
    if (name === "") {
      alert("Vui lòng nhập đầy đủ thông tin!");
    } else {
      updateCategory(id, name)
        .then(() => {
          alert("Sửa thành công!");
          navigate("/admin/category");
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
          <h1 className="mb-8 text-3xl text-center">Sửa thể loại</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập tên thể loại"
          />

          <button
            onClick={handleUpdateCategory}
            className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCategoryAdmin;
