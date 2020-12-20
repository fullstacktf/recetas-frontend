
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

export const user: UserModel = {
  _id: '5fddfe4b4d3bf162d342b71d',
  description: 'Profesional de la cocina',
  publications: 0,
  followers: 0,
  following: 0,
  saved: ['5fddfe4b4d3bf16ad342b71d'],
  username: 'izm20',
  name: 'Imar',
  last: 'Abreu',
  email: 'email@email.mail'
};

export const isPostSave = (idPost: string): boolean => {
  return user.saved.includes(idPost);
};
