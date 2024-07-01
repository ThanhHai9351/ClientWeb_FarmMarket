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

const createCategory = async (name) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BE}/category/create`,
      {
        name: name,
      }
    );
    return res.data.data;
  } catch (err) {
    console.error("Error fetching category data", err);
    return null;
  }
};

const getCategory = async (id) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BE}/category/detail/${id}`
    );
    return res.data.data;
  } catch (err) {
    console.error("Error fetching category data", err);
    return null;
  }
};

const updateCategory = async (id, name) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BE}/category/update/${id}`,
      { name: name }
    );
    return res.data.data;
  } catch (err) {
    console.error("Error fetching category data", err);
    return null;
  }
};

export { getAllCategories, createCategory, getCategory, updateCategory };
