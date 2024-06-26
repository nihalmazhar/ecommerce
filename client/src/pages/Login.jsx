import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [data, setData] = useState({ email: "", password: "" });
  const [response, setResponse] = useState("");

  const { user } = useContext(UserContext);
  const token = localStorage.getItem("token");
  if (token) {
    navigate("/home");
  }

  const handlechange = (e) => {
    const { id, value } = e.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };
  const BaseUrl = "http://localhost:4000/api/login";

  const axiosinst = axios.create({
    baseURL: BaseUrl,
    withCredentials: true,
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("test", data);
    axiosinst.post(BaseUrl, data, { withCredentials: true }).then((res) => {
      console.log(res);
      setResponse(res.data.message);
      console.log(response);
      setTimeout(() => {
        setResponse("");
      }, 5000);

      if (res.data.success) {
        const token = res.data.token;
        localStorage.setItem("token", token);
        navigate("/home");
      }
    });
  };

  console.log(data);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src="/src/assets/PARTSBAY2.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {response && (
            <div className="flex justify-center p-2 ">
              <div className="bg-red-600 text-white p-2  rounded-md w-[40vw]">
                {response}
              </div>
            </div>
          )}
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  onChange={handlechange}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  onChange={handlechange}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={handlesubmit}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
