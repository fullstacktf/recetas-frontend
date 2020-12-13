import styled from '@emotion/styled';
import React, { FC } from 'react';
import { ImageInput } from './ImageInput';
import { InputWithIcon } from './InputWithIcon';
import { TitleInput } from './TitleInput';
import TimeImage from './assets/query_builder-24px.svg';
import PeopleImage from './assets/people-24px.svg';
import { CollapseInput } from './CollapseInput';
import { DescriptionInput } from './DescriptionInput';
import { MultipleInput } from './MultipleInput';

const WIDTH: number = 862;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InfoContainer = styled.div`
  width: ${WIDTH}px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const SubContainer = styled.div`
  margin: 1%;
`;

const Line = styled.div`
  width: ${WIDTH}px;
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
      <SubContainer>
        <Line/>
      </SubContainer>
      <SubContainer>
        <InfoContainer>
          <InputWithIcon
            image={TimeImage}
            placeHolder="Tiempo de preparación..."
          />
          <InputWithIcon image={PeopleImage} placeHolder="Raciones..."/>
        </InfoContainer>
      </SubContainer>
      <SubContainer>
        <Line/>
      </SubContainer>
      <SubContainer>
        <CollapseInput title="DESCRIPCIÓN" width={WIDTH}>
          <DescriptionInput width={WIDTH}/>
        </CollapseInput>
      </SubContainer>
      <SubContainer>
        <CollapseInput title="INGREDIENTES" width={WIDTH}>
          <MultipleInput width={WIDTH}/>
        </CollapseInput>
      </SubContainer>
      <SubContainer>
        <CollapseInput title="PASOS" width={WIDTH}>
          <DescriptionInput width={WIDTH}/>
        </CollapseInput>
      </SubContainer>
      <SubContainer>
        <CollapseInput title="ETIQUETAS" width={WIDTH}>
          <DescriptionInput width={WIDTH}/>
        </CollapseInput>
      </SubContainer>
    </Container>
  );
};
