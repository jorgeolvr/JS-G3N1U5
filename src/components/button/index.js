import React from "react";
import styled from "styled-components/macro";

import { ButtonText } from "../styles/TextStyles";

export default function Button() {
  return (
    <Wrapper>
      <Title>Iniciar Jogo</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #1f6f8b;
  border: 3px solid #99a8b2;
  box-sizing: border-box;
  border-radius: 10px;
  width: 320px;
  height: 80px;
`;

const Title = styled(ButtonText)`
  text-align: center;
  color: #e6d5b8;
`;
