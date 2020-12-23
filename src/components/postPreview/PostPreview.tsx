import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import NoLike from './assets/favorite_border-24px.svg';
import Like from './assets/favorite-24px.svg';
import Comment from './assets/comment-24px.svg';
import NoSave from './assets/bookmark_border-24px.svg';
import Save from './assets/bookmark-24px.svg';
import { Statistic } from '../../subcomponents/Statistic';
import { Icon } from '../../subcomponents/Icon/Icon';
import { isPostSave } from '../../user';
import { Link } from 'react-router-dom';
import { API, getUserData, Post, updateLike, updateSave, updateUserData } from '../../api';

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
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 25px 25px 0px 0px;
  align-self: flex-start;
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 50%;
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
  color: #bdbdbd;
`;

export interface PostPreviewProps {
  post: Post
  isLogged: boolean;
}

const buttonSize = '25px';
const textSize = '12px';
const spaceBetween = '5px';

export const PostPreview: FC<PostPreviewProps> = (props) => {
  const [saved, setSaved] = useState(isPostSave(props.post._id));
  const [likes, setLikes] = useState<number>(props.post.likes);

  const handleClickLikes = (isLiked: boolean) => {
    const endpoint = `post/${props.post._id}/like`;
    const userID = getUserData()._id;
    if (isLiked) {
      setLikes(likes + 1);
      updateLike(endpoint, 'POST', { userID });
    } else {
      setLikes(likes - 1);
      updateLike(endpoint, 'DELETE', { userID });
    }
  };

  const handleClickSave = (isSaved: boolean) => {
    const endpoint = `post/${props.post._id}/save`;
    const userID = getUserData()._id;
    if (isSaved) {
      setSaved(!saved);
      updateSave(endpoint, 'POST', { userID }).then(() => {
        updateUserData().then((data) => {
          localStorage.setItem('userdata', JSON.stringify(data));
        });
      });
    } else {
      setSaved(!saved);
      updateSave(endpoint, 'DELETE', { userID }).then(() => {
        updateUserData().then((data) => {
          localStorage.setItem('userdata', JSON.stringify(data));
        });
      });
    }
  };

  return (
    <Container>
      <ImageContainer>
      <Link role="button" to={`/post/${props.post._id}`}>
      <Image src={`${API}static/users/${props.post.owner._id}/posts/${props.post._id}/${props.post._id}.jpg`} alt="Recipe Photo" aria-label="Recipe Photo"/>
      </Link>
      </ImageContainer>
      <TitleBox>
        <TitleText>{props.post.name}</TitleText>
      </TitleBox>
      <Icons>
        <IconGroup>
          <Statistic
            size={textSize}
            spaceBetween={spaceBetween}
            icon
            number={likes}
          >
            <Icon disabled={!props.isLogged}
              src={NoLike}
              active_src={Like}
              handleClicks={handleClickLikes}
              size={buttonSize}
            />
          </Statistic>
        </IconGroup>
        <IconGroup>
          <Statistic
            size={textSize}
            spaceBetween={spaceBetween}
            icon
            number={props.post.comments}
          >
            <Link role="button" to={`/post/${props.post._id}`}>
                <Icon
                  src={Comment}
                  size={buttonSize}
                />
            </Link>
          </Statistic>
        </IconGroup>
        <IconGroup>
          <Icon
            disabled={!props.isLogged}
            src={NoSave}
            active_src={Save}
            handleClicks={handleClickSave}
            size={buttonSize}
            isActive={saved}
          />
        </IconGroup>
      </Icons>
    </Container>
  );
};
