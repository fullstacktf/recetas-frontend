export class ValidatorResult {
  result: boolean;
  message: string;
  constructor() {
    this.result = false;
    this.message = 'El campo no puede estar vacío';
  }
}

export const isValidEmail = (value: string): ValidatorResult => {
  let result = new ValidatorResult();
  result.message = 'Email inválido';
  const rexep = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  result.result = rexep.test(String(value).toLowerCase());
  return result;
};

export const isValidPassword = (value: string): ValidatorResult => {
  let result = new ValidatorResult();
  result.message = 'Debe contener al menos 8 caracteres';
  result.result = value.length >= 8;
  return result;
};

export const isValidDefault = (value: string): ValidatorResult => {
  let result = new ValidatorResult();
  result.result = value.length !== 0;
  return result;
};

export const getValidationFunctionByInputType = (type: String) => {
  switch (type) {
    case 'email':
      return isValidEmail;
    case 'password':
      return isValidPassword;
    default:
      return isValidDefault;
  }
};
