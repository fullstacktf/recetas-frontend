import styled from '@emotion/styled';
import React, { FC, useState } from 'react';

const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(189, 189, 189, 0.1);
  border-radius: 10px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #989898;
  outline: none;
  margin: 3%;
`;

const Image = styled.img`
  width: 65px;
  height: 65px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export interface InputWithIconProps {
  image: string;
  placeHolder: string;
  setValue: (value: string) => void;
}

export const InputWithIcon: FC<InputWithIconProps> = (props) => {
  const [value, setValue] = useState('');

  const handleChangeValue = (event: any) => {
    setValue(event.currentTarget.value);
    props.setValue(event.currentTarget.value);
  };

  return (
    <Container>
      <Image src={props.image} alt=""/>
      <Input
        type="text"
        value={value}
        placeholder={props.placeHolder}
        aria-label="input-with-icon"
        onChange={handleChangeValue}
      />
    </Container>
  );
};
