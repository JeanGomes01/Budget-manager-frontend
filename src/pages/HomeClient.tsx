// HomeCliente.jsx
import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  username: string;
  email: string;
  createdAt: string; // ou Date, se você preferir manipular como objeto Date
}

const HomeCliente = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3333/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };

    fetchUserData();
  }, [token]);

  return (
    <div>
      <h1>Bem-vindo ao Home do usuário!</h1>
      {userData ? (
        <div>
          <h2>Usuário:</h2>
          <p>ID: {userData.id}</p>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
          <p>
            Data de Criação: {new Date(userData.createdAt).toLocaleString()}
          </p>
        </div>
      ) : (
        <p>Carregando dados do usuário...</p>
      )}
    </div>
  );
};

export default HomeCliente;
