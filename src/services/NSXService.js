import axios from "axios";

const getNSXFromUser = async (userid) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BE}/nsx/getNSXFromUser/${userid}`
    );
    return res.data.data;
  } catch (err) {
    console.error("Error fetching user data", err);
    return null;
  }
};

const getNSX = async (id) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BE}/nsx/detail/${id}`);
    return res.data.data;
  } catch (err) {
    console.error("Error fetching user data", err);
    return null;
  }
};

export { getNSXFromUser, getNSX };
