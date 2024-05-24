import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
const useLogout = () => {
  const { setAuthUser } = useAuthContext();
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/auth/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setAuthUser(null);
      localStorage.removeItem("chat-user");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return { logout };
};

export default useLogout;
