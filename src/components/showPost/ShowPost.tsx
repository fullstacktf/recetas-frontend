import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import { ShowImage } from './ShowImage';
import TimeImage from './assets/schedule-24px.svg';
import PeopleImage from './assets/people-24px.svg';
import Image from './assets/patatas-con-alioli-y-picada-de-ajo-y-perejil-escalivada-picante-foto-principal.jpg';
import { CollapseInput } from '../postMaker/CollapseInput';
import { ShowMultiple } from './ShowMultiple';
import { ShowWithIcon } from './ShowWithIcon';

const WIDTH = 862;
const HEIGHT = 384;

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

const Title = styled.div`
  width: ${WIDTH}px;
  height: auto;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Description = styled.div`
  width: ${WIDTH * 0.9}px;
  max-width: ${WIDTH * 0.9}px;
  min-width: ${WIDTH * 0.9}px;
  min-height: ${WIDTH * 0.4}px;
  text-align: justify;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  resize: none;
  margin-top: 5%;
`;

export interface ShowPostProps {}

export const ShowPost: FC<ShowPostProps> = (props) => {
  const [image, setImage] = useState<string>(
    'https://api.snapfork.me/static/mediaUtils/login/background.png'
  );
  const [title, setTitle] = useState('Carbonara con nata');
  const [
    description,
    setDescription
  ] = useState(`Estos espaguetis a la carbonara con nata parten de la tradicional receta italiana de espaguetis a la carbonara, pero añadiéndole nata y cebolla pochada.
  Se trata de una versión muy popular fuera de las fronteras italianas, que le aporta un extra de cremosidad, y aunque no se trate de la auténtica receta,
  lo cierto es que queda deliciosa, ya que uno de los mejores aliados de la pasta sin duda es la nata.`);
  const [time, setTime] = useState<string>('1h');
  const [servings, setServings] = useState<string>('2');
  const [ingredients, setIngredients] = useState<string[]>([
    `Estos espaguetis a la carbonara con nata parten de la tradicional receta italiana de espaguetis a la carbonara, pero añadiéndole nata y cebolla pochada.
  Se trata de una versión muy popular fuera de las fronteras italianas, que le aporta un extra de cremosidad, y aunque no se trate de la auténtica receta,
  lo cierto es que queda deliciosa, ya que uno de los mejores aliados de la pasta sin duda es la nata.`,
    'otro ingrediente',
    'ultimoIngrediente'
  ]);
  const [steps, setSteps] = useState<string[]>([
    'hacer eso',
    'hacer esto',
    'por ultimo esto'
  ]);
  const [tags, setTags] = useState<string[]>(['cosa', 'cosa2']);

  return (
    <Container>
      {/* Poner header con nomber */}
      <SubContainer>
        <ShowImage image={Image} maxWidth={WIDTH} maxHeight={HEIGHT}/>
      </SubContainer>
      {/* Poner iconos like etc */}
      <SubContainer>
        <Title>{title}</Title>
      </SubContainer>
      <SubContainer>
        <Line/>
      </SubContainer>
      <SubContainer>
        <InfoContainer>
          <ShowWithIcon image={TimeImage} info={time}/>
          <ShowWithIcon image={PeopleImage} info={servings}/>
        </InfoContainer>
      </SubContainer>
      <SubContainer>
        <Line/>
      </SubContainer>
      <SubContainer aria-label="collapse-div">
        <CollapseInput title="DESCRIPCIÓN" width={WIDTH}>
          <Description>{description}</Description>
        </CollapseInput>
      </SubContainer>
      <SubContainer aria-label="collapse-div">
        <CollapseInput title="INGREDIENTES" width={WIDTH}>
          <ShowMultiple
            numeric={false}
            infoToShow={ingredients}
            maxWidth={WIDTH}
            maxHeight={HEIGHT}
          />
        </CollapseInput>
      </SubContainer>
      <SubContainer aria-label="collapse-div">
        <CollapseInput title="PASOS" width={WIDTH}>
          <ShowMultiple
            numeric={true}
            infoToShow={steps}
            maxWidth={WIDTH}
            maxHeight={HEIGHT}
          />
        </CollapseInput>
      </SubContainer>
      <SubContainer aria-label="collapse-div">
        <CollapseInput title="ETIQUETAS" width={WIDTH}>
          <ShowMultiple
            numeric={false}
            infoToShow={tags}
            maxWidth={WIDTH}
            maxHeight={HEIGHT}
          />
        </CollapseInput>
      </SubContainer>
    </Container>
  );
};
