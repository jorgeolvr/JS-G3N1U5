import React, { useContext } from "react";
import { Context } from "../context";

import axios from "axios";
import styled from "styled-components/macro";

import { Link } from "react-router-dom";

import Button from "../components/sendButton/index";
import Input from "../components/input/index";
import CloseImage from "../assets/close.svg";

export default function EndPage() {
  const { globalScore, userName, setUserName } = useContext(Context);

  function handleSendRanking() {
    axios
      .post("https://us-central1-prova-front-letras.cloudfunctions.net/save", {
        name: userName,
        score: globalScore,
      })
      .then(function (response) {
        alert("Seu ranking foi salvo com sucesso!", response);
      });
  }

  return (
    <Container>
      <CloseWrapper>
        <Navigator to="/">
          <Close src={CloseImage} />
        </Navigator>
      </CloseWrapper>
      <TitleWrapper>
        <Title>Fim do Jogo</Title>
      </TitleWrapper>
      <ScoreWrapper>
        <Text>score</Text>
        <Score>{globalScore}</Score>
      </ScoreWrapper>
      <FooterWrapper>
        <SafeArea />
        <Column>
          <Input
            placeholder="Digite seu nome"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <ButtonWrapper>
            <Button title="Salvar Ranking" onClick={handleSendRanking} />
          </ButtonWrapper>
        </Column>
        <SafeArea />
      </FooterWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 93vh;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 1000px) {
    height: 95vh;
  }
`;

const Title = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  color: #e6d5b8;
`;

const CloseWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-end;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Close = styled.img`
  display: flex;
  flex: 1;
`;

const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  color: #e6d5b8;
`;

const Score = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  line-height: 96px;
  color: #e6d5b8;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 2;
  width: 100%;
  align-items: flex-end;
  justify-content: center;
`;

const SafeArea = styled.div`
  flex: 0;

  @media (min-width: 1000px) {
    flex: 2;
  }
`;

const ButtonWrapper = styled.div`
  flex: 1;

  &:hover {
    cursor: pointer;
  }
`;

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Navigator = styled(Link)`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
