import styled from '@emotion/styled';
import React, { FC, useState } from 'react';
import { ImageInput } from './ImageInput';
import { InputWithIcon } from './InputWithIcon';
import { TitleInput } from './TitleInput';
import TimeImage from './assets/query_builder-24px.svg';
import PeopleImage from './assets/people-24px.svg';
import { CollapseInput } from './CollapseInput';
import { DescriptionInput } from './DescriptionInput';
import { MultipleInput } from './MultipleInput';
import { getUserData, Post, uploadFormData } from '../../api';
import { Button } from '../../subcomponents/Button';
import { useHistory } from 'react-router';

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
  const [image, setImage] = useState<File>();
  const [name, setName] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [servings, setServings] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [steps, setSteps] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const history = useHistory();

  const isImageReady = () => {
    return image ? true : false;
  };

  const checkServings = (
    servings: string
  ): { isValid: boolean; msg: string } => {
    if (!isNaN(+servings)) {
      const number: number = +servings;
      if (number < 100) {
        return { isValid: true, msg: '' };
      } else {
        return { isValid: false, msg: 'Máximo de 99 raciones' };
      }
    }
    return { isValid: false, msg: 'Solo se aceptan números' };
  };

  const isServingsReady = () => {
    return image ? true : false;
  };

  const isDataReady = () => {
    return (
      isImageReady() &&
      isServingsReady() &&
      name &&
      time &&
      description &&
      ingredients.length &&
      steps.length &&
      tags.length
    );
  };

  const sendPost = async (body: Partial<Post>, image: File) => {
    return uploadFormData(body, image, 'post/');
  };

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    if (!image) {
      return;
    }
    if (isDataReady()) {
      const user = getUserData();
      sendPost(
        {
          name,
          time,
          servings: Number(servings),
          description,
          ingredients,
          steps,
          tags,
          owner: {
            _id: user._id,
            username: user.username
          }
        },
        image
      )
      .then((response) => {
        console.log(response);
        if(response.data && response.image){
          history.push(`/post/${response.data._id}`);
        }
        // TODO implementar errores
        console.log('Error al crear la receta');
      })
      .catch((error) => { console.log(error); });
    }
  };

  return (
    <Container>
      <SubContainer>
        <ImageInput setImage={setImage}/>
      </SubContainer>
      <SubContainer>
        <TitleInput setTitle={setName}/>
      </SubContainer>
      <SubContainer>
        <Line/>
      </SubContainer>
      <SubContainer>
        <InfoContainer>
          <InputWithIcon
            setValue={setTime}
            image={TimeImage}
            placeHolder="Tiempo de preparación..."
            checkInput={(value: string) => { return {isValid: true, msg: ''};}}
          />
          <InputWithIcon
            setValue={setServings}
            image={PeopleImage}
            placeHolder="Raciones..."
            checkInput={checkServings}
          />
        </InfoContainer>
      </SubContainer>
      <SubContainer>
        <Line/>
      </SubContainer>
      <SubContainer aria-label="collapse-div">
        <CollapseInput title="DESCRIPCIÓN" width={WIDTH}>
          <DescriptionInput setDescription={setDescription} width={WIDTH}/>
        </CollapseInput>
      </SubContainer>
      <SubContainer aria-label="collapse-div">
        <CollapseInput title="INGREDIENTES" width={WIDTH}>
          <MultipleInput
            setValues={setIngredients}
            numeric={true}
            width={WIDTH}
            elementName="ingrediente"
          />
        </CollapseInput>
      </SubContainer>
      <SubContainer aria-label="collapse-div">
        <CollapseInput title="PASOS" width={WIDTH}>
          <MultipleInput
            setValues={setSteps}
            numeric={true}
            width={WIDTH}
            elementName="paso"
          />
        </CollapseInput>
      </SubContainer>
      <SubContainer aria-label="collapse-div">
        <CollapseInput title="ETIQUETAS" width={WIDTH}>
          <MultipleInput
            setValues={setTags}
            numeric={false}
            width={WIDTH}
            elementName="etiqueta"
          />
        </CollapseInput>
      </SubContainer>
      <SubContainer>
        <InfoContainer>
          <Button rounded onClick={handleSubmit}>Crear</Button>
        </InfoContainer>
      </SubContainer>
    </Container>
  );
};
