import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllUsers } from "../../services/UserService";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [users, setUsers] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers()
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const isEmptyData = () => {
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    )
      return true;
    return false;
  };

  const isHaveEmail = (email) => {
    if (users) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) return true;
      }
    }
    return false;
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSignup = () => {
    if (isEmptyData()) {
      alert("All fields are required");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Invalid email");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password and Confirm Password are not matched");
      return;
    }

    if (isHaveEmail(email)) {
      alert("Email is already taken");
      return;
    }

    const data = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      phone: "0",
      role: "user",
    };

    axios
      .post(`${process.env.REACT_APP_BE}/user/register`, data)
      .then(() => {
        alert("Đăng ký thành công");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            onClick={handleSignup}
            type="submit"
            className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Create Account
          </button>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link
            className="no-underline border-b border-blue text-blue-900 font-medium"
            to="/login"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
