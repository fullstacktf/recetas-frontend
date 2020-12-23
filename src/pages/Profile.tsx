import styled from '@emotion/styled';
import { FC, useEffect, useState } from 'react';
import { getProfile } from '../api';
import { ProfileInfoBar } from '../components/profileInfoBar/ProfileInfoBar';
import { PostGrid } from '../subcomponents/PostGrid';
import { Post, User } from './../api';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row1 = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(189, 189, 189, 0.2);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProfileInfoBarContainer = styled.div`
  width: 90%;
  margin: auto;
`;

const Row2 = styled.div`
  width: 80%;
`;

export interface ProfileProps{
  userID: string;
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
}

export const Profile: FC<ProfileProps> = (props) => {
  const [userData, setUserData] = useState<User>();
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log('USER ID', props.userID);
    getProfile(props.userID).then((resp) => {
      console.log('RESPONSE: ', resp);
      setUserData(resp.user);
      setPosts(resp.posts);
      setIsLoading(false);
    });
  }, [props.userID]);

  return <div>
            {isLoading
            ? <p>Cargando...</p>
            : <Container>
                <Row1>
                  <ProfileInfoBarContainer>
                    <ProfileInfoBar isLogged={props.isLogged} setIsLogged={props.setIsLogged} profileInfo={userData}/>
                  </ProfileInfoBarContainer>
                </Row1>
                <Row2>
                  <PostGrid isLogged={props.isLogged} post={posts}/>
                </Row2>
            </Container>
            }
          </div>;
};
