import React from "react";
import styled from "styled-components/macro";

import { ButtonText } from "../styles/TextStyles";

export default function Button() {
  return (
    <ButtonWrapper>
      <Title>Iniciar Jogo</Title>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  background: #1f6f8b;
  border: 3px solid #99a8b2;
  box-sizing: border-box;
  border-radius: 10px;
`;

const Title = styled(ButtonText)`
  text-align: center;
  color: #e6d5b8;
`;
