import axios from "axios";

const getAllShoppingCartFromUser = async (userid) => {
  try {
    const params = new URLSearchParams();
    params.append("userid", userid);
    const res = await axios.get(
      `${process.env.REACT_APP_BE}/shoppingcart/getAll?${params.toString()}`
    );
    return res.data.data;
  } catch (err) {
    console.error("Error fetching user data", err);
    return null;
  }
};

const deleteShoppingCartFromUser = async (userid) => {
  try {
    await axios.delete(
      `${process.env.REACT_APP_BE}/shoppingcart/deleteFromUser/${userid}`
    );
  } catch (err) {
    console.error("Error fetching user data", err);
    return null;
  }
};

export { getAllShoppingCartFromUser, deleteShoppingCartFromUser };
