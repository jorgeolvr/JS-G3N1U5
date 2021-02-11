import React from "react";
import styled from "styled-components/macro";

import { Link } from "react-router-dom";

import BackImage from "../assets/back.svg";

export default function RankingPage() {
  return (
    <Container>
      <Header>
        <BackWrapper>
          <Navigator to="/">
            <Back src={BackImage} />
          </Navigator>
        </BackWrapper>
        <TitleWrapper>
          <Title>Ranking</Title>
        </TitleWrapper>
        <SafeArea />
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

const Back = styled.img`
  display: flex;
  flex: 1;
`;

const BackWrapper = styled.div`
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

const SafeArea = styled.div`
  display: flex;
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
