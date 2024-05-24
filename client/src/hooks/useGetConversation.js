import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);
        setLoading(false);
        if (response.ok) {
          setConversation(data);
        } else {
          toast.error(data.message);
          throw new Error(data.message);
        }

        if (data.error) {
          throw new Error(data.error);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getConversation();
  }, []);

  return { conversation, loading };
};

export default useGetConversation;
