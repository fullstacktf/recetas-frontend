import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import '../../../css/fonts.css';

import { ProfileInfoBar, ProfileInfoBarProps} from '../ProfileInfoBar';

export default {
  title: 'ProfileInfoBar',
  component: ProfileInfoBar
} as Meta;

const Template: Story<ProfileInfoBarProps> = (args) => <ProfileInfoBar {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  profileInfo: {
    username: 'Pancho Mendoza',
    posts: 114,
    followers: 36703,
    following: 6324,
    description: 'Desde siempre me ha gustado cocinar, mi abuela y mi madre cocinaban muy bien. Aprendí de ellas un montón de recetas que con el tiempo se han mantenido en mi familia...'
  }
};

