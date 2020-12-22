import styled from '@emotion/styled';
import React, { FC, useEffect, useState } from 'react';
import { getUserData, Post, sendToBackend } from '../api';
import { PostGrid } from '../subcomponents/PostGrid';

const Container = styled.div`

`;

export const SavedPosts: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setiSLoading] = useState(true);

  useEffect(() => {
    let endpoint = `post/${getUserData()._id}/save`;

    let RequestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };

    sendToBackend(endpoint, RequestOptions)
      .then((response) => {
        console.log('RESPONSE: ', response);
        setPosts(response.data);
        setiSLoading(false);
      });
  }, []);
  return <Container>
            {!isLoading && <PostGrid post={posts}/>}
          </Container>;
};
