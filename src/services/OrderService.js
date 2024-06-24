import axios from "axios";

const getOrderFromUser = async (userid) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BE}/order/getOrderFromUser/${userid}`
    );
    return res.data.data;
  } catch (err) {
    console.error("Error fetching user data", err);
    return null;
  }
};

const getAllOrder = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BE}/order/getAll`);
    return res.data.data;
  } catch (err) {
    console.error("Error fetching user data", err);
    return null;
  }
};

export { getOrderFromUser, getAllOrder };
