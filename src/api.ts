import { user } from './user';

export const API = 'https://api.snapfork.me/';
//export const API = 'http://localhost:3001/';

export interface Post {
    _id: string,
    ingredients: string[],
    steps: string[],
    likes: number,
    comments: number,
    tags: string[],
    name: string,
    time: string;
    servings: number,
    description: string,
    owner: {
      _id: string,
      username: string,
    },
    creation?: string
}

export interface User {
  _id: string,
  username: string,
  name: string,
  last: string,
  email: string,
  password: string,
  creation?: Date,
  lastLogin?: Date,
  rol: string,
  description: string,
  publications: number,
  followers: number,
  following: number,
  saved: string[],
}

interface RequestOptions {
  method: string;
  headers: {};
  body?: any;
}

export const sendToBackend = async (
  endpoint: string,
  requestOptions: RequestOptions
): Promise<any> => {
  const authorization = { 'Authorization': `Bearer ${getToken()}`};
  Object.assign(requestOptions.headers, authorization);

  console.log('Headers: ', requestOptions);
  try {
    const response = await fetch(API + endpoint, requestOptions);
    if (response.ok) {
      return response.json();
    }
    return await response.json();
    //throw new Error(`${response.status} ${await response.json()}`);
  } catch (error) {
    throw error;
  }
};

export const uploadFormData = async (
  body: Partial<Post>,
  image: File,
  endpoint: string
): Promise<any> => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  const data = await sendToBackend(endpoint, requestOptions);
  let imageUploadResult;
  if (data) {
    imageUploadResult = await uploadImage(image, getUserData()._id, data.data._id);
  }
  return { data: data?.data, image: imageUploadResult?.data};
};

export const uploadImage = async (
  image: File,
  userID: string,
  postID: string
): Promise<any> => {
  try {
  let fd = new FormData();
  fd.append('image', image);
  fd.append('userID', userID);
  fd.append('postID', postID);
  const requestOptions = {
    method: 'POST',
    body: fd,
    headers: { } // 'Content-Type': 'multipart/form-data' }
  };
    const response = await sendToBackend('post/upload-image', requestOptions);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getPostData = async (endpoint: string) => {
  const requestOptions = {
    method: 'GET',
    headers: {}
  };
  const data = await sendToBackend(endpoint, requestOptions)
    .then((data) => data.data)
    .catch((error) => console.log(error));
  return data;
};

export const updateLike = async (
  endpoint: string,
  method: string,
  body: {}
) => {
  const requestOptions = {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  const data = await sendToBackend(endpoint, requestOptions)
    .then((data) => data.data)
    .catch((error) => console.log(error));
  return data;
};

export const updateSave = async (
  endpoint: string,
  method: string,
  body = {}
) => {
  const requestOptions = {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  const data = await sendToBackend(endpoint, requestOptions)
    .then((data) => data.data)
    .catch((error) => console.log(error));
  return data;
};

export const getToken = (): string => {
  return localStorage.getItem('token') || '';
};

export const getUserData = (): User => {
  const userdata = localStorage.getItem('userdata') || '{}';
  const user = JSON.parse(userdata);
  return user;
};

export const checkImageUrl = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch('url', { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    throw error;
  }
};

export const getProfile = async (userID: string): Promise<{user: User, posts: Post[]}> => {
  const user = await getProfileInfo(userID);
  const posts = await getUserPosts(userID);
  return {user , posts};
};

export const getProfileInfo = async (userID: string): Promise<User> => {
  try {
    const requestOptions = {
      method: 'GET',
      headers: {}
    };
    const response = await sendToBackend(`user/${userID}/profile`, requestOptions);
    if (response.ok) {
      return response.json();
    }
    /*throw new Error*/ console.log(`${response.status} ${response}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getUserPosts = async (userID: string): Promise<Post[]> => {
  try {
    const requestOptions = {
      method: 'GET',
      headers: {}
    };
    const response = await sendToBackend(`post/user/${userID}`, requestOptions);
    if (response.ok) {
      return response.json();
    }
    /*throw new Error*/ console.log(`${response.status} ${response}`);
    return [];
  } catch (error) {
    throw error;
  }
};
