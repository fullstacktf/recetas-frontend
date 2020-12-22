import React, { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { PostHeader } from './subcomponents/PostHeader';
import { PostFooter } from './subcomponents/PostFooter';
import { PostContent } from './subcomponents/PostContent';
import { API, checkImageUrl, Post } from '../../api';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
`;

const HeaderContainer = styled.div`
  height: 10%;
  width: 100%;
`;

const ContentContainer = styled.div`
  height: 80%;
  width: 100%;
`;

const FooterContainer = styled.div`
  height: 10%;
  width: 100%;
`;

export interface TimelinePostProps {
  post: Post
}

export const TimelinePost: FC<TimelinePostProps> = (props) => {
  const [profile, setProfile] = useState<string>('');

  useEffect(() => {
    checkImageUrl(`${API}static/users/${props.post.owner._id}/${props.post.owner._id}.jpg`)
    .then((isValid) => {
      if (isValid) {
        setProfile(`${API}static/users/${props.post.owner._id}/${props.post.owner._id}.jpg`);
      } else {
        setProfile(`${API}static/users/default.png`);
      }
    });
  });

  return <Container>
            <HeaderContainer>
              <PostHeader phofilePhoto={profile} owner={props.post.owner}/>
            </HeaderContainer>
            <ContentContainer>
              <PostContent post={props.post}/>
            </ContentContainer>
            <FooterContainer><PostFooter likes={props.post.likes} comments={props.post.comments}/></FooterContainer>
          </Container>;
};
