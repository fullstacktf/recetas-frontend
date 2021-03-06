import styled from '@emotion/styled';
import { FC } from 'react';
import { Post } from '../api';
import { PostPreview } from '../components/postPreview/PostPreview';


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column: 400px;
  grid-gap: 2rem;
  padding-top: 50px;
  justify-items: center;
`;

export interface PostGridProps {
  post: Post[];
  isLogged: boolean;
}

export const PostGrid: FC<PostGridProps> = (props) => {
  return <Container>
          {props.post.map(post => {
            return (<PostPreview isLogged={props.isLogged} key={post._id} post={post}></PostPreview>);
          })}
        </Container>;
};
