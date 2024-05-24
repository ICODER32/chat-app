import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullname,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    handleSignupError({
      fullname,
      username,
      password,
      confirmPassword,
      gender,
    });

    try {
      setLoading(true);
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await response.json();
      console.log(data);
      setLoading(false);
      if (response.ok) {
        localStorage.setItem("chat-user", JSON.stringify(data));
        setAuthUser(data);
      } else {
        throw new Error(data.message);
      }

      if (data.error) {
        toast.error(data.error);
        return;
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  return { signup, loading };
};

export default useSignup;

function handleSignupError(inputs) {
  const { fullname, username, password, confirmPassword, gender } = inputs;
  if (!fullname || !username || !password || !confirmPassword || !gender) {
    console.log(fullname, username, password, confirmPassword, gender);
    toast.error("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters long");
    return false;
  }

  return true;
}
