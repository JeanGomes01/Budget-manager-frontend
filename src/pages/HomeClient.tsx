import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Label,
  LabelInputContainer,
  LoginBorderContainer,
  LoginButton,
  LoginContainer,
  LoginInput,
  LoginTitle,
} from "./HomeClient.styles";

const HomeClient = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!name || !email) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    setError("");
    setLoading(true);
  };

  return (
    <LoginContainer>
      <LoginBorderContainer>
        <LoginTitle>CREATE CLIENT</LoginTitle>
        <LabelInputContainer>
          <Label>Name:</Label>
          <LoginInput
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label>Email:</Label>
          <LoginInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </LabelInputContainer>

        <LoginButton type="button" onClick={handleLogin}>
          Enter
        </LoginButton>
        <LoginButton onClick={() => navigate("/client")}>Register</LoginButton>
        {error && <p>{error}</p>}
      </LoginBorderContainer>
    </LoginContainer>
  );
};

export default HomeClient;
