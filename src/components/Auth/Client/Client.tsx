import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "../../../services/api";
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
} from "./Client.styles";

const RegisterClient = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      console.log(name, email);
      await createClient(name, email);
      navigate("/home-user");
      alert("Client registrado com sucesso!");
    } catch (err) {
      setError("Erro ao registrar client !");
      console.error(err);
    }
  };

  return (
    <RegisterContainer onSubmit={handleSubmit}>
      <RegisterBorderContainer>
        <RegisterTitle>CREATE CLIENT</RegisterTitle>
        <LabelInputContainer>
          <Label>Name:</Label>
          <RegisterInput
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
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
        <RegisterButton type="submit">Create</RegisterButton>
        <ReturnButton onClick={() => navigate("/home-user")}>Back</ReturnButton>
        <LogoutButton onClick={() => navigate("/login")}>logout</LogoutButton>
        {error && <p>{error}</p>}
      </RegisterBorderContainer>
    </RegisterContainer>
  );
};

export default RegisterClient;
