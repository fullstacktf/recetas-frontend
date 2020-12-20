import styled from '@emotion/styled';
import { FC } from 'react';
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
  post: any[];
}

export const PostGrid: FC<PostGridProps> = (props) => {
  return <Container>
          {props.post.map(post => {
            return (<PostPreview idPost="5fddfe4b4d3bf16ad342b71d"></PostPreview>);
          })}
        </Container>;
};
