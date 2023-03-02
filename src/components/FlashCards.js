import styled from "styled-components";
import imagem from "../assets/logo.png";
import PerguntaFechada from "./PerguntaFechada"

export default function FlashCards(){
    return(
        <Containe>
            <Logo>
                <img src={imagem}/>
                <h1>ZapRecall</h1>
            </Logo>
            <PerguntaFechada/>
        </Containe>
    )
}

const Containe = styled.div`
    height: 100%;
    width: 380px;
    background-color: #FB6B6B;
`

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
    img{
        width: 52px;
        height: 60px;
        margin-right: 20px;
    }
    h1{
        font-weight: 400;
        font-size: 36px;
        color: #fff;
        text-align: center;
        font-family: 'Righteous', cursive;
    }
`