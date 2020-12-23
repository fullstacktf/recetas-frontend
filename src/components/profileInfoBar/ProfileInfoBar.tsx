import styled from '@emotion/styled';
import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { follow, getUserData, sendToBackend, unfollow, User } from '../../api';
import { Button } from '../../subcomponents/Button';
import { Statistic } from '../../subcomponents/Statistic';
import { generateKey } from '../../utils/generateKey';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  padding-bottom: 40px;

  font-family: Poppins;
  font-size: 1em;
  color: black;
`;

const Column1 = styled.div`
  width: 25%;
  height: 100%;

  font-size: 1.5em;
  font-weight: bolder;
  text-align: center;
  margin: 0px;
  padding: 0px;
  margin: auto;
`;

const Column2 = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const StatisticContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  //justify-content: space-between;
`;

const StatisticSubContainer = styled.div`
  width: 33%;
  margin: auto;
`;

const DescriptionContainer = styled.div`
  text-align: justify;
  text-justify: inter-word;
`;

const Column3 = styled.div`
  width: 25%;
  margin: auto;
`;

const ButtonContainer = styled.div`
  width: 40%;
  max-width: 300px;
  min-width: 40px;
  margin: auto;
`;

export interface ProfileInfoBarProps{
  profileInfo: any;
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
}

export const ProfileInfoBar: FC<ProfileInfoBarProps> = (props) => {
  const history = useHistory();
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMe, setIsMe] = useState(getUserData()._id === props.profileInfo._id);
  const [followers, setFollowers] = useState(props.profileInfo.followers);

  useEffect(() => {

    if (props.isLogged && !isMe){
      let endpoint = `user/${getUserData()._id}/isFollowing/${props.profileInfo._id}`;

      let RequestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      };

      sendToBackend(endpoint, RequestOptions)
        .then((response) => {
          setIsFollowing(response.data);
          setIsLoading(false);
        });
    }
    setIsLoading(false);
  }, [isMe, props.isLogged, props.profileInfo._id]);

  const handleFollow = (event: any) => {
    if (props.isLogged) {
      if(isFollowing){
        unfollow(props.profileInfo._id);
        setFollowers(followers - 1);
      }else{
        follow(props.profileInfo._id);
        setFollowers(followers + 1);
      }
    }
  };

  const handleLogout = (event: any) => {
    if(props.isLogged){
      localStorage.clear();
      props.setIsLogged(false);
      history.push('/');
    }
  };

  return <div>
          {isLoading
            ? <p>CARGANDO...</p>
            : <Container>
                <Column1>{props.profileInfo.username || 'Unknown'}</Column1>
                <Column2>
                  <StatisticContainer>
                    <StatisticSubContainer><Statistic number={props.profileInfo.publications}><span>publicaciones</span></Statistic></StatisticSubContainer>
                    <StatisticSubContainer><Statistic number={followers}><span>seguidores</span></Statistic></StatisticSubContainer>
                    <StatisticSubContainer><Statistic number={props.profileInfo.following}><span>seguidos</span></Statistic></StatisticSubContainer>
                  </StatisticContainer>
                  <DescriptionContainer> {props.profileInfo.description} </DescriptionContainer>
                </Column2>
                <Column3>
                  <ButtonContainer>
                    {isMe
                      ? <Button rounded onClick={handleLogout}>Cerrar Sesión</Button>
                      : <Button disabled={!props.isLogged} secondary={isFollowing} onClick={handleFollow}>{isFollowing ? 'Dejar de seguir' : 'Seguir'}</Button>
                    }
                  </ButtonContainer>
                </Column3>
              </Container>
          }
        </div>;
};
