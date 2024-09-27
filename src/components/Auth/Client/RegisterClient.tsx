import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../services/api"; // Ajuste o caminho se necessário
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
} from "./RegisterClient.styles";

const RegisterClient = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await registerUser(username, email, password);
      navigate("/home-cliente");
      alert("Usuário registrado com sucesso!");
    } catch (err) {
      setError("Erro ao registrar usuário !");
      console.error(err);
    }
  };

  return (
    <RegisterContainer onSubmit={handleSubmit}>
      <RegisterBorderContainer>
        <RegisterTitle>CRIAR CLIENTE</RegisterTitle>
        <LabelInputContainer>
          <Label>Username:</Label>
          <RegisterInput
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </LabelInputContainer>
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
        <RegisterButton type="submit">Registrar</RegisterButton>
        <ReturnButton onClick={() => navigate("/login")}>Voltar</ReturnButton>
        <LogoutButton onClick={() => navigate("/login")}>logout</LogoutButton>
        {error && <p>{error}</p>}
      </RegisterBorderContainer>
    </RegisterContainer>
  );
};

export default RegisterClient;
