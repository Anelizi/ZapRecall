import styled from "styled-components";
import { BsCaretRight, BsFillCheckCircleFill, BsFillQuestionCircleFill, BsFillXCircleFill, } from "react-icons/bs";


export default function PerguntaFechada({mudarCard, numero}) {

  return (
    <Containe>
      <Style>
        <>
          <h3>Pergunta {numero}</h3>
        </>
        <button onClick={() => mudarCard("card2")}>
          <Icon/>
        </button>
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
  width: 300px;
  height: 65px;
  background-color: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333333;
  button{
    border: none;
    background-color: #ffffff;
    margin-right: 15px;
  }
  h3 {
    font-size: 16px;
    text-align: center;
    font-weight: 700;
    margin-left: 15px;
  }
`;

const Icon = styled(BsCaretRight)`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
