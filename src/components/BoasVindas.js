import styled from "styled-components";
import imagem from "../assets/logo.png";
export default function BoasVindas({ setInicio }) {
  return (
    <Containe>
      <Logo>
        <img src={imagem} />
        <h1>ZapRecall</h1>
        <button onClick={() => setInicio(false)} data-test="start-btn">Iniciar Recall!</button>
      </Logo>
    </Containe>
  );
}
const Containe = styled.div`
  width: 380px;
  height: 100vh;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.5);
  background-color: #fb6b6b;
`;
const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 150px 0;
  font-family: "Righteous", cursive;
  h1 {
    margin: 20px 0 40px 0;
    color: #ffffff;
    font-weight: 400;
    font-size: 36px;
  }
  button {
    width: 246px;
    height: 54px;
    border-radius: 5px;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    color: #d70900;
    font-weight: 400;
    font-size: 18px;
    cursor: pointer;
  }
`;
