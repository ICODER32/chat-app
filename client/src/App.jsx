import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authuser } = useAuthContext();
  return (
    <div className=" h-screen p-4 flex items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={authuser ? <Home /> : <Navigate replace to={"/login"} />}
        />
        <Route
          path="/signup"
          element={authuser ? <Navigate replace to={"/"} /> : <Signup />}
        />
        <Route
          path="/login"
          element={authuser ? <Navigate replace to={"/"} /> : <Login />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
