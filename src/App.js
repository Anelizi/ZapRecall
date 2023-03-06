import { useState } from "react";
import styled from "styled-components";
import BoasVindas from "./components/BoasVindas";
import Card from "./components/Card";

export default function App() {
  const [inicio, setInicio] = useState(true)
  return (
    <Containe>
      {inicio ? <BoasVindas setInicio={setInicio}/> : <Card />}
    </Containe>
  );
}
const Containe = styled.div`
  width: 95vw;
  height: 100vh auto;
  display: flex;
  justify-content: center;
`;
