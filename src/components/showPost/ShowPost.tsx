import React, { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ShowImage } from './ShowImage';
import TimeImage from './assets/schedule-24px.svg';
import PeopleImage from './assets/people-24px.svg';
import { CollapseInput } from './ShowCollapse';
import { ShowMultiple } from './ShowMultiple';
import { ShowWithIcon } from './ShowWithIcon';
import { API, getPostData } from '../../api';
import { PostHeader } from '../timelinePost/subcomponents/PostHeader';
import { PostFooter } from '../timelinePost/subcomponents/PostFooter';

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

const HeaderContainer = styled.div`
  width: ${WIDTH}px;
`;

const FooterContainer = styled.div`
  width: ${WIDTH}px;
`;

export interface ShowPostProps {
  idPost: string;
}

export const ShowPost: FC<ShowPostProps> = (props) => {
  const [image, setImage] = useState<string>('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState<string>('');
  const [servings, setServings] = useState<string>('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [steps, setSteps] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [isDataReady, setIsDataReady] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(0);
  const [comments, setComments] = useState<number>(0);
  const [owner, setOwner] = useState<string>('');

  const setData = async (post: any) => {
    post.then((data: any) => {
      console.log(data);
      setImage(
       `${API}static/users/${data.owner._id}/${data._id}/${data._id}`
      );
      setOwner(data.owner.username);
      setDescription(data.description);
      setTitle(data.title);
      setTime(data.time);
      setServings(data.servings);
      setIngredients(data.ingredients);
      setSteps(data.steps);
      setTags(data.tags);
      setLikes(data.likes);
      setComments(data.comments);
      setIsDataReady(true);
    });
  };

  useEffect(() => {
    setData(getPostData('post/' + props.idPost));
    return () => {};
  }, [props]);

  return (
    <Container>
      <HeaderContainer>
        <PostHeader
          phofilePhoto={'https://api.snapfork.me/static/profile/default.svg'}
          username={owner}
        />
      </HeaderContainer>
      <SubContainer>
        <ShowImage image={image} maxWidth={WIDTH} maxHeight={HEIGHT}/>
      </SubContainer>
      <FooterContainer>
        <PostFooter size={'35px'} likes={likes} comments={comments}/>
      </FooterContainer>
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
          {isDataReady && (
            <ShowMultiple
              numeric={false}
              infoToShow={ingredients}
              maxWidth={WIDTH}
              maxHeight={HEIGHT}
            />
          )}
        </CollapseInput>
      </SubContainer>
      <SubContainer aria-label="collapse-div">
        <CollapseInput title="PASOS" width={WIDTH}>
          {isDataReady && (
            <ShowMultiple
              numeric={true}
              infoToShow={steps}
              maxWidth={WIDTH}
              maxHeight={HEIGHT}
            />
          )}
        </CollapseInput>
      </SubContainer>
      <SubContainer aria-label="collapse-div">
        <CollapseInput title="ETIQUETAS" width={WIDTH}>
          {isDataReady && (
            <ShowMultiple
              numeric={false}
              infoToShow={tags}
              maxWidth={WIDTH}
              maxHeight={HEIGHT}
            />
          )}
        </CollapseInput>
      </SubContainer>
    </Container>
  );
};
