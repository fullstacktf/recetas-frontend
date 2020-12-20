import styled from '@emotion/styled';
import React, { FC } from 'react';

const Info = styled.div`
  width: 220px;
  height: 50px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.5em;
  line-height: 36px;
  text-align: center;
  margin: 3%;
`;

const Image = styled.img`
  width: 65px;
  height: 65px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export interface ShowWithIconProps {
  image: string;
  info: string;
}

export const ShowWithIcon: FC<ShowWithIconProps> = (props) => {
  return (
    <Container>
      <Image src={props.image} alt=""/>
      <Info>{props.info}</Info>
    </Container>
  );
};
