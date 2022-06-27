import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useSecure = (user) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user.email.length === 0) {
      navigate("/");
    }
  }, [user.email, navigate]);

  console.log(user.email);
};

export default useSecure;
