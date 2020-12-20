import React, { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import NoLike from './assets/favorite_border-24px.svg';
import Like from './assets/favorite-24px.svg';
import Comment from './assets/comment-24px.svg';
import NoSave from './assets/bookmark_border-24px.svg';
import Save from './assets/bookmark-24px.svg';
import { Statistic } from '../../subcomponents/Statistic';
import { Icon } from '../../subcomponents/Icon/Icon';

const Container = styled.div`
  width: 200px;
  height: 333px;
  background: #ffffff;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  margin: 1%;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 200px;
  height: 50%;
  object-fit: fill;
  border-radius: 25px 25px 0px 0px;
  align-self: flex-start;
`;

const TitleBox = styled.div`
  height: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.div`
  width: 150px;
  text-align: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
`;

const Icons = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const IconGroup = styled.div`
  width: fit-content;
  margin: auto;
  color: #BDBDBD;
`;

export interface PostPreviewProps {
  likes: number;
  comments: number;
  title: string;
  photo: string;
}

const buttonSize = '25px';
const textSize = '12px';
const spaceBetween = '5px';

export const PostPreview: FC<PostPreviewProps> = (props) => {
  /*const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState('');*/
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  /*useEffect(() => {
    setLikes(props.likes);
    setComments(props.comments);
    setTitle(props.title);
    setPhoto(props.photo);
    return () => {};
  }, [props]);*/

  const handleLikeClick = (event: any) => {
    event.preventDefault();
    if (!liked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    setLiked(!liked);
  };

  const handleSaveClick = (event: any) => {
    event.preventDefault();
    setSaved(!saved);
  };

  return (
    <Container>
      <Image src={props.photo} alt="Recipe Photo" aria-label="Recipe Photo"/>
      <TitleBox>
        <TitleText>{props.title}</TitleText>
      </TitleBox>
      <Icons>
        <IconGroup><Statistic size={textSize} spaceBetween={spaceBetween} icon number={props.likes}><Icon src={NoLike} active_src={Like} onClick={() => console.log('Like')} size={buttonSize}/></Statistic></IconGroup>
        <IconGroup><Statistic size={textSize} spaceBetween={spaceBetween} icon number={props.comments}><Icon src={Comment} onClick={() => console.log('Comentarios')} size={buttonSize}/></Statistic></IconGroup>
        <IconGroup><Icon src={NoSave} active_src={Save} onClick={() => console.log('Guardar')} size={buttonSize}/></IconGroup>
      </Icons>
    </Container>
  );
};
