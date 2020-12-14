import styled from '@emotion/styled';
import { FC } from 'react';
import { ProfileInfoBar } from '../components/profileInfoBar/ProfileInfoBar';
import { PostGrid } from '../subcomponents/PostGrid';

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
  profileInfo: any;
}

export const Profile: FC<ProfileProps> = (props) => {
  return <Container>
            <Row1>
              <ProfileInfoBarContainer>
                <ProfileInfoBar profileInfo={props.profileInfo}/>
              </ProfileInfoBarContainer>
            </Row1>
            <Row2>
              <PostGrid post={props.profileInfo.post}/>
            </Row2>
          </Container>;
};
