import * as React from 'react';
import { Icon } from '@chakra-ui/icons';

const SuccessIcon = (props) => {
  return (
    <Icon fill="none" h="5" w="5" viewBox="0 0 20 20" {...props}>
      <path d="M18.315 13.444a9 9 0 10-16.63-6.888 9 9 0 0016.63 6.888z" fill="#fff" />
      <path
        d="M7 10l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke="#31C48D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default SuccessIcon;
