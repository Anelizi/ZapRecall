import styled from "styled-components";
import PerguntaFechada from "./PerguntaFechada";
import PerguntaAberta from "./PerguntaAberta";
import Resposta from "./Resposta";
import { useState } from "react";

export default function FlashCards({ numero, question, answer, cardsRespondido, setCardsRespondido }) {
  const [cardAtual, setCardAtual] = useState("card1");
  const [play, setPlay] = useState(true);
  const [naoLembrei, setNaoLembrei] = useState(false);
  const [quaseLembrei, setQuaseLembrei] = useState(false);
  const [zap, setZap] = useState(false);
  const [riscaPalavra, setRiscaPalavra] = useState(false);

  function mudarCard(card) {
    setCardAtual(card);
  }

  return (
    <Containe>
      {cardAtual === "card1" && (
        <PerguntaFechada
          mudarCard={mudarCard}
          numero={numero}
          play={play}
          naoLembrei={naoLembrei}
          quaseLembrei={quaseLembrei}
          zap={zap}
          riscaPalavra={riscaPalavra}
        />
      )}
      {cardAtual === "card2" && (
        <PerguntaAberta mudarCard={mudarCard} question={question} />
      )}
      {cardAtual === "card3" && (
        <Resposta
          mudarCard={mudarCard}
          answer={answer}
          setPlay={setPlay}
          setNaoLembrei={setNaoLembrei}
          setQuaseLembrei={setQuaseLembrei}
          setZap={setZap}
          setRiscaPalavra={setRiscaPalavra}
          cardsRespondido={cardsRespondido}
          setCardsRespondido={setCardsRespondido}
        />
      )}
    </Containe>
  );
}
const Containe = styled.div`
  margin-bottom: 20px;
`;
