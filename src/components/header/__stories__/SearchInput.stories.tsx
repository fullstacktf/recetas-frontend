import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SearchInput } from '../subcomponents/SearchInput';
import '../../../css/fonts.css';

export default {
  title: 'SearchInput',
  component: SearchInput
} as Meta;

const Template: Story = () => <SearchInput/>;

export const Primary = Template.bind({});
Primary.args = {};
