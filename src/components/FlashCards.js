import styled from "styled-components";
import PerguntaFechada from "./PerguntaFechada";
import PerguntaAberta from "./PerguntaAberta";
import Resposta from "./Resposta";
import { useState } from "react";

export default function FlashCards({ numero }) {
  const [perguntaFechada, setPerguntaFechada] = useState(true);
  const [perguntaAberta, setPerguntaAberta] = useState(false);
  const [resposta, setResposta] = useState(false);

  return (
    <Containe>
      <PerguntaFechada numero={numero} />
      {/* <PerguntaAberta /> */}
      {/* <Resposta /> */}
    </Containe>
  );
}

const Containe = styled.div`
  margin-bottom: 20px;
`;
