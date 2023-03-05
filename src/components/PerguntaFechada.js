import styled from "styled-components";
import {
  BsCaretRight,
  BsFillCheckCircleFill,
  BsFillQuestionCircleFill,
  BsFillXCircleFill,
} from "react-icons/bs";

export default function PerguntaFechada({
  mudarCard,
  numero,
  play,
  naoLembrei,
  quaseLembrei,
  zap,
  riscaPalavra,
}) {
  return (
    <Containe>
      <Style>
        <H3
          riscaPalavra={riscaPalavra}
          play={play}
          naoLembrei={naoLembrei}
          quaseLembrei={quaseLembrei}
          zap={zap}
        >
          Pergunta {numero}
        </H3>
        <button
          onClick={() => mudarCard("card2")}
          disabled={riscaPalavra ? true : false}
        >
          {play ? <PlayIcon /> : ""}
          {naoLembrei ? <XIcon /> : ""}
          {quaseLembrei ? <QuestionIcon /> : ""}
          {zap ? <CheckIconIcon /> : ""}
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
  button {
    border: none;
    background-color: #ffffff;
    margin-right: 15px;
  }
`;

const PlayIcon = styled(BsCaretRight)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  color: #333333;
`;

const CheckIconIcon = styled(BsFillCheckCircleFill)`
  width: 25px;
  height: 25px;
  color: #2fbe34;
`;
const QuestionIcon = styled(BsFillQuestionCircleFill)`
  width: 25px;
  height: 25px;
  color: #ff922e;
`;
const XIcon = styled(BsFillXCircleFill)`
  width: 25px;
  height: 25px;
  color: #ff3030;
`;
const H3 = styled.h3`
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  margin-left: 15px;
  color: ${(props) =>
    (props.naoLembrei ? "#FF3030" : "") ||
    (props.play ? "#333333" : "") ||
    (props.quaseLembrei ? "#FF922E" : "") ||
    (props.zap ? "#2FBE34" : "")};
  text-decoration: ${(props) => (props.riscaPalavra ? "line-through" : "none")};
`;
