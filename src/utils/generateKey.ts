import { v4 as uuidv4 } from 'uuid';

export const generateKey = (pre: string) => {
  return `${pre}_${uuidv4()}`;
};
