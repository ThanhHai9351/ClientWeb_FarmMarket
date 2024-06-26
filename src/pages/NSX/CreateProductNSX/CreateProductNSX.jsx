import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../../services/CategoryService";
import axios from "axios";

const CreateProductNSX = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState("");
  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const nsxid = localStorage.getItem("nsxid");

  useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const isValidData = () => {
    if (
      name === "" ||
      price === 0 ||
      description === "" ||
      quantity === 0 ||
      image === "" ||
      category === null
    ) {
      return false;
    }
    return true;
  };

  const handleCreateProduct = () => {
    if (!isValidData()) {
      alert("Vui lòng nhập đầy đủ thông tin");
    } else {
      const data = {
        name: name,
        price: price,
        description: description,
        image: image,
        quantity: quantity,
        nearType: category.name,
        categoryid: category._id,
        nsxid: nsxid,
      };
      axios
        .post(`${process.env.REACT_APP_BE}/product/create`, data)
        .then(() => {
          console.log("Create product successfully");
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
          <h6 className="font-semibold text-xl">Thêm sản phẩm</h6>
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
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Giá (vnđ)
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="number"
                  min="1000"
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>

              <div className="w-full md:w-1/2 px-3 mt-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Mô tả
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mt-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Hình ảnh
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mt-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Số lượng
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="number"
                  min="1"
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mt-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Thể loại
                </label>
                <select
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  onChange={(e) =>
                    setCategory(
                      categories.find((cat) => cat._id === e.target.value)
                    )
                  }
                >
                  <option value="">Chọn thể loại</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-center m-3">
              <button
                onClick={handleCreateProduct}
                className="bg-white px-5 pr-5 pt-3 pb-3 rounded-lg text-blue-700 font-medium border border-blue-700 hover:bg-blue-700 hover:text-white duration-300"
              >
                Tạo sản phẩm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProductNSX;
