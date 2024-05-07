import GenderCheckbox from "./components/GenderCheckbox";

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" w-full p-6 bg-gray-400 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className=" text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className="text-blue-600"> ChatWorld</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full h-10"
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
            />
          </div>

          <GenderCheckbox />
          <a
            href="#"
            className=" text-sm hover:underline hover:text-blue-600 mt-2 inline-block "
          >
            {"Already have an account? Login"}
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
}
