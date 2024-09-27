import axios from "axios";

// Cria uma instância do Axios com a URL base do backend
const api = axios.create({
  baseURL: "http://localhost:3333", // Aponte para o backend
});

// Adicionar token de autenticação às requisições (caso tenha um)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Função para registrar usuário
export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  console.log("Dados enviados", { username, password, email });

  try {
    const response = await api.post("/register", { username, email, password });
    console.log("Usuário registrado com sucesso", response.data);
    return response.data; // Retorna a resposta do backend
  } catch (error: any) {
    // Tratamento mais informativo de erros
    console.error(
      "Erro ao registrar usuário:",
      error.response?.data || error.message
    );
    throw error.response?.data || new Error("Erro ao registrar usuário");
  }
};

// Função para fazer login do usuário
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post("/login", { email, password });
    console.log("Resposta da API:", response.data); // Adicione esta linha para verificar a resposta

    const token = response.data.token; // Obtenha o token do backend

    // Armazena o token no localStorage
    localStorage.setItem("token", token);

    return token; // Você pode retornar o token, se necessário
  } catch (error: any) {
    console.error(
      "Erro ao fazer login:",
      error.response?.data || error.message
    );
    throw error.response?.data || new Error("Erro ao fazer login");
  }
};

// Função para obter dados do cliente logado
export const getClientData = async () => {
  try {
    const response = await api.get("/me"); // Supondo que "/me" retorna os dados do cliente
    return response.data;
  } catch (error: any) {
    console.error(
      "Erro ao buscar dados do cliente:",
      error.response?.data || error.message
    );
    throw error.response?.data || new Error("Erro ao buscar dados do cliente");
  }
};

// Função para registrar cliente
export async function registerClient(userData: {
  username: string;
  email: string;
  password: string;
}) {
  try {
    const response = await api.post("/register", userData); // Usa a instância api
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error; // Opcional: você pode querer tratar isso de forma diferente
  }
}

export const createMaterial = async (name: String, value: number) => {
  try {
    const response = await api.post("/materials", { name, value });
    console.log("Material criado com sucesso:", response.data);
    return response.data;
  } catch (error: any) {
    console.error(
      "Erro ao criar material:",
      error.response?.data || error.message
    );
    throw error.response?.data || new Error("Erro ao criar material");
  }
};

export default api;
