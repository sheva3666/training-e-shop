import { useState } from "react";

const useUser = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || { email: "" }
  );

  const setUserToLocalStorage = (newUser) => {
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  return [user, setUserToLocalStorage];
};

export default useUser;
