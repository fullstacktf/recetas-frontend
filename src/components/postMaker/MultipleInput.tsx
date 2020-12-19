import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import { DynamicInputs } from './DynamicInputs';
import { generateKey } from '../../utils/generateKey';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.button`
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

export interface MultipleInputProps {
  width: number;
  elementName: string;
  numeric: boolean;
  setValues: (values: string[]) => void;
}

export const MultipleInput: FC<MultipleInputProps> = (props) => {
  const [inputs, setInputs] = useState<any[]>([]);
  const [values, setValues] = useState<any>({});

  const appendInput = () => {
    let newInput = generateKey('input');
    setInputs(inputs.concat([newInput]));
  };

  const handleRemoveInput = (inputKey: string) => {
    setInputs(inputs.filter((input) => input !== inputKey));
    delete values[inputKey];
    props.setValues(getValuesAsArray());
  };

  const numeric = (props: MultipleInputProps, index: number): string => {
    return props.numeric ? index + 1 + '.' : '';
  };

  const getValuesAsArray = () => {
    const result = [];
    for (const key in values) {
      result.push(values[key]);
    }
    return result;
  };

  const addValue = (value: string, key: string) => {
    const result = Object.assign(values, {
      [key]: value
    });
    setValues(result);
    props.setValues(getValuesAsArray());
  };

  return (
    <Container>
      {inputs.map((input: any, index: number) => (
        <DynamicInputs
          key={input}
          addValue={addValue}
          index={numeric(props, index)}
          placeholder={props.elementName}
          inputKey={input}
          width={props.width}
          remove={handleRemoveInput}
        />
      ))}
      <Button onClick={appendInput}>
        + {props.elementName.toLocaleUpperCase()}
      </Button>
    </Container>
  );
};
