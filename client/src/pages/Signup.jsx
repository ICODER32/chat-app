import { Link } from "react-router-dom";
import GenderCheckbox from "./components/GenderCheckbox";
import { useState } from "react";
import useSignup from "../hooks/useSignup";

export default function Signup() {
  const { loading, signup } = useSignup();
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  const setGender = (gender) => {
    setInputs({ ...inputs, gender });
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" w-full p-6 bg-gray-400 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className=" text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className="text-blue-600"> ChatWorld</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full h-10"
              name="fullname"
              value={inputs.fullname}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="label-text text-base">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="input input-bordered w-full h-10"
              name="username"
              value={inputs.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="label-text text-base">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered w-full h-10"
              name="password"
              value={inputs.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="label-text text-base">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password Again"
              className="input input-bordered w-full h-10"
              name="confirmPassword"
              value={inputs.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <GenderCheckbox gender={inputs.gender} setGender={setGender} />
          <Link
            to="/login"
            className=" text-sm hover:underline hover:text-blue-600 mt-2 inline-block "
          >
            {"Already have an account? Login"}
          </Link>

          <div>
            <button
              disabled={
                loading ||
                !inputs.fullname ||
                !inputs.username ||
                !inputs.password ||
                !inputs.confirmPassword
              }
              type="submit"
              className="btn btn-block btn-sm mt-2"
            >
              {loading ? "Loading..." : "Signup"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
