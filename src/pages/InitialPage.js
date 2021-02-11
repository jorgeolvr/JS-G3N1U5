import React from "react";
import styled from "styled-components/macro";

import { Link } from "react-router-dom";

import Button from "../components/button/index";

import LogoImage from "../assets/logo.svg";
import RankingImage from "../assets/ranking.svg";

export default function InitialPage() {
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
      <ButtonWrapper>
        <Navigator to="/play">
          <Button />
        </Navigator>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 90vh;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
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

const ButtonWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: flex-end;
  justify-content: center;
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
