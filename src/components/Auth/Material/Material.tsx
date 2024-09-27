import React, { useState } from "react";
import { createMaterial } from "../../../services/api";
import {
  Label,
  LabelInputContainer,
  LogoutButton,
  MaterialBorderContainer,
  MaterialButton,
  MaterialContainer,
  MaterialInput,
  MaterialTitle,
  ReturnButton,
} from "./Material.styles";

const Material: React.FC = () => {
  const [materialName, setMaterialName] = useState("");
  const [materialValue, setMaterialValue] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleMaterial = async (e: React.FormEvent) => {
    e.preventDefault();

    const materialValueNumber = parseFloat(materialValue);

    if (!materialName || isNaN(materialValueNumber)) {
      setError("Preencha todos os campos corretamente.");
      return;
    }

    try {
      // Chamada para a API de criação de material
      const response = await createMaterial(materialName, materialValueNumber);
      console.log("Material Cadastrado:", response);
      setSuccessMessage("Material cadastrado com sucesso!");

      // Limpar os campos após o cadastro
      setMaterialName("");
      setMaterialValue("");
      setError("");
    } catch (err) {
      console.error("Erro ao cadastrar material:", err);
      setError("Erro ao cadastrar material. Tente novamente.");
    }
  };

  return (
    <MaterialContainer onSubmit={handleMaterial}>
      <MaterialBorderContainer>
        <MaterialTitle>CRIAR MATERIAL</MaterialTitle>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        <LabelInputContainer>
          <Label>Nome:</Label>
          <MaterialInput
            type="text"
            value={materialName}
            onChange={(e) => setMaterialName(e.target.value)}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label>Valor:</Label>
          <MaterialInput
            type="number"
            value={materialValue}
            onChange={(e) => setMaterialValue(e.target.value)}
            required
          />
        </LabelInputContainer>
        <MaterialButton type="submit">Criar</MaterialButton>
        <ReturnButton type="button">Voltar</ReturnButton>
        <LogoutButton type="button">Logout</LogoutButton>
      </MaterialBorderContainer>
    </MaterialContainer>
  );
};

export default Material;
