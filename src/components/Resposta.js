import styled from "styled-components";

export default function Resposta({mudarCard, answer}) {
  return (
    <Containe>
      <Style>
        <h3>{answer}</h3>
        <div>
          <button onClick={() => mudarCard("card1")}>Não lembrei</button>
          <button onClick={() => mudarCard("card1")}>Quase não lembrei</button>
          <button onClick={() => mudarCard("card1")}>Zap!</button>
        </div>
      </Style>
    </Containe>
  );
}
const Containe = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Recursive", sans-serif;
`;
const Style = styled.div`
  position: relative;
  width: 300px;
  height: 131px;
  background-color: #ffffd4;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  color: #333333;
  h3 {
    font-size: 16px;
    font-weight: 700;
    margin: 20px 25px 0 25px;
  }
  div {
    margin: 20px 5px;
    display: flex;
  }
  button {
    width: 85px;
    height: 37px;
    border-radius: 5px;
    border: none;
    margin: 5px;
    color: #ffffd4;
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
  }
  button:nth-child(1) {
    background-color: #ff3030;
  }
  button:nth-child(2) {
    background-color: #ff922e;
  }
  button:nth-child(3) {
    background-color: #2fbe34;
  }
`;
