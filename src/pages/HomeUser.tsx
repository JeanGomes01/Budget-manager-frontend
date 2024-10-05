import axios from "axios";
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

  const deleteClientes = async (id: number) => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:3333/clients`, {
        data: { id }, // Passando o id no corpo da requisição
      });
      setClientData(clientData.filter((client) => client.id !== id));
    } catch (error) {
      console.error("Erro ao excluir cliente:", error);
    }
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
        <ButtonCriarCliente onClick={() => navigate("/create-client")}>
          Create Client
        </ButtonCriarCliente>
        <ButtonCriarCliente onClick={() => navigate("/create-material")}>
          Create Material
        </ButtonCriarCliente>
      </Buttons>
      <h2>Listagem de Clientes</h2>
      <UserDataContainer>
        <UserDataTitle>
          <th>Name</th>
          <th>Email</th>
          <th>Created At</th>
          <th>Action</th>
        </UserDataTitle>
        <tbody>
          {clientData.map((client) => (
            <UserData key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.createdAt}</td>
              <td>
                <ButtonAction>
                  <BtnUpdate>Update</BtnUpdate>
                  <BtnDelete onClick={() => deleteClientes(client.id)}>
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
