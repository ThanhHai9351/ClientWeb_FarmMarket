import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAllCategories } from "../../../services/CategoryService";
import { getDetailProduct } from "../../../services/ProductService";
import axios from "axios";

const EditProductNSX = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState("");
  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const nsxid = localStorage.getItem("nsxid");
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [product]);

  useEffect(() => {
    getDetailProduct(id)
      .then((data) => {
        setProduct(data);
        setName(data.name);
        setPrice(data.price);
        setQuantity(data.quantity);
        setDescription(data.description);
        setImage(data.image);
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
      image === ""
    ) {
      return false;
    }
    return true;
  };

  const handleCreateProduct = () => {
    if (!isValidData()) {
      alert("Vui lòng nhập đầy đủ thông tin");
    } else {
      let data = null;
      if (category === null) {
        data = {
          name: name,
          price: price,
          description: description,
          image: image,
          quantity: quantity,
          nsxid: nsxid,
        };
      } else {
        data = {
          name: name,
          price: price,
          description: description,
          image: image,
          quantity: quantity,
          nearType: category.name,
          categoryid: category._id,
          nsxid: nsxid,
        };
      }

      axios
        .post(`${process.env.REACT_APP_BE}/product/update/${id}`, data)
        .then(() => {
          alert("Sửa sản phẩm thành công");
          navigate("/shop/product");
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
          <h6 className="font-semibold text-xl">Sửa sản phẩm</h6>
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
                  value={name}
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
                  value={price}
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
                  value={description}
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
                  value={image}
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
                  value={quantity}
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
                <div className="pt-3 px-3">
                  <span className="mr-3">Không có thể loại cần chọn?</span>
                  <Link
                    to="/shop/category/create"
                    className="text-blue-700  hover:underline duration-200"
                  >
                    Thêm thể loại.
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center m-3">
              <button
                onClick={handleCreateProduct}
                className="bg-white px-5 pr-5 pt-3 pb-3 rounded-lg text-yellow-700 font-medium border border-yellow-700 hover:bg-yellow-700 hover:text-white duration-300"
              >
                Sửa sản phẩm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProductNSX;
