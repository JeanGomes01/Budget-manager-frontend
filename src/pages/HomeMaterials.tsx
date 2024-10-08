import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api, { getMaterialData } from "../services/api";
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

interface Material {
  id: number;
  name: string;
  value: number;
  createdAt: string;
}

const HomeMaterials = () => {
  const [materialData, setMaterialData] = useState<Material[]>([]);
  const navigate = useNavigate();

  const deleteMaterials = async (id: number) => {
    console.log(id);
    try {
      await api.delete(`http://localhost:3333/materials`, {
        data: { id }, // Passando o id no corpo da requisição
      });
      setMaterialData(materialData.filter((material) => material.id !== id));
    } catch (error) {
      console.error("Erro ao excluir material:", error);
    }
  };

  useEffect(() => {
    getMaterialData().then((data) => setMaterialData(data));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h1>Bem-vindo ao home do usuário!</h1>
      <Buttons>
        <ButtonGray onClick={() => navigate("/home-user")}>Clients</ButtonGray>
        <ButtonBlue onClick={() => navigate("/home-materials")}>
          Materials
        </ButtonBlue>
        <ButtonGray onClick={() => navigate("/home-budget")}>Budget</ButtonGray>
        <ButtonRed onClick={handleLogout}>Logout</ButtonRed>
        <ButtonCriarMaterials onClick={() => navigate("/create-client")}>
          Create Clients
        </ButtonCriarMaterials>
        <ButtonCriarMaterials onClick={() => navigate("/create-material")}>
          Create Materials
        </ButtonCriarMaterials>
        <ButtonCriarMaterials onClick={() => navigate("/budget-step1")}>
          Create Budget
        </ButtonCriarMaterials>
      </Buttons>
      <h2>Listagem de Materiais</h2>
      <UserDataContainer>
        <UserDataTitle>
          <th>Name</th>
          <th>Value</th>
          <th>Created At</th>
          <th>Action</th>
        </UserDataTitle>
        <tbody>
          {materialData.map((materialData) => (
            <UserData key={materialData.id}>
              <td>{materialData.name}</td>
              <td>{materialData.value}</td>
              <td>{materialData.createdAt}</td>
              <td>
                <ButtonAction>
                  <BtnUpdate>Update</BtnUpdate>
                  <BtnDelete onClick={() => deleteMaterials(materialData.id)}>
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

export default HomeMaterials;
