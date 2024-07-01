import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { getAllUsers } from "../../services/UserService";

const NumOfUserCard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((data) => {
      setUsers(data);
    }).catche = (err) => {
      console.log(err);
    };
  }, []);

  return (
    <div className="m-3 p-3 bg-blue-500 h-36 rounded-md grid grid-cols-3 shadow-lg shadow-gray-500">
      <div className="col-span-2">
        <h6 className="text-white p-2 text-3xl">Số lượng người dùng </h6>
        <p className="text-white p-2 text-2xl">
          {users ? (users.length > 0 ? users.length : 0) : 0}
        </p>
      </div>
      <div className="col-span-1 text-center">
        <FontAwesomeIcon icon={faUser} className="h-28" />
      </div>
    </div>
  );
};

export default NumOfUserCard;
