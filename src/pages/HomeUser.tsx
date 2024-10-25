import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api, { getClientData } from "../services/api";
import { ButtonCreate, ButtonLogout } from "./HomeBudget.styles";
import {
  BtnDelete,
  BtnUpdate,
  ButtonAction,
  ButtonBlue,
  ButtonGray,
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

  const updateCLients = async (id: number, name: string, email: string) => {
    try {
      await api.put(`http://localhost:3333/clients`, {
        id,
        name,
        email,
      });
    } catch (error: any) {
      console.error("Erro ao atualizar cliente:", error);
    }
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
        <ButtonGray onClick={() => navigate("/budgets")}>Budget</ButtonGray>
        <ButtonLogout onClick={handleLogout}>Logout</ButtonLogout>
        <ButtonCreate onClick={() => navigate("/create-client")}>
          Create Client
        </ButtonCreate>
        <ButtonCreate onClick={() => navigate("/create-material")}>
          Create Material
        </ButtonCreate>
        <ButtonCreate onClick={() => navigate("/budget-step1")}>
          Create Budget
        </ButtonCreate>
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
              <td>
                <input type="text" value={client.name} />
              </td>

              <td>
                <input type="text" value={client.email} />
              </td>
              <td>
                <input type="text" value={client.createdAt} />
              </td>
              <td>
                <ButtonAction>
                  <BtnUpdate
                    onClick={() => {
                      updateCLients(client.id, client.name, client.email),
                        getClientData().then((data) => setClientData(data));
                    }}
                  >
                    Update
                  </BtnUpdate>
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
