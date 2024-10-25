import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBudgetData } from "../services/api";
import {
  ButtonCreate,
  ButtonLogout,
  Buttons,
  ButtonVisualization,
  UserDataContainer,
  UserDataTitle,
} from "./HomeBudget.styles";
import { ButtonBlue, ButtonGray, UserData } from "./HomeMaterials.styles";

interface Client {
  id: number;
  name: string;
  email: string;
}

interface Budget {
  client: Client;
  clientId: number;
  id: number;
  name: string;
  amount: number;
  createdAt: string;
  finalized: boolean;
}

const HomeBudget = () => {
  const [budgetData, setBudgetData] = useState<Budget[]>([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  useEffect(() => {
    getBudgetData().then((data) => setBudgetData(data));
  }, []);

  return (
    <div>
      <h1>Bem-vindo à home do Usuário!</h1>
      <Buttons>
        <ButtonGray onClick={() => navigate("/home-user")}>Clients</ButtonGray>
        <ButtonGray onClick={() => navigate("/materials")}>
          Materials
        </ButtonGray>
        <ButtonBlue onClick={() => navigate("/budgets")}>Budget</ButtonBlue>

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

      <h2>Listagem de Orçamentos</h2>
      <UserDataContainer>
        <tbody>
          <UserDataTitle>
            <th>Client</th>
            <th>Total Value</th>
            <th>Created At</th>
            <th>Finalized At</th>
            <th>Action</th>
          </UserDataTitle>
          {budgetData && budgetData.length ? (
            budgetData.map((budget) => (
              <UserData key={budget.id}>
                <td>{budget.client.name}</td>
                <td>{budget.amount}</td>
                <td>{budget.createdAt}</td>
                <td>{JSON.stringify(budget.finalized)}</td>
                <ButtonVisualization>Visualizar</ButtonVisualization>
              </UserData>
            ))
          ) : (
            <UserData>
              <td>Não ha Orçamentos</td>
            </UserData>
          )}
        </tbody>
      </UserDataContainer>
    </div>
  );
};
export default HomeBudget;
