import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { DynamicInputs, DynamicInputsProps } from '../DynamicInputs';
import '../../../css/fonts.css';

export default {
  title: 'DynamicInputs',
  component: DynamicInputs
} as Meta;

const Template: Story<DynamicInputsProps> = (args) => <DynamicInputs {...args}/>;

export const NoNumeric = Template.bind({});
NoNumeric.args = {
  width: 862,
  index: '',
  remove: (event: any) => {return;},
  addValue: (value: string, key: string) => {return;},
  inputKey: 'key',
  placeholder: 'Placeholder...'
};

export const Numeric = Template.bind({});
Numeric.args = {
  width: 862,
  index: '1.',
  remove: (event: any) => {return;},
  addValue: (value: string, key: string) => {return;},
  inputKey: 'key',
  placeholder: 'Placeholder...'
};
