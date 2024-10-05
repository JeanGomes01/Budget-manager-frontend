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

interface LoginResponse {
  token: string;
  data: {
    username: string;
    email: string;
    created: string;
  };
}
interface LoginResponseClient {
  token: string;
  data: {
    name: string;
    email: string;
    created: string;
  };
}

interface responseMaterial {
  data: {
    id: number;
    name: string;
    value: number;
    createdAt: string;
  };
}

// Função para registrar usuário
export const registerUser = async (email: string, password: string) => {
  console.log("Dados enviados", { email, password });

  try {
    const response = await api.post("/user", { email, password });
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
export const loginUser = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await api.post("/login", { email, password });
    console.log("Cliente logado com sucesso", response.data);
    console.log("Resposta da API:", response.data); // Adicione esta linha para verificar a resposta

    const token = response.data.token; // Obtenha o token do backend
    localStorage.setItem("token", token);
    return response.data;

    // Armazena o token no localStorage
  } catch (error: any) {
    console.error(
      "Erro ao fazer login:",
      error.response?.data || error.message
    );
    throw error.response?.data || new Error("Erro ao fazer login");
  }
};

export const createClient = async (
  name: string,
  email: string
): Promise<LoginResponseClient> => {
  try {
    const responseClient = await api.post("/clients", { name, email });
    console.log("Cliente logado com sucesso", responseClient.data);
    console.log("Resposta da API:", responseClient.data); // Adicione esta linha para verificar a resposta
    return responseClient.data;
  } catch (error: any) {
    console.error(
      "Erro ao fazer login:",
      error.response?.data || error.message
    );
    throw error.response?.data || new Error("Erro ao fazer login");
  }
};

export const createMaterial = async (
  name: string,
  value: number
): Promise<responseMaterial> => {
  try {
    const responseMaterial = await api.post("/materials", { name, value });
    console.log("Material registrado com sucesso", responseMaterial.data);
    return responseMaterial.data;
  } catch (error: any) {
    console.error(
      "Erro ao registrar material",
      error.response?.data || error.message
    );
    throw error.response?.data || new Error("Erro ao registrar material");
  }
};

// Função para obter dados do cliente logado
export const getUserData = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error: any) {
    console.error(
      "Erro ao buscar dados do cliente:",
      error.response?.data || error.message
    );
    throw error.response?.data || new Error("Erro ao buscar dados do cliente");
  }
};

export const getClientData = async () => {
  try {
    const responseClient = await api.get("/clients");
    return responseClient.data.data;
  } catch (error: any) {
    console.error(
      "Erro ao buscar dados do cliente:",
      error.response?.data || error.message
    );
    throw error.response?.data || new Error("Erro ao buscar dados do cliente");
  }
};

export const getMaterialData = async () => {
  try {
    const responseMaterial = await api.get("/materials");
    return responseMaterial.data.data;
  } catch (error: any) {
    console.error(
      "Erro ao buscar materiais",
      error.response?.data || error.message
    );
    throw error.response?.data || new Error("Erro ao buscar materiais");
  }
};

export default api;
