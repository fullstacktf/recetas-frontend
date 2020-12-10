import React, { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
// import NoLike from './assets/favorite_border-24px.svg';
import Like from './assets/favorite-24px.svg';
import Comment from './assets/comment-24px.svg';
// import NoSave from './assets/bookmark_border-24px.svg';
import Save from './assets/bookmark-24px.svg';

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
  height: 25%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: fill;
  margin-right: 5%;
`;

const IconGroup = styled.div`
  display: flex;
  margin: 5%;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 0px;
  display: flex;
  align-items: center;
  color: #bdbdbd;
`;

interface PostPreviewProps {
  likes: number;
  comments: number;
  title: string;
  photo: string;
}

export const PostPreview: FC<PostPreviewProps> = (props) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [title, setTitle] = useState('');
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    setLikes(props.likes);
    setComments(props.comments);
    setTitle(props.title);
    setPhoto(props.photo);
    return () => {};
  }, [props]);

  return (
    <Container>
      <Image src={photo} alt=""/>
      <TitleBox>
        <TitleText>{title}</TitleText>
      </TitleBox>
      <Icons>
        <IconGroup>
          <Icon src={Like} alt=""/>
          <span>{likes}</span>
        </IconGroup>
        <IconGroup>
          <Icon src={Comment} alt=""/>
          <span>{comments}</span>
        </IconGroup>
        <IconGroup>
          <Icon src={Save} alt=""/>
        </IconGroup>
      </Icons>
    </Container>
  );
};
