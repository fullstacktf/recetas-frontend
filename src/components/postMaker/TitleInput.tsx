import React, { FC, useState } from 'react';
import styled from '@emotion/styled';

const Input = styled.input`
  width: 862px;
  height: 113px;
  outline: none;
  border-radius: 20px;
  border: 1px solid rgba(189, 189, 189, 0.1);
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 2em;
  line-height: 72px;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgb(150, 150, 150);
  box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.1);
`;

export interface TitleInputProps {
  setTitle: (title: string) => void;
}

export const TitleInput: FC<TitleInputProps> = (props) => {
  const [value, setValue] = useState('');

  const handleChangeValue = (event: any) => {
    setValue(event.currentTarget.value);
    props.setTitle(event.currentTarget.value);
  };

  return (
    <div>
      <Input
        type="text"
        value={value}
        placeholder="Título de la receta..."
        aria-label="title-input"
        onChange={handleChangeValue}
      />
    </div>
  );
};
