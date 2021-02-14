import React, { useEffect, useContext } from "react";
import styled from "styled-components/macro";

import { Context } from "../context";
import { Link } from "react-router-dom";

import Button from "../components/beginButton/index";

import LogoImage from "../assets/logo.svg";
import RankingImage from "../assets/ranking.svg";

export default function InitialPage() {
  const { setGlobalScore, setUserName } = useContext(Context);

  useEffect(() => {
    setGlobalScore(0);
    setUserName("");
  });

  return (
    <Container>
      <RankingWrapper>
        <Navigator to="/ranking">
          <Ranking src={RankingImage} />
        </Navigator>
      </RankingWrapper>
      <LogoWrapper>
        <Logo src={LogoImage} />
      </LogoWrapper>
      <FooterWrapper>
        <SafeArea />
        <ButtonWrapper>
          <Navigator to="/play">
            <Button title="Iniciar Jogo" />
          </Navigator>
        </ButtonWrapper>
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

const RankingWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-end;
`;

const Logo = styled.img`
  display: flex;
`;

const Ranking = styled.img`
  display: flex;
  flex: 1;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
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
