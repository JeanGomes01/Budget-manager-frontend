import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MaterialInput } from "../Material/Material.styles";
import {
  BudgetBorderContainer,
  BudgetButton,
  BudgetContainer,
  BudgetTitle,
  Label,
  LabelInputContainer,
  LogoutButton,
  ReturnButton,
} from "./Budget.styles";

const Budget: React.FC = () => {
  const [budgetName, setBudgetName] = useState("");
  const [budgetValue, setBudgetValue] = useState("");
  const navigate = useNavigate();

  const handleBudget = async (e: React.FormEvent) => {
    e.preventDefault();

    const budget = {
      name: budgetName,
      value: parseFloat(budgetValue),
    };
    // Aqui faz a chamada para API
    console.log("Material Cadastrado:", budget);

    // Limpar os campos
    setBudgetName("");
    setBudgetValue("");
  };
  return (
    <BudgetContainer onSubmit={handleBudget}>
      <BudgetBorderContainer>
        <BudgetTitle>CRIAR ORÇAMENTO</BudgetTitle>
        <h2>STEP 1/2</h2>
        <h3>Escolha o Cliente</h3>
        <LabelInputContainer>
          <Label>Nome:</Label>
          <MaterialInput
            type="text"
            value={budgetName}
            onChange={(e) => setBudgetName(e.target.value)}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label>Valor:</Label>
          <MaterialInput
            type="number"
            value={budgetValue}
            onChange={(e) => setBudgetValue(e.target.value)}
            required
          />
        </LabelInputContainer>
        <BudgetButton onClick={() => navigate("/budget-step2")} type="submit">
          Escolher
        </BudgetButton>
        <ReturnButton onClick={() => navigate("/home-user")} type="submit">
          Voltar
        </ReturnButton>
        <LogoutButton onClick={() => navigate("/login")} type="submit">
          Logout
        </LogoutButton>
      </BudgetBorderContainer>
    </BudgetContainer>
  );
};
export default Budget;
