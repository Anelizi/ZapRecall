import styled from "styled-components";
import imagem from "../assets/logo.png";
import FlashCards from "./FlashCards";
import cards from "../cards";
import Footer from "./Footer";
import { useState } from "react";

export default function Card() {
  const [cardsRespondido, setCardsRespondido] = useState(0);

  return (
    <Containe>
      <Logo>
        <img src={imagem} />
        <h1>ZapRecall</h1>
      </Logo>
      {cards.map((c) => (
        <FlashCards
          key={c.question}
          numero={cards.indexOf(c) + 1}
          question={c.question}
          answer={c.answer}
          setCardsRespondido={setCardsRespondido}
          cardsRespondido={cardsRespondido}
        />
      ))}
      <Footer cardsRespondido={cardsRespondido} numeroCards={cards.length} />
    </Containe>
  );
}
const Containe = styled.div`
  width: 380px;
  height: 100vh auto;
  margin-bottom: 70px;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.5);
  background-color: #fb6b6b;
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  img {
    width: 52px;
    height: 60px;
    margin-right: 20px;
  }
  h1 {
    font-weight: 400;
    font-size: 36px;
    color: #fff;
    text-align: center;
    font-family: "Righteous", cursive;
  }
`;
