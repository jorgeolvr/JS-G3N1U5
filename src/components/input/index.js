import React from "react";
import styled from "styled-components/macro";

import { InputText } from "../styles/TextStyles";

export default function Input(props) {
  const { placeholder, value, onChange } = props;

  return (
    <Content placeholder={placeholder} value={value} onChange={onChange} />
  );
}

const Content = styled(InputText)`
  width: 100%;
  background: none;
  border: 3px solid #1f6f8b;
  box-sizing: border-box;
  border-radius: 10px;
  color: #99a8b2;

  &::placeholder {
    color: #99a8b2;
  }

  &:focus {
    color: #99a8b2;
    outline: none;
  }
`;
