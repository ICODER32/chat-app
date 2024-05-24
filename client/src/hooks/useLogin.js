import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { authuser, setAuthUser } = useAuthContext();

  const login = async ({ username, password }) => {
    try {
      setLoading(true);
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
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
        throw new Error(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { login, loading };
};

export default useLogin;
