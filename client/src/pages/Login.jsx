import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { useState } from "react";

export default function Login() {
  const { loading, login } = useLogin();
  const [inputs, setInputs] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" w-full p-6 bg-gray-400 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className=" text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-600"> ChatWorld</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Username</span>
            </label>
            <input
              type="text"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
              placeholder="Enter Username"
              className="input input-bordered w-full h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="label-text text-base">Password</span>
            </label>
            <input
              type="password"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              placeholder="Enter Password"
              className="input input-bordered w-full h-10"
            />
          </div>

          <Link
            to="/signup"
            className=" text-sm hover:underline hover:text-blue-600 mt-2 inline-block "
          >
            {"Don't have an account? Register"}
          </Link>

          <div>
            <button disabled={loading} className="btn btn-block btn-sm mt-2">
              {loading ? "Loading..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
