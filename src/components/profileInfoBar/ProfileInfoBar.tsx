import styled from '@emotion/styled';
import { FC } from 'react';
import { Button } from '../../subcomponents/Button';
import { Statistic } from '../../subcomponents/Statistic';

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
}

export const ProfileInfoBar: FC<ProfileInfoBarProps> = (props) => {
  return <Container>
    <Column1>{props.profileInfo.username || 'Imar Abreu'}</Column1>
            <Column2>
              <StatisticContainer>
                <StatisticSubContainer><Statistic number={props.profileInfo.posts}><span>publicaciones</span></Statistic></StatisticSubContainer>
                <StatisticSubContainer><Statistic number={props.profileInfo.followers}><span>seguidores</span></Statistic></StatisticSubContainer>
                <StatisticSubContainer><Statistic number={props.profileInfo.following}><span>seguidos</span></Statistic></StatisticSubContainer>
              </StatisticContainer>
              <DescriptionContainer> {props.profileInfo.description} </DescriptionContainer>
            </Column2>
            <Column3>
              <ButtonContainer>
                <Button>Seguir</Button>
              </ButtonContainer>
            </Column3>
          </Container>;
};
