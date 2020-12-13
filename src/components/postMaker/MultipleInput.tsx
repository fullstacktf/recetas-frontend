import React, { FC, useState } from 'react';
import styled from '@emotion/styled';

const Input = styled.input<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width * 0.9}px;
  max-width: ${(props) => props.width * 0.9}px;
  min-width: ${(props) => props.width * 0.9}px;
  height: auto;
  outline: none;
  border: 0px;
  border-radius: 0px 0px 25px 25px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #bdbdbd;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SubContainer = styled.div`
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const Button = styled.button<any>`
  margin: 5%;
  width: 244px;
  height: 64px;
  background: #ffffff;
  border: 1px solid rgba(189, 189, 189, 0.4);
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
  text-align: center;
  outline: none;
`;

const RemoveButton = styled.button<any>`
  background: #ffffff;
  border: 0px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
  text-align: center;
  outline: none;
`;

export interface MultipleInputProps {
  width: number;
}

export const MultipleInput: FC<MultipleInputProps> = (props) => {
  const [value, setValue] = useState('');

  const handleChangeValue = (event: any) => {
    setValue(event.currentTarget.value);
  };

  return (
    <Container>
      <SubContainer>
        <Input
          value={value}
          placeholder="Descripción..."
          aria-label="description-input"
          onChange={handleChangeValue}
          width={props.width}
        />
        <RemoveButton> X </RemoveButton>
      </SubContainer>
      <Button> + INGREDIENTE </Button>
    </Container>
  );
};
