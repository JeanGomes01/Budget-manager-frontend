import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api, { getBudgetData } from "../services/api";
import { ButtonBlue, ButtonGray } from "./HomeMaterials.styles";
import { ButtonCriarCliente, ButtonRed, Buttons } from "./HomeUser.styles";

interface Budget {
  clientId: number;
  id: number;
  name: string;
  value: number;
  createdAt: string;
  finalizedAt?: string;
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

  const deleteBudget = async (id: number) => {
    try {
      await api.delete(`http://localhost:3333/budgets`, {
        data: { id },
      });
      setBudgetData((prevBudgets) =>
        prevBudgets.filter((budget) => budget.id !== id)
      );
    } catch (error) {
      console.error("Erro ao excluir orçamento:", error);
    }
  };

  return (
    <div>
      <h1>Bem-vindo à home do Usuário!</h1>
      <Buttons>
        <ButtonGray onClick={() => navigate("/home-user")}>Clients</ButtonGray>
        <ButtonGray onClick={() => navigate("/materials")}>
          Materials
        </ButtonGray>
        <ButtonBlue onClick={() => navigate("/home-budget")}>Budget</ButtonBlue>
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
      <h2>Listagem de Orçamentos</h2>
      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Total Value</th>
            <th>Created At</th>
            <th>Finalized At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {budgetData.map((budget) => (
            <tr key={budget.id}>
              <td>{budget.name}</td>
              <td>{budget.value}</td>
              <td>{budget.createdAt}</td>
              <td>{budget.finalizedAt ? budget.finalizedAt : "N/A"}</td>{" "}
              {/* Use a variável correta para 'Finalized At' */}
              <td>
                <ButtonRed onClick={() => deleteBudget(budget.id)}>
                  Delete
                </ButtonRed>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default HomeBudget;
