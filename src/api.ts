import { user } from './user';

export const API = 'https://api.snapfork.me/';
export interface FormPost {
  title: string;
  time: string;
  servings: string;
  description: string;
  ingredients: string[];
  steps: string[];
  tags: string[];
}

interface RequestOptions {
  method: string;
  headers?: {};
  body?: any;
}

export const sendToBackend = async (
  endpoint: string,
  requestOptions: RequestOptions
) => {
  const authorization = { 'Authorization': `Bearer ${localStorage.getItem('token')}`};
  Object.assign(requestOptions.headers, authorization);

  return fetch(API + endpoint, requestOptions)
  .then((response) => {
    if (response.ok){
      return response.json();
    }
    throw new Error(`${response.status} ${response.json()}`);
  })
  .catch((error) =>{
    throw error;
  });
};

export const uploadFormData = async (
  body: FormPost,
  image: File,
  endpoint: string
) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  const data = await sendToBackend(endpoint, requestOptions)
    .then((data) => data.data)
    .catch((error) => console.log(error));
  if (data) {
    uploadImage(image, user._id, data._id);
  }
};

export const uploadImage = async (
  image: File,
  userID: string,
  postID: string
) => {
  const body = new FormData();
  body.append('image', image);
  body.append('userID', userID);
  body.append('postID', postID);
  const requestOptions = {
    method: 'POST',
    body: body,
    headers: { 'Content-Type': 'multipart/form-data' }
  };
  await sendToBackend('post/upload-image', requestOptions)
    .then((data) => data.data)
    .catch((error) => console.log(error));
};

export const getPostData = async (endpoint: string) => {
  const requestOptions = {
    method: 'GET'
  };
  const data = await sendToBackend(endpoint, requestOptions)
    .then((data) => data.data)
    .catch((error) => console.log(error));
  return data;
};

export const updateLike = async (
  endpoint: string,
  method: string,
  body = { userID: '5fddfe4b4d3bf162d342b71d' }
) => {
  const requestOptions = {
    method: method,
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
  body = { userID: '5fddfe4b4d3bf162d342b71d' }
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
