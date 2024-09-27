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
  background-color: #bababa;
  color: #fff;
  border: none;
  margin-left: 1rem;
  cursor: pointer;
`;

export const ButtonBlue = styled.button`
  background-color: #0094ff;
  color: #fff;
  border: none;
  margin-left: 1rem;
  cursor: pointer;
`;
