import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import '../../../css/fonts.css';
import { TimelinePost, TimelinePostProps } from '../TimelinePost';


export default {
  title: 'TimelinePost',
  component: TimelinePost
} as Meta;

const Template: Story<TimelinePostProps> = (args) => <TimelinePost {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  post: {
    _id: 'ksjadksjahdkjshakdjhkasjhd',
    ingredients: ['100 gramos tofu firme', '1 cucharada semillas de sésamo', '1 / 2 cucharadita salsa de soja', '1 cucharadita azúcar blanco', '1 caqui mediano', '200 gramos patatas', 'Sal'],
    steps: [],
    likes: 12,
    comments: 3,
    tags: ['#healthy', '#vegan'],
    title: 'Ensalada de Tofu',
    time: '30 min',
    servings: 2,
    description: 'Una ensalada templada diferente y muy rica. Suele hacerse con boniato o una patata dulce, pero cómo no tenía lo he cambiado por patata normal.',
    owner: {
      id: 'jaksdhkasjdhkajshdka',
      username: 'PanchoMen'
    }
  }
};


