import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { ShowPost } from '../components/showPost/ShowPost';

export interface PostProps {
  postID: string
  isLogged: boolean;
}

export const Post: FC<PostProps> = (props) => {
  return (
    <div>
      <ShowPost isLogged={props.isLogged} idPost={props.postID}/>
    </div>
  );
};
