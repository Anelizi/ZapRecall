import styled from "styled-components"
import { BsCaretRight } from "react-icons/bs";

export default function PerguntaFechada(){
    return(
        <Containe>
            <Style>
                <h3>Pergunta 1</h3>
                <Icon/>
            </Style>
        </Containe>
    )
}
const Containe = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    font-family: 'Recursive', sans-serif;
`
const Style = styled.div`
    width: 300px;
    height: 65px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #333333;
    h3{
        font-size: 16px;
        text-align: center;
        font-weight: 700;
        margin-left: 15px;
    }
`

const Icon = styled(BsCaretRight)`
    width: 25px;
    height: 25px;
    margin-right: 15px;
`
