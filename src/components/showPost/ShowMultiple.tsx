import styled from '@emotion/styled';
import React, { FC } from 'react';

const PADDING = 0.85;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Info = styled.li<any>`
  width: ${(props) => props.maxWidth * PADDING}px;
  max-width: ${(props) => props.maxWidth * PADDING}px;
  min-width: ${(props) => props.maxWidth * PADDING}px;
  height: auto;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  text-align: justify;
`;

export interface ShowMultipleProps {
  infoToShow: string[];
  maxWidth: number;
  maxHeight: number;
  numeric: boolean;
}

export const ShowMultiple: FC<ShowMultipleProps> = (props) => {
  const showInfo = () => {
    return props.infoToShow.map((info, index) => (
      <Info
        maxWidth={props.maxWidth}
        maxHeight={props.maxHeight}
        key={index}
      >
        {info}
      </Info>
    ));
  };
  return (
    <Container>
      {props.numeric ? <ol>{showInfo()}</ol> : <ul>{showInfo()}</ul>}
    </Container>
  );
};
