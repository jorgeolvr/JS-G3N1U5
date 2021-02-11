import React from "react";
import styled from "styled-components/macro";

import Button from "../components/button/index";

import { Link } from "react-router-dom";

export default function InitialPage() {
  return (
    <Container>
      <RankingWrapper>
        <Text>Ranking</Text>
      </RankingWrapper>
      <LogoWrapper>
        <Text>Logo</Text>
      </LogoWrapper>
      <ButtonWrapper>
        <Link to="/play" style={{ textDecoration: "none" }}>
          <Button />
        </Link>
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
  //background: blue;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  //background: yellow;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  flex: 1;
  //background: red;
  justify-content: center;
`;

const Text = styled.h1``;
