import React from "react";
import { useState, useEffect } from "react";
import { getUserToken } from "../../services/UserService";
import { getNSXFromUser } from "../../services/NSXService";
import { useNavigate } from "react-router-dom";

const ComfirmShopping = () => {
  const [user, setUser] = useState(null);
  const [nsx, setNSX] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Xác nhận";

    const token = localStorage.getItem("ustoken");
    getUserToken(token)
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        console.log(err);
      });

    const getNSX = () => {
      getNSXFromUser(user._id)
        .then((res) => {
          setNSX(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    if (user != null) {
      getNSX();
    }
  }, [user]);
  const handleLoginMyShop = () => {
    if (password === nsx.secretKey) {
      localStorage.setItem("nsxid", nsx._id);
      alert("Xác nhận thành công");
      navigate("/shop");
    } else {
      alert("Mã xác nhận không đúng");
    }
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
          <h1 className="mb-8 text-3xl text-center">MÃ XÁC NHẬN SHOP</h1>
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Nhập key ..."
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLoginMyShop}
            type="submit"
            className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Xác thực
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComfirmShopping;
