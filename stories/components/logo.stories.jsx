import React from 'react';

import { default as Logo } from '../../ui/components/logo';

export default {
  title: 'Components/Logo',
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: 'https://s3-ap-southeast-2.amazonaws.com/general.ammonite.com.au/edubytes/partner/13/logo.png',
  height: '50px',
};
