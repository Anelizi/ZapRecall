import styled from "styled-components";
import PerguntaFechada from "./PerguntaFechada";
import PerguntaAberta from "./PerguntaAberta";
import Resposta from "./Resposta";
import { useState } from "react";

export default function FlashCards({ numero, question, answer }) {
  const [cardAtual, setCardAtual] = useState("card1")

  function mudarCard(card) {
    setCardAtual(card)
  }

  return(
    <Containe>
      {cardAtual === "card1" &&(<PerguntaFechada mudarCard={mudarCard} numero={numero}/>)}
      {cardAtual === "card2" &&(<PerguntaAberta mudarCard={mudarCard} question={question}/>)}
      {cardAtual === "card3" &&(<Resposta mudarCard={mudarCard} answer={answer}/>)}
    </Containe>
  )

}
const Containe = styled.div`
  margin-bottom: 20px;
`;
