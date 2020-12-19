const API = 'https://api.snapfork.me/';
const API_TEST = 'https://localhost:3000/';

export interface FormPost {
  title: string;
  time: string;
  servings: string;
  description: string;
  ingredients: string[];
  steps: string[];
  tags: string[];
}

export const savePost = async (body: FormPost, image: File, endpoint: string) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  };
  const data = await fetch(API_TEST + endpoint, requestOptions)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => console.log(error));
  if (data) {
    uploadImage(image);
  }
};

export const uploadImage = async (image: File) => {
  const fd = new FormData();
  fd.append('image', image);
  fetch(API_TEST + 'post/upload-image', {
      method: 'POST',
      body: fd
  })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
};
