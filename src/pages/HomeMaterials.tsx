import { ButtonBlue, ButtonGray } from "./HomeClient.styles";
import { HomeBorderContainer, HomeContainer } from "./HomeMaterials.styles";

const HomeClient = () => {
  // Lista de clientes
  const clients = [
    {
      name: "Claudinei Santos",
      email: "teste@hotmail.com",
      age: 21,
      createdAt: "18/09/2024",
    },
    {
      name: "Maria Silva",
      email: "maria@gmail.com",
      age: 30,
      createdAt: "15/09/2024",
    },
    // Adicione mais clientes conforme necessário
  ];

  return (
    <div>
      <ButtonGray>Cliente</ButtonGray>
      <ButtonBlue>Materiais</ButtonBlue>
      <ButtonGray>Orçamentos</ButtonGray>
      <div>
        <HomeContainer>
          <HomeBorderContainer>
            <div
              style={{
                width: "100%",
                display: "flex",
                fontSize: "1rem",
                fontWeight: "normal",
                justifyContent: "space-between",
              }}
            >
              <p>NOME</p>
              <p>EMAIL</p>
              <p>IDADE</p>
              <p>CRIADO EM</p>
              <p>AÇÕES</p>
            </div>
            {clients.map((client, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  fontSize: "1rem",
                  fontWeight: "normal",
                  justifyContent: "space-between",
                  padding: "0.5rem 0",
                  borderBottom: "1px solid #ccc",
                }}
              >
                <p>{client.name}</p>
                <p>{client.email}</p>
                <p>{client.age}</p>
                <p>{client.createdAt}</p>
                <p>
                  <button
                    style={{
                      marginRight: "0.5rem",
                      backgroundColor: "#0094FF",
                      color: "#fff",
                      border: "none",
                      borderRadius: "0.5rem",
                      cursor: "pointer",
                    }}
                  >
                    Update
                  </button>
                  <button
                    style={{
                      marginRight: "0.5rem",
                      backgroundColor: "#FF0000",
                      color: "#fff",
                      border: "none",
                      borderRadius: "0.5rem",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </p>
              </div>
            ))}
          </HomeBorderContainer>
        </HomeContainer>
      </div>
    </div>
  );
};

export default HomeClient;
