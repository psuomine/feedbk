import * as React from 'react';
import { createIcon, Icon } from '@chakra-ui/icons';

export const ErrorIcon = (props) => {
  return (
    <Icon fill="none" h="20px" w="20px" viewBox="0 0 20 20" {...props}>
      <path d="M18.315 13.444a9 9 0 10-16.63-6.888 9 9 0 0016.63 6.888z" fill="white" />
      <path
        d="M10 6v4m0 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke="#D12702"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};
