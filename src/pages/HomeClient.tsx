// HomeCliente.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BtnDelete,
  BtnUpdate,
  ButtonAction,
  ButtonBlue,
  ButtonCriarCliente,
  ButtonGray,
  ButtonRed,
  Buttons,
  UserData,
  UserDataContainer,
  UserDataTitle,
} from "./HomeClient.styles";

interface User {
  username: string;
  email: string;
  created: string; // ou Date, se você preferir manipular como objeto Date
}

const HomeCliente = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    const userParssed = user ? JSON.parse(user) : null;
    setUserData(userParssed);
  }, []);

  return (
    <div>
      <h1>Bem-vindo ao Home do usuário!</h1>
      <Buttons>
        <ButtonBlue onClick={() => navigate("/home-cliente")}>
          Clientes
        </ButtonBlue>
        <ButtonGray onClick={() => navigate("/materials")}>
          Materiais
        </ButtonGray>
        <ButtonGray onClick={() => navigate("/budget-step1")}>
          Orçamentos
        </ButtonGray>
        <ButtonRed onClick={handleLogout}>Logout</ButtonRed>
        <ButtonCriarCliente>Criar Cliente</ButtonCriarCliente>
      </Buttons>

      {userData ? (
        <div>
          <UserDataContainer>
            <UserDataTitle>
              <h2>Nome</h2>
              <h2>Email</h2>
              <h2>Criado em</h2>
              <h2>Ações</h2>
            </UserDataTitle>
            <UserData>
              <p>{userData.username}</p>
              <p>{userData.email}</p>
              <p>{userData.created}</p>
              <ButtonAction>
                <BtnUpdate>Update</BtnUpdate>
                <BtnDelete>Delete</BtnDelete>
              </ButtonAction>
            </UserData>
          </UserDataContainer>
        </div>
      ) : (
        <p>Carregando dados do usuário...</p>
      )}
    </div>
  );
};

export default HomeCliente;
