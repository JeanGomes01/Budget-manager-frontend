import { useState } from "react";

const useRegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validatePasswords = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return false;
    }
    return true;
  };

  return {
    username,
    password,
    confirmPassword,
    setUsername,
    setPassword,
    setConfirmPassword,
    validatePasswords,
  };
};

export default useRegisterForm;
