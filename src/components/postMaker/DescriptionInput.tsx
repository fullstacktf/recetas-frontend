import React, { FC, useState } from 'react';
import styled from '@emotion/styled';

const Input = styled.textarea<any>`
  width: ${(props) => props.width * 0.9}px;
  max-width: ${(props) => props.width * 0.9}px;
  min-width: ${(props) => props.width * 0.9}px;
  height: ${(props) => props.width * 0.4}px;
  outline: none;
  border: 0px;
  border-radius: 0px 0px 25px 25px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #bdbdbd;
  resize: none;
  margin-top: 5%;
`;

export interface DescriptionInputProps {
  width: number;
}

export const DescriptionInput: FC<DescriptionInputProps> = (props) => {
  const [value, setValue] = useState('');

  const handleChangeValue = (event: any) => {
    setValue(event.currentTarget.value);
  };

  return (
    <div>
      <Input
        value={value}
        placeholder="Descripción..."
        aria-label="description-input"
        onChange={handleChangeValue}
        width={props.width}
      />
    </div>
  );
};
