import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/api";
import {
  Label,
  LabelInputContainer,
  LoginBorderContainer,
  LoginButton,
  LoginContainer,
  LoginInput,
  LoginTitle,
} from "./Login.styles";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const { token } = await loginUser(email, password);

      if (token) {
        localStorage.setItem("token", token);
        navigate("/home-cliente");
      } else {
        setError("Erro no login. Tente novamente.");
      }
    } catch (err) {
      console.error("Erro no login:", err);
      setError("Erro no login. Verifique suas credenciais.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginBorderContainer>
        <LoginTitle>Login</LoginTitle>
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
        <LabelInputContainer>
          <Label>Password:</Label>
          <LoginInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
        </LabelInputContainer>
        <LoginButton type="button" onClick={handleLogin}>
          Entrar
        </LoginButton>
        <LoginButton onClick={() => navigate("/register")}>
          Registrar
        </LoginButton>
        {error && <p>{error}</p>}
      </LoginBorderContainer>
    </LoginContainer>
  );
};

export default Login;
