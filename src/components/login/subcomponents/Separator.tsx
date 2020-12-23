import React, { FC} from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Line = styled.div`
  width: 42%;
  height: 0px;
  background-color: #18A0FB;
  border: 1px solid #18A0FB;
`;

const Elipse = styled.div`
  width: 25px;
  height: 25px;

  border-radius: 100%;
  border: 2px solid #18A0FB;
  box-sizing: border-box;
`;

export const Separator: FC = () =>{
  return <Container>
          <Line/>
          <Elipse/>
          <Line/>
        </Container>;
};
