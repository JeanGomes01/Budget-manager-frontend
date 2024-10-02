import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonCriarMaterials } from "./HomeMaterials.styles";
import {
  BtnDelete,
  BtnUpdate,
  ButtonAction,
  ButtonBlue,
  ButtonGray,
  ButtonRed,
  Buttons,
  UserData,
  UserDataContainer,
  UserDataTitle,
} from "./HomeUser.styles";

interface User {
  id: number;
  username: string;
  email: string;
  createdAt: string; // ou Date, se você preferir manipular como objeto Date
}

const HomeMaterials = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const fetchUserData = async () => {
    if (!token) {
      navigate("/login");
      return;
    }
    try {
      const response = await axios.get("http://localhost:3333/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
      navigate("/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <h1>Bem-vindo ao Home do usuário!</h1>
      <Buttons>
        <ButtonGray>Clientes</ButtonGray>
        <ButtonBlue>Materiais</ButtonBlue>
        <ButtonGray>Orçamentos</ButtonGray>
        <ButtonRed onClick={handleLogout}>Logout</ButtonRed>
        <ButtonCriarMaterials>Criar Materiais</ButtonCriarMaterials>
      </Buttons>

      {userData ? (
        <div>
          <UserDataContainer>
            <UserDataTitle>
              <h2>Nome</h2>
              <h2>Valor</h2>
              <h2>Criado em</h2>
              <h2>Ações</h2>
            </UserDataTitle>
            <UserData>
              <p>Name: {userData.id}</p>
              <p>Valor: R$ {userData.username}</p>
              <p>
                Data de Criação: {new Date(userData.createdAt).toLocaleString()}
              </p>
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

export default HomeMaterials;
