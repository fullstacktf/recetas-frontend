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

const sendToBackend = async (
  endpoint: string,
  requestOptions: RequestOptions
) => {
  return fetch(API + endpoint, requestOptions).then((response) =>
    response.json()
  );
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
    uploadImage(image);
  }
};

export const uploadImage = async (image: File) => {
  const fd = new FormData();
  fd.append('image', image);
  const requestOptions = {
    method: 'POST',
    body: fd
  };
  await sendToBackend('post/upload-image', requestOptions)
    .then((data) => data.data)
    .catch((error) => console.log(error));
};

export const getPostData = async (
  endpoint: string
) => {
  const requestOptions = {
    method: 'GET'
  };
  const data = await sendToBackend(endpoint, requestOptions)
    .then((data) => data.data)
    .catch((error) => console.log(error));
    return data;
};
