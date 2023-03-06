import styled from "styled-components";

export default function Footer({ cardsRespondido, numeroCards }) {
  return (
    <Containe>
      <p data-test="footer">
        {cardsRespondido}/{numeroCards} concluídos
      </p>
    </Containe>
  );
}
const Containe = styled.div`
  position: fixed;
  bottom: 0;
  width: 380px;
  height: 70px;
  background-color: #fff;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.09);
  p {
    text-transform: uppercase;
    font-family: "Recursive", sans-serif;
    font-size: 18px;
    font-weight: 400;
    text-decoration: uppercase;
  }
`;
