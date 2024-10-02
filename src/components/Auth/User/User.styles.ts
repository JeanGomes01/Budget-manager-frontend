import styled from "styled-components";

export const RegisterContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  border: 2px solid black;
`;

export const RegisterBorderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60%;
  width: 50%;
  border: 2px solid black;
`;

export const RegisterTitle = styled.h1`
  font-size: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 2.5rem;
`;

export const RegisterInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  background-color: #f2f2f2;
  border: none;
  border-radius: 0.25rem;
  font-family: monospace;
`;

export const RegisterButton = styled.button`
  padding: 0.5rem;
  background-color: #00c2ff;
  width: 12rem;
  border-radius: 0.25rem;
  border: none;
  color: #ffffff;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

export const ReturnButton = styled.button`
  background-color: #b2b2b2;
  color: #ffffff;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
  width: 12rem;
  margin-bottom: 0.5rem;
`;

export const LogoutButton = styled.button`
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
  width: 12rem;
  margin-bottom: 0.5rem;
`;

export const LabelInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  margin-bottom: 1rem;
  font-family: "Roboto", sans-serif;
`;

export const Label = styled.label`
  margin-right: 1rem;
  width: 30%; /* Largura fixa para a label */
  text-align: right;
`;
