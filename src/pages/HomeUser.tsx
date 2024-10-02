import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getClientData } from "../services/api";
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
} from "./HomeUser.styles";

// interface User {
//   email: string;
//   created: string; // ou Date, se você preferir manipular como objeto Date
// }

interface Client {
  name: string;
  email: string;
  createdAt: string;
}

const HomeUser = () => {
  // const [userData, setUserData] = useState<User | null>(null);
  // const navigate = useNavigate();

  const [clientData, setClientData] = useState<Client[]>([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    getClientData().then((data) => setClientData(data));
  }, []);
  return (
    <div>
      <h1>Bem-vindo ao Home do usuário!</h1>
      <Buttons>
        <ButtonBlue onClick={() => navigate("/home-user")}>Clients</ButtonBlue>
        <ButtonGray onClick={() => navigate("/materials")}>
          Materials
        </ButtonGray>
        <ButtonGray onClick={() => navigate("/budget-step1")}>
          Budget
        </ButtonGray>
        <ButtonRed onClick={handleLogout}>Logout</ButtonRed>
        <ButtonCriarCliente onClick={() => navigate("/client")}>
          Create Client
        </ButtonCriarCliente>
      </Buttons>
      {clientData.map((clientData, index) => (
        <div key={index}>
          <UserDataContainer>
            <UserDataTitle>
              <h2>Nome</h2>
              <h2>Email</h2>
              <h2>Criado em</h2>
              <h2>Ações</h2>
            </UserDataTitle>
            <UserData>
              <p>{clientData.name}</p>
              <p>{clientData.email}</p>
              <p>{clientData.createdAt}</p>
              <ButtonAction>
                <BtnUpdate>Update</BtnUpdate>
                <BtnDelete>Delete</BtnDelete>
              </ButtonAction>
            </UserData>
          </UserDataContainer>
        </div>
      ))}
    </div>
  );
};

export default HomeUser;
