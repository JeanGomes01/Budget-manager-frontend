import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api, { getClientData } from "../services/api";
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
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

const HomeUser = () => {
  const [clientData, setClientData] = useState<Client[]>([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const deleteClients = async (id: number) => {
    try {
      await api.delete(`http://localhost:3333/clients`, {
        data: { id },
      });
    } catch (error: any) {
      console.error("Erro ao excluir cliente:", error);
    }
  };

  useEffect(() => {
    getClientData().then((data) => setClientData(data));
  }, []);

  return (
    <div>
      <h1>Bem vindo a home do Usuário !</h1>
      <Buttons>
        <ButtonBlue onClick={() => navigate("/home-user")}>Clients</ButtonBlue>
        <ButtonGray onClick={() => navigate("/materials")}>
          Materials
        </ButtonGray>
        <ButtonGray onClick={() => navigate("/home-budget")}>Budget</ButtonGray>
        <ButtonRed onClick={handleLogout}>Logout</ButtonRed>
        <ButtonCriarCliente onClick={() => navigate("/create-client")}>
          Create Client
        </ButtonCriarCliente>
        <ButtonCriarCliente onClick={() => navigate("/create-material")}>
          Create Material
        </ButtonCriarCliente>
        <ButtonCriarCliente onClick={() => navigate("/budget-step1")}>
          Create Budget
        </ButtonCriarCliente>
      </Buttons>
      <h2>Listagem de Clientes</h2>
      <UserDataContainer>
        <tbody>
          <UserDataTitle>
            <th>Name</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Action</th>
          </UserDataTitle>
          {clientData.map((client) => (
            <UserData key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.createdAt}</td>
              <td>
                <ButtonAction>
                  <BtnUpdate>Update</BtnUpdate>
                  <BtnDelete
                    onClick={() => {
                      deleteClients(client.id),
                        getClientData().then((data) => setClientData(data));
                    }}
                  >
                    Delete
                  </BtnDelete>
                </ButtonAction>
              </td>
            </UserData>
          ))}
        </tbody>
      </UserDataContainer>
    </div>
  );
};

export default HomeUser;
