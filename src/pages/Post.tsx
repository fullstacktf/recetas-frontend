import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { ShowPost } from '../components/showPost/ShowPost';

export interface PostProps {
  postID: string
}

export const Post: FC<PostProps> = (props) => {
  return (
    <div>
      <ShowPost idPost={props.postID}/>
    </div>
  );
};
