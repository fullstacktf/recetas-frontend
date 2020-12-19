import styled from '@emotion/styled';
import React, { FC } from 'react';
import { PostGrid } from '../subcomponents/PostGrid';

const Container = styled.div`

`;


// TODO DELETE THIS
const generatePost = (number: number): any[] => {
  const post = [];
  for (let index = 0; index < number; index++) {
    post.push({
      likes: 3,
      comments: 15,
      title: 'Macarrones',
      photo: 'https://api.snapfork.me/static/mediaUtils/login/background.png'
    });
  }
  return post;
};

export interface HomeProps {
  isLogged: boolean;
  // post: any[];
}

export const Home: FC<HomeProps> = (props) => {
  return <Container>
            {props.isLogged
              ? <p>TIMELINE</p>
              : <PostGrid post={generatePost(20)}/>
            }
          </Container>;
};
