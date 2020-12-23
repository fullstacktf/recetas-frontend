import { getUserData } from './api';

export interface UserModel {
  username: string;
  name: string;
  last: string;
  email: string;
  description: string;
  publications: number;
  followers: number;
  following: number;
  saved: string[];
  _id: string;
}

export const isPostSave = (idPost: string): boolean => {
  const user = getUserData();
  if (!user || !user.saved) {
    return false;
  }
  return user.saved.includes(idPost);
};
