import React, { FC, useState } from 'react';
import styled from '@emotion/styled';

const PADDING = 0.9;

const Input = styled.input<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width * PADDING}px;
  max-width: ${(props) => props.width * PADDING}px;
  min-width: ${(props) => props.width * PADDING}px;
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

const SubContainer = styled.div`
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
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

const NumberList = styled.span<any>`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
  text-align: center;
`;

export interface DynamicInputsProps {
  width: number;
  index: string;
  remove: (event: any) => void;
  addValue: (value: string, key: string) => void;
  inputKey: string;
  placeholder: string;
}

export const DynamicInputs: FC<DynamicInputsProps> = (props) => {
  const [value, setValue] = useState('');

  const handleChangeValue = (event: any) => {
    event.preventDefault();
    setValue(event.currentTarget.value);
    props.addValue(event.currentTarget.value, props.inputKey);
  };

  const capitalize = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLocaleLowerCase();
  };

  const handleRemoveInput = (event: any) => {
    event.preventDefault();
    props.remove(props.inputKey);
  };

  return (
    <SubContainer>
      <NumberList>{props.index}</NumberList>
      <Input
        value={value}
        placeholder={capitalize(props.placeholder) + '...'}
        aria-label="description-input"
        onChange={handleChangeValue}
        width={props.width}
      />
      <RemoveButton onClick={handleRemoveInput} id={props.inputKey}> X </RemoveButton>
    </SubContainer>
  );
};
