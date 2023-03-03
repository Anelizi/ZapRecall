import styled from "styled-components"
import { GrRotateRight } from "react-icons/gr";


export default function PerguntaAberta(){
    return(
        <Containe>
            <Style>
                <h3>O que é JSX?</h3>
                <Icon/>
            </Style>
        </Containe>
    )
}
const Containe = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Recursive', sans-serif;
`
const Style = styled.div`
    position: relative;
    width: 300px;
    height: 131px;
    background-color: #FFFFD4;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    color: #333333;
    h3{
        font-size: 16px;
        font-weight: 700;
        margin: 20px 25px 0 25px;
    }
`
const Icon = styled(GrRotateRight)`
    position: absolute;
    width: 25px;
    height: 25px;
    bottom: 0;
    right: 0;
    margin: 0 10px 10px 0;
    cursor: pointer;
`