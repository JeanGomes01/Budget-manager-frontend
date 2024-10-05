import styled from "styled-components";

export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  border: 2px solid black;
`;

export const LoginBorderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 50%;
  border: 2px solid black;
`;

export const LoginTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const LoginInput = styled.input`
  width: 95%; /* Largura igual ao do botão */
  padding: 0.5rem;
  margin-bottom: 1rem;
  background-color: #f2f2f2;
  border: none;
  border-radius: 0.25rem;
`;

export const LoginButton = styled.button`
  padding: 0.5rem;
  background-color: #0094ff;
  width: 12rem;
  border-radius: 0.25rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
  cursor: pointer;
  border: none;
`;

export const LabelInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin-bottom: 1rem;
  font-family: "Roboto", sans-serif;
`;

export const Label = styled.label`
  margin-right: 1rem;
  width: 20%; /* Largura fixa para a label */
  text-align: right;
`;
