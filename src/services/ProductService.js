import axios from "axios";

const getAllProducts = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BE}/product/getAll`);
    return res.data.data;
  } catch (err) {
    console.error("Error fetching user data", err);
    return null;
  }
};

export { getAllProducts };
