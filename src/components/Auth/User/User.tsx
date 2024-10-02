import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../services/api";
import {
  Label,
  LabelInputContainer,
  LogoutButton,
  RegisterBorderContainer,
  RegisterButton,
  RegisterContainer,
  RegisterInput,
  RegisterTitle,
  ReturnButton,
} from "./User.styles";

const User = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await registerUser(email, password);
      navigate("/home-user");
      alert("Usuário registrado com sucesso!");
    } catch (err) {
      setError("Erro ao registrar usuário !");
      console.error(err);
    }
  };

  return (
    <RegisterContainer onSubmit={handleSubmit}>
      <RegisterBorderContainer>
        <RegisterTitle>CREATE USER</RegisterTitle>
        <LabelInputContainer>
          <Label>Email:</Label>
          <RegisterInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label>Password:</Label>
          <RegisterInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </LabelInputContainer>
        <RegisterButton type="submit">Register</RegisterButton>
        <ReturnButton onClick={() => navigate("/login")}>Back</ReturnButton>
        <LogoutButton onClick={() => navigate("/login")}>logout</LogoutButton>
        {error && <p>{error}</p>}
      </RegisterBorderContainer>
    </RegisterContainer>
  );
};

export default User;
