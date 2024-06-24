import axios from "axios";

const getAllCategories = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BE}/category/getAll`);
    return res.data.data;
  } catch (err) {
    console.error("Error fetching category data", err);
    return null;
  }
};

export { getAllCategories };
