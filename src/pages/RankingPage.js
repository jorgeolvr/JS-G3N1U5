import React from "react";
import styled from "styled-components/macro";

import { Link } from "react-router-dom";
import Back from "../assets/back.svg";

export default function RankingPage() {
  return (
    <Container>
      <Header>
        <LogoWrapper>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Image src={Back} />
          </Link>
        </LogoWrapper>
        <TitleWrapper>
          <Title>Ranking</Title>
        </TitleWrapper>
        <Space />
      </Header>
      <ListWrapper>
        <List>oi</List>
      </ListWrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
`;
const ListWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: purple;
`;

const List = styled.div`
  background: yellow;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 50px;
`;

const Image = styled.img`
  display: flex;
  flex: 1;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  color: #e6d5b8;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 24px;
`;

const Space = styled.div`
  display: flex;
  flex: 1;
`;
