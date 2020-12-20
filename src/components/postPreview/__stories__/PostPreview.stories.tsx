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
  idPost: '5fddfe4b4d3bf16ad342b71d'
};
