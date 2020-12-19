import styled from '@emotion/styled';
import React, { FC } from 'react';

const Container = styled.div<any>`
  margin-top: 10px;
  height: auto;
  width: auto;
  max-height: ${(props) => props.maxHeight}px;
  max-width: ${(props) => props.maxWidth}px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

const Img = styled.img<any>`
  height: auto;
  width: auto;
  max-height: ${(props) => props.maxHeight}px;
  max-width: ${(props) => props.maxWidth}px;
  border-radius: 20px;
`;

export interface ShowImageProps {
  image: string;
  maxWidth: number;
  maxHeight: number;
}

export const ShowImage: FC<ShowImageProps> = (props) => {
    return (
      <Container maxWidth={props.maxWidth}>
        <Img src={props.image} alt="" maxWidth={props.maxWidth} maxHeight={props.maxHeight}/>
      </Container>
    );
};
