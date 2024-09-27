import React, { useEffect, useState } from "react";
import api from "../services/api";

// Defina a interface para o usuário
interface User {
  id: number; // Ajuste o tipo conforme necessário
  username: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); // Use a interface User
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/users");
        setUsers(response.data.users); // Acesse os usuários da resposta
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        setError("Erro ao buscar usuários.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Carregando usuários...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Usuários Cadastrados</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
