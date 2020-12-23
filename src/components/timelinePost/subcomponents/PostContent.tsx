import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Icon } from '../../../subcomponents/Icon/Icon';
import Servings from '../assets/people-24px.svg';
import Clock from '../assets/query_builder-24px.svg';
import { TimelinePostProps } from '../TimelinePost';
import { generateKey } from '../../../utils/generateKey';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 4%;
  padding-right: 4%;

  font-family: Poppins;
  font-size: 1em;
  color: black;
`;

const Left = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Right = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 25px;
`;

const Image = styled.img`
  border-radius: 25px;
  width: 200px;
  height: 2000x;
`;

const Title = styled.h1`
  text-align: left;
  font-size: 1.2em;
  font-weight: bolder;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const InfoText = styled.p`
  width: fit-content;
  height: fit-content;
  margin-left: 25px;
`;

const Ingredient = styled.p`
  width: fit-content;
  height: fit-content;
  text-align: left;
  margin: 0px;
  margin-top: 5px;
`;


export const PostContent: FC<TimelinePostProps> = (props) => {
  console.log('INGREDIENTES: ',props.post.ingredients);
  return <Container>
          <Left>
            <Link role="button" to={`/post/${props.post._id}`}>
              <Image src={`https://api.snapfork.me/static/users/${props.post.owner._id}/posts/${props.post._id}/${props.post._id}.jpg`}/>
            </Link>
            <InfoContainer><Icon src={Clock}/><InfoText>{props.post.time}</InfoText></InfoContainer>
            <InfoContainer><Icon src={Servings}/><InfoText>{props.post.servings + ' raciones'}</InfoText></InfoContainer>
          </Left>
          <Right>
            <Title>{props.post.name}</Title>
            <span>{props.post.description}</span>
            <Title>Ingredientes</Title>
            {
              props.post.ingredients?.map(ingredient => (<Ingredient key={generateKey('ing')}>{ingredient}</Ingredient>))
            }
          </Right>
        </Container>;
};
