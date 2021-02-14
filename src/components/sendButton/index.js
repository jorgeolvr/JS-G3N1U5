import React from "react";
import styled from "styled-components/macro";

import { ButtonText } from "../styles/TextStyles";

export default function SendButton(props) {
  const { title, onClick } = props;
  return (
    <ButtonWrapper>
      <Button
        onClick={() => {
          onClick();
        }}
      >
        {title}
      </Button>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  background: #1f6f8b;
  border: 3px solid #99a8b2;
  box-sizing: border-box;
  border-radius: 10px;
`;

const Button = styled(ButtonText)`
  text-align: center;
  color: #e6d5b8;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
`;
