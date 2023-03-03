import styled from "styled-components"

export default function Resposta(){
    return(
        <Containe>
            <Style>
                <h3>JSX é uma sintaxe para escrever HTML dentro do JS</h3>
                <div>
                    <button>Não lembrei</button>
                    <button>Quase não lembrei</button>
                    <button>Zap!</button>
                </div>
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
    flex-direction: column;
    color: #333333;
    h3{
        font-size: 16px;
        font-weight: 700;
        margin: 20px 25px 0 25px;
    }
    div{
        margin:20px 5px;
        display: flex;
    }
    button{
        width: 85px;
        height: 37px;
        border-radius: 5px;
        border: none;
        margin: 5px;
        color: #FFFFD4;
        font-size: 12px;
        font-weight: 400;
        cursor: pointer;
    }
    button:nth-child(1){
        background-color: #FF3030;
    }
    button:nth-child(2){
        background-color: #FF922E;
    }
    button:nth-child(3){
        background-color: #2FBE34;
    }
`