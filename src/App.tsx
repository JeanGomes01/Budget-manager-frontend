import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import BudgetStep1 from "./components/Auth/Budget/BudgetStep1";
import BudgetStep2 from "./components/Auth/Budget/BudgetStep2";
import BudgetStep3 from "./components/Auth/Budget/BudgetStep3";
import RegisterClient from "./components/Auth/Client/RegisterClient";
import Login from "./components/Auth/Login";
import Material from "./components/Auth/Material/Material";
import HomeBudget from "./pages/HomeBudget";
import HomeClient from "./pages/HomeClient";
import HomeMaterials from "./pages/HomeMaterials";
import UserList from "./pages/userList";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<RegisterClient />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home-materials" element={<HomeMaterials />} />
          <Route path="/home-cliente" element={<HomeClient />} />
          <Route path="/home-budget" element={<HomeBudget />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/materials" element={<Material />} />
          <Route path="/budget-step1" element={<BudgetStep1 />} />
          <Route path="/budget-step2" element={<BudgetStep2 />} />
          <Route path="/budget-step3" element={<BudgetStep3 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
