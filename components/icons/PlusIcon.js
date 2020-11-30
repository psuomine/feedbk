import * as React from 'react';
import { Icon } from '@chakra-ui/icons';

const PlusIcon = (props) => {
  return (
    <Icon fill="none" h="16px" w="16px" viewBox="0 0 16 16" {...props}>
      <path
        d="M7.92283 1.33334V8.07843M7.92283 8.07843V14.8235M7.92283 8.07843H14.6679M7.92283 8.07843H1.17773"
        stroke="#5750ED"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default PlusIcon;
