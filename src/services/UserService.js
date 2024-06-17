import axios from "axios";

const getUserToken = async (token) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BE}/user/getUserToken/${token}`
    );
    return res.data.data;
  } catch (err) {
    console.error("Error fetching user data", err);
    return null;
  }
};

const getAllUsers = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BE}/user/getAll`);
    return res.data.data;
  } catch (err) {
    console.error("Error fetching user data", err);
    return null;
  }
};

export { getAllUsers, getUserToken };
