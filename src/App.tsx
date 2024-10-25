import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import BudgetStep1 from "./components/Auth/Budget/BudgetStep1";
import BudgetStep2 from "./components/Auth/Budget/BudgetStep2";
import BudgetStep3 from "./components/Auth/Budget/BudgetStep3";
import Client from "./components/Auth/Client/Client";
import Login from "./components/Auth/Login";
import Material from "./components/Auth/Material/Material";
import User from "./components/Auth/User/User";
import HomeBudget from "./pages/HomeBudget";
import HomeMaterials from "./pages/HomeMaterials";
import HomeUser from "./pages/HomeUser";
import UserList from "./pages/userList";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-user" element={<User />}></Route>
          <Route path="/home-user" element={<HomeUser />}></Route>
          <Route path="/create-client" element={<Client />}></Route>
          <Route path="/materials" element={<HomeMaterials />} />
          <Route path="/create-material" element={<Material />} />
          <Route path="/budgets" element={<HomeBudget />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/budget-step1" element={<BudgetStep1 />} />
          <Route path="/budget-step2" element={<BudgetStep2 />} />
          <Route path="/budget-step3" element={<BudgetStep3 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
