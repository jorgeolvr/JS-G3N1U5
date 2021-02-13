import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import axios from "axios";

import { Link } from "react-router-dom";
import BackImage from "../assets/back.svg";

export default function RankingPage() {
  const [rankingList, setRankingList] = useState([]);

  useEffect(() => {
    axios
      .get("https://us-central1-prova-front-letras.cloudfunctions.net/ranking")
      .then((res) => {
        const rankingList = res.data.map(
          (list) => (list = { name: `${list.name}`, score: `${list.score}` })
        );
        setRankingList(rankingList.sort((a, b) => b.score - a.score));
      });
  }, []);

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
        {rankingList.map((list, index) => (
          <ListItem key={index} index={index}>
            <ItemIndex>
              <Index>{index + 1}</Index>
            </ItemIndex>
            <ItemName>
              <Name>{list.name}</Name>
            </ItemName>
            <ItemScore>
              <Score>{list.score}</Score>
            </ItemScore>
          </ListItem>
        ))}
      </ListWrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
`;
const ListWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  //background-color: purple;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  color: ${(props) => (props.index < 3 ? "#99A8B2" : "#1F6F8B")};
`;

const ItemIndex = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const ItemName = styled.div`
  display: flex;
  flex: 6;
  flex-direction: row;
  padding: 0px 25px 0px;

  @media (min-width: 1000px) {
    flex: 25;
  }
`;

const ItemScore = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Index = styled.h2`
  font-weight: 400;
`;
const Name = styled.h2`
  font-weight: 400;
`;
const Score = styled.h2`
  font-weight: 400;
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
