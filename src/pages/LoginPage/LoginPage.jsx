import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllUsers, getUserToken } from "../../services/UserService";
import bcrypt from "bcryptjs";
import GoogleButton from "react-google-button";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Đăng nhập";
    const fetchUsers = async () => {
      const res = await getAllUsers();
      setUsers(res);
    };
    fetchUsers();
  }, []);

  const isvalidLogin = (email, pass) => {
    if (users) {
      for (let i = 0; i < users.length; i++) {
        if (
          users[i].email === email &&
          bcrypt.compareSync(pass, users[i].password)
        ) {
          return true;
        }
      }
    }
    return false;
  };

  const checkAccountGoogle = (email) => {
    if (users) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
          return true;
        }
      }
    }
    return false;
  };

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Bạn chưa nhập đủ trường thông tin!");
      return;
    }

    if (!isvalidLogin(email, password)) {
      alert("Mật khẩu hoặc tài khoản không đúng!");
    } else {
      await axios
        .post(`${process.env.REACT_APP_BE}/user/login`, {
          email,
          password,
        })
        .then((res) => {
          getUserToken(res.data.access_token)
            .then((data) => {
              if (data.role === "admin") {
                localStorage.setItem("rl", "ad");
                alert("Đăng nhập thành công");
                navigate("/admin");
              } else {
                localStorage.setItem("ustoken", res.data.access_token);
                alert("Đăng nhập thành công");
                navigate("/");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleLoginGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    const auth = getAuth(app);
    auth.languageCode = "it";
    provider.setCustomParameters({
      login_hint: "user@example.com",
    });

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        if (checkAccountGoogle(user.email)) {
          axios
            .post(`${process.env.REACT_APP_BE}/user/loginGoogle`, {
              email: user.email,
            })
            .then((res) => {
              localStorage.setItem("ustoken", res.data.access_token);
              navigate("/");
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          axios
            .post(`${process.env.REACT_APP_BE}/user/register`, {
              email: user.email,
              name: user.displayName,
              phone: "0",
              password: "123qwe",
              confirmPassword: "123qwe",
              role: "user",
            })
            .then(() => {})
            .catch((error) => {
              console.log(error);
            });
          axios
            .post(`${process.env.REACT_APP_BE}/user/loginGoogle`, {
              email: user.email,
            })
            .then((res) => {
              localStorage.setItem("ustoken", res.data.access_token);
              navigate("/");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error("Error code: " + errorCode);
        console.error("Error message: " + errorMessage);
        console.error("Email: " + email);
        console.error("Credential: " + credential);
      });
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className=" bg-white border border-gray-300 px-6 py-8 rounded-md shadow-gray-500 shadow-lg text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign In</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 bg-slate-300"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4 bg-slate-300"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            onClick={handleLogin}
            type="submit"
            className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Sign In
          </button>
          <hr />
          <div className="mt-2 mb-2 flex items-center justify-center">
            <h5 className="text-sm text-grey-100 mr-3">Or:</h5>
            <div className="">
              <GoogleButton onClick={handleLoginGoogle} />
            </div>
          </div>
          <hr />

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing in, you agree to the
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
          Don't have an account?{" "}
          <Link
            className="no-underline border-b border-blue text-blue-900 font-medium"
            to="/register"
          >
            Register
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
