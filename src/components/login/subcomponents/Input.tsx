import { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import {
  ValidatorResult,
  getValidationFunctionByInputType
} from '../utils/validations';

const errorSize = 0.8;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  border: 2px solid #1762a7;
  box-sizing: border-box;
  border-radius: 10px;
  height: 2.5em;
  padding: 5px;

  :focus {
    outline: none;
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${errorSize + 0.2 + 'em'};
  margin: 0px;
  padding: 5px;
  padding-left: 10px;
`;

const ErrorIcon = styled.p`
  font-size: ${errorSize / 2.6 + 'em'};
  margin: 0px;
  margin-right: 5px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: ${errorSize + 'em'};
  margin: 0px;
`;

interface InputProps {
  name: string;
  type: string;
  validatorFunction?: (value: string) => ValidatorResult;
}

export const Input: FC<InputProps> = (props) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  // const [validator, setValidator] = useState(() => (value: string) =>
  //   isValidDefault(value)
  // );

  // useEffect(() => {
  //   let validationFunction: (value: string) => ValidatorResult;

  //   switch (props.type) {
  //     case 'email':
  //       validationFunction = isValidEmail;
  //       break;
  //     case 'password':
  //       validationFunction = isValidPassword;
  //       break;
  //     default:
  //       validationFunction = isValidDefault;
  //       break;
  //   }
  //   setValidator(() => (value: string) => validationFunction(value));
  // }, [props.type, value]);

  const isInputValid = props.validatorFunction || getValidationFunctionByInputType(props.type);

  const handleValueChange = (event: any) => {
    const inputValue = event.currentTarget.value;
    setValue(inputValue);

    const validationResult: ValidatorResult = isInputValid(inputValue);
    // const validationResult: ValidatorResult = validator(inputValue);
    setIsValid(validationResult.result);
    setErrorMessage(validationResult.message);
  };

  return (
    <Container>
      <StyledInput
        name={props.name}
        type={props.type}
        value={value}
        onChange={handleValueChange}
      />
      {!isValid && (
        <ErrorContainer>
          <ErrorIcon>{'❌'}</ErrorIcon>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </ErrorContainer>
      )}
    </Container>
  );
};
