import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { MultipleInput, MultipleInputProps } from '../MultipleInput';
import '../../../css/fonts.css';

export default {
  title: 'MultipleInput',
  component: MultipleInput
} as Meta;

const Template: Story<MultipleInputProps> = (args) => <MultipleInput {...args}/>;

export const Ingredients = Template.bind({});
Ingredients.args = {
  width: 862,
  elementName: 'ingrediente',
  numeric: false,
  setValues: (values: string[]) => {return;}
};

export const Steps = Template.bind({});
Steps.args = {
  width: 862,
  elementName: 'paso',
  numeric: true,
  setValues: (values: string[]) => {return;}
};

export const Tags = Template.bind({});
Tags.args = {
  width: 862,
  elementName: 'etiqueta',
  numeric: false,
  setValues: (values: string[]) => {return;}
};
