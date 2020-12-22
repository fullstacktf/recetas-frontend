import styled from '@emotion/styled';
import React, { FC, useEffect, useState } from 'react';
import { getUserData, Post, sendToBackend } from '../api';
import { TimelinePost } from '../components/timelinePost/TimelinePost';
import { PostGrid } from '../subcomponents/PostGrid';

const Container = styled.div`

`;

export interface HomeProps {
  isLogged: boolean;
}

export const Home: FC<HomeProps> = (props) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setiSLoading] = useState(true);

  useEffect( () => {
    let endpoint = '';
    if (props.isLogged) {
      endpoint = `user/${getUserData()._id}/timeline`;
    } else {
      endpoint = 'post/public/popular';
    }

    let RequestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };

    sendToBackend(endpoint, RequestOptions)
    .then((response) => {
      setPosts(response.data);
      setiSLoading(false);
    });
  }, [props.isLogged]);

  console.log(`CALL API(${props.isLogged ? 'timeline' : 'populares'}): `, posts);
  console.log('ESTOY LOGUEAADO: ', props.isLogged);
  return <Container>
            {isLoading
            ? <p>CARGANDO...</p>
            : (props.isLogged
              ? !isLoading && posts.map((post) => { return (<TimelinePost key={post._id} post={post}></TimelinePost>);})
              : !isLoading && <PostGrid post={posts}/>)
            }
          </Container>;
};
