import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import '../../css/fonts.css';

import { Profile, ProfileProps } from '../Profile';

export default {
  title: 'Profile',
  component: Profile
} as Meta;

const generatePost = (number: number): any[] =>{
  const post = [];
  for (let index = 0; index < number; index++) {
    post.push({
      likes: 3,
      comments: 15,
      title: 'Macarrones',
      photo: 'https://api.snapfork.me/static/mediaUtils/login/background.png'
    });
  }
  return post;
};

const Template: Story<ProfileProps> = (args) => <Profile {...args}/>;

export const Primary = Template.bind({});
  Primary.args = {
    profileInfo: {
      username: 'Pancho Mendoza',
      posts: 114,
      followers: 36703,
      following: 6324,
      description: 'Desde siempre me ha gustado cocinar, mi abuela y mi madre cocinaban muy bien. Aprendí de ellas un montón de recetas que con el tiempo se han mantenido en mi familia...',
      post: generatePost(10)
    }
  };
