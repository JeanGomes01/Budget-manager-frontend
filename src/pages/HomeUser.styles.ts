import styled from "styled-components";
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  border: 2px solid black;
`;

export const HomeBorderContainer = styled.h1`
  display: flex;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  gap: 1rem; /* Adiciona espaço entre os filhos */
`;

export const ButtonGray = styled.button`
  width: 10rem;
  height: 2.1rem;
  background-color: #bababa;
  color: #fff;
  border: none;
  margin-left: 1rem;
  cursor: pointer;
  border-radius: 0.8rem;
`;

export const ButtonBlue = styled.button`
  width: 10rem;
  height: 2.1rem;
  background-color: #0094ff;
  color: #fff;
  border: none;
  margin-left: 1rem;
  cursor: pointer;
  border-radius: 0.8rem;
`;

export const ButtonLogout = styled.div`
  width: 5rem;
  background-color: #ff0000;
  color: #fff;
  border: none;
  margin-left: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const ButtonCreate = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 2.1rem;
  background-color: #0094ff;
  color: #fff;
  border: none;
  margin-left: 1rem;
  cursor: pointer;
`;

export const ButtonAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const BtnUpdate = styled.div`
  background-color: #0094ff;
  color: #fff;
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 2rem;
`;

export const BtnDelete = styled.div`
  background-color: #ff0000;
  color: #fff;
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 2rem;
`;

export const UserDataContainer = styled.table`
  margin-top: 2rem;
  border: 4px solid black;
  width: 100%;
`;

export const UserDataTitle = styled.tr`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  font-weight: normal;
  background-color: #d3d3d3;
  text-align: center;
  padding: 0.5rem;
`;

export const UserData = styled.tr`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
  justify-items: center; /* Alinha itens ao centro */
  align-items: center; /* Alinha itens ao centro verticalmente */
  padding: 1rem 0; /* Ajuste de padding para espaçamento uniforme */
  gap: 14rem;
`;
