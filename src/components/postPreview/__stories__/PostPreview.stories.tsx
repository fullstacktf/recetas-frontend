import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { PostPreview, PostPreviewProps } from '../PostPreview';
import '../../../css/fonts.css';

export default {
  title: 'PostPreview',
  component: PostPreview
} as Meta;

const Template: Story<PostPreviewProps> = (args) => <PostPreview {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  post: {
    comments: 0,
    creation: '2020-12-22T01:35:22.338Z',
    description: 'qweqw',
    ingredients: ['wqeqw'],
    likes: 0,
    name: 'asdasd',
    owner: {
            _id: '5fe14d7f29435b6b0bd243cb',
            username: 'PanchoMen'
          },
    servings: 12,
    steps: ['qweqw'],
    tags: ['qwe'],
    time: '12 min',
    _id: '5fe14d7f29435b5a35d243cc'
  }
};
