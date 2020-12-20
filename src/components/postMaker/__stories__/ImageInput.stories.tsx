import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { ImageInput, ImageInputProps } from '../ImageInput';
import '../../../css/fonts.css';

export default {
  title: 'ImageInput',
  component: ImageInput
} as Meta;

const Template: Story<ImageInputProps> = (args) => <ImageInput {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  setImage: (image: any) => {return;}
};
