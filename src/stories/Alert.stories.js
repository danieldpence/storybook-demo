import React from 'react';

import { Alert } from './Alert';

export default {
  title: 'Storybook Demo/Alert',
  component: Alert,
  argTypes: {
    onDismiss: { action: 'clickity click' },
  },
};

const Template = (args) => (
  <Alert {...args}>Storybook is the greatest, you guize!</Alert>
);

export const Default = Template.bind({});

export const Bordered = Template.bind({});
Bordered.args = {
  backgroundColor: '#FAC3BB',
  bordered: true,
};

export const Rounded = Template.bind({});
Rounded.args = {
  backgroundColor: '#FAC3BB',
  bordered: true,
  rounded: true,
};

export const Dismissable = (args) => (
  <Alert {...args}>
    <p>
      <b>Whoa!</b> What did you do!?!?
    </p>
  </Alert>
);
Dismissable.args = {
  backgroundColor: '#FAC3BB',
  bordered: true,
  rounded: true,
  dismissable: true,
};
