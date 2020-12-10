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
  console.log('Me ejecuto EMAIL');
  return result;
};

export const isValidPassword = (value: string): ValidatorResult => {
  let result = new ValidatorResult();
  console.log('Me ejecuto PASSWORD');
  return result;
};

export const isValidDefault = (value: string): ValidatorResult => {
  let result = new ValidatorResult();
  console.log('Me ejecuto DEFAULT');
  return result;
};
