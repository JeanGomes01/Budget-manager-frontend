import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Material from "../components/Auth/Material/Material";
import api, { getMaterialData } from "../services/api";
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

interface Material {
  id: number;
  name: string;
  value: number;
  createdAt: string;
}

const HomeMaterials = () => {
  const [materialData, setMaterialData] = useState<Material[]>([]);
  const navigate = useNavigate();

  const updateMaterials = async (id: number, name: string, value: number) => {
    try {
      await api.put(`http://localhost:3333/materials`, {
        id,
        name,
        value,
      });
    } catch (error) {
      console.error("Erro ao atualizar material", error);
    }
  };

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
        <ButtonGray onClick={() => navigate("/budgets")}>Budget</ButtonGray>
        <ButtonLogout onClick={handleLogout}>Logout</ButtonLogout>
        <ButtonCreate onClick={() => navigate("/create-client")}>
          Create Clients
        </ButtonCreate>
        <ButtonCreate onClick={() => navigate("/create-material")}>
          Create Materials
        </ButtonCreate>
        <ButtonCreate onClick={() => navigate("/budget-step1")}>
          Create Budget
        </ButtonCreate>
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
              <td>
                <input type="text" value={materialData.name} />
              </td>
              <td>
                <input type="text" value={materialData.value} />
              </td>
              <td>
                <input type="text" value={materialData.createdAt} />
              </td>
              <td>
                <ButtonAction>
                  <BtnUpdate
                    onClick={() =>
                      updateMaterials(
                        materialData.id,
                        materialData.name,
                        materialData.value
                      )
                    }
                  >
                    Update
                  </BtnUpdate>
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
