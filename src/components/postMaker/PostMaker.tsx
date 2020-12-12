import styled from '@emotion/styled';
import React, { FC } from 'react';
import { ImageInput } from './ImageInput';
import { TitleInput } from './TitleInput';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SubContainer = styled.div`
  margin: 1%;
`;

const Line = styled.div`
  width: 862px;
  border: 1px solid #bdbdbd;
`;
export const PostMaker: FC = () => {
  return (
    <Container>
      <SubContainer>
        <ImageInput/>
      </SubContainer>
      <SubContainer>
        <TitleInput/>
      </SubContainer>
      <Line/>
    </Container>
  );
};
