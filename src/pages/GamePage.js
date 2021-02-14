import React, { useState, useEffect, useContext, useRef } from "react";
import { Context } from "../context";
import styled from "styled-components/macro";

export default function GamePage({ history }) {
  var intervalIndex = 0;
  var arrayIndex = 0;

  let timerRef = useRef(null);
  const [number, setNumber] = useState(null);
  const [sequence, setSequence] = useState([Math.floor(Math.random() * 9) + 1]);

  const { globalScore, setGlobalScore } = useContext(Context);

  useEffect(() => {
    timerRef.current = setInterval(showNumbers, 300);

    function showNumbers() {
      setNumber(sequence[intervalIndex]);
      if (intervalIndex === sequence.length) {
        clearInterval(timerRef.current);
      } else {
        intervalIndex++;
      }
    }
  }, [sequence, setSequence, intervalIndex]);

  function verifyClickedNumber(value) {
    if (arrayIndex === sequence.length - 1 && value === sequence[arrayIndex]) {
      setSequence([...sequence, Math.floor(Math.random() * 9) + 1]);
      setGlobalScore(globalScore + 1);
    } else if (value !== sequence[arrayIndex]) {
      history.push("/end");
    } else {
      arrayIndex++;
    }
  }

  return (
    <Container>
      <SafeArea />
      <BoxWrapper>
        <Box>
          <BoxText>{number}</BoxText>
        </Box>
      </BoxWrapper>
      <SafeArea />
      <PadWrapper>
        <PadSafeArea />
        <NumericPad>
          <Button>
            <PadText onClick={() => verifyClickedNumber(1)}>1</PadText>
          </Button>
          <Button>
            <PadText onClick={() => verifyClickedNumber(2)}>2</PadText>
          </Button>
          <Button>
            <PadText onClick={() => verifyClickedNumber(3)}>3</PadText>
          </Button>
          <Button>
            <PadText onClick={() => verifyClickedNumber(4)}>4</PadText>
          </Button>
          <Button>
            <PadText onClick={() => verifyClickedNumber(5)}>5</PadText>
          </Button>
          <Button>
            <PadText onClick={() => verifyClickedNumber(6)}>6</PadText>
          </Button>
          <Button>
            <PadText onClick={() => verifyClickedNumber(7)}>7</PadText>
          </Button>
          <Button>
            <PadText onClick={() => verifyClickedNumber(8)}>8</PadText>
          </Button>
          <Button>
            <PadText onClick={() => verifyClickedNumber(9)}>9</PadText>
          </Button>
        </NumericPad>
        <PadSafeArea />
      </PadWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 80vh;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 1000px) {
    height: 95vh;
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 25vh;
  height: 25vh;
  justify-content: center;
`;

const PadSafeArea = styled.div`
  flex: 0;

  @media (min-width: 1000px) {
    flex: 3;
  }
`;

const Box = styled.div`
  flex: 4;
  border: 3px solid #e6d5b8;
  box-sizing: border-box;
  border-radius: 8px;

  @media (min-width: 1000px) {
    flex: 1;
  }
`;

const NumericPad = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  border-bottom: 3px solid #1f6f8b;
  border-left: 3px solid #1f6f8b;
`;

const Button = styled.div`
  border-top: 3px solid #1f6f8b;
  border-right: 3px solid #1f6f8b;

  &:active {
    background: #1f6f8b;
  }

  &:hover {
    cursor: pointer;
  }
`;

const BoxText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e6d5b8;
  font-size: 100px;
  height: 100%;

  @media (min-width: 1000px) {
    font-size: 150px;
  }
`;

const PadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 4;
  width: 100%;
  justify-content: center;

  @media (min-width: 1000px) {
    flex: 3;
  }
`;

const PadText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #99a8b2;
  font-size: 60px;
  height: 100%;

  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;

  ${Button}:active & {
    color: #e6d5b8;
  }

  @media (min-width: 1000px) {
    font-size: 100px;
  }
`;

const SafeArea = styled.div`
  flex: 1;

  @media (min-width: 1000px) {
    flex: 1;
  }
`;
