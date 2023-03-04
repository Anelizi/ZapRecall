import styled from "styled-components";
import imagem from "../assets/logo.png";
import FlashCards from "./FlashCards"
import cards from "../cards"

export default function Card(){

    return(
        <Containe>
            <Logo>
                <img src={imagem} />
                <h1>ZapRecall</h1>
            </Logo>
            {cards.map((c) => (<FlashCards numero={cards.indexOf(c)+1} key={c.question}/>))}
        </Containe>
    )
}

const Containe = styled.div`
  width: 380px;
  height: 130vh;
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