import styled from "styled-components";
import Card from "./components/Card";

export default function App() {
  return (
    <Containe>
      <Card/>
    </Containe>
  );
}
const Containe = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
