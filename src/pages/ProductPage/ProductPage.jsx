import React from "react";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get("type");
  const search = searchParams.get("search");

  useEffect(() => {
    document.title = "Sản phẩm";
    const fetchCategory = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BE}/category/getAll`
        );
        setCategories(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BE}/product/getAll`
        );
        setProducts(res.data.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchCategory();
    fetchProducts();
  }, []);

  useEffect(() => {
    if (type && categories.length > 0) {
      const matchedCategory = categories.find(
        (category) => category._id === type
      );
      setCategory(matchedCategory);
    } else {
      setCategory(null);
    }
  }, [type, categories]);

  useEffect(() => {
    if (search) {
      setSearchTerm(search);
    } else {
      setSearchTerm("");
    }
  }, [search]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = type ? product.categoryid === type : true;
    const matchesSearch = searchTerm
      ? product.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1 mx-28 mt-11">
        {categories.length > 0 &&
          categories.map((category) => (
            <Link
              key={category._id}
              to={`/product?type=${category._id}`}
              className="p-2 text-base block text-slate-800 border-b hover:opacity-70"
            >
              {category.name}
            </Link>
          ))}
      </div>
      <div className="col-span-3 m-2">
        <div>
          <h6 className="font-medium text-2xl m-5 mx-4 mb-8">
            {category ? <p>{category.name}</p> : <p>Tất cả sản phẩm</p>}
          </h6>
        </div>
        <div className="grid grid-cols-5">
          {filteredProducts.map((product) => (
            <CardComponent key={product._id} props={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
