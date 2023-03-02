import styled from "styled-components"
import FlashCards from "./components/FlashCards"

export default function App(){
    return(
        <Containe> 
            <FlashCards/>
        </Containe>
    )
}
const Containe = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`