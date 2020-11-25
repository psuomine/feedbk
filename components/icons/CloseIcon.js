import * as React from 'react';
import { Icon } from '@chakra-ui/icons';

const CloseIcon = (props) => {
  return (
    <Icon fill="none" h="11px" w="11px" viewBox="0 0 20 20" {...props}>
      <path
        d="M1 1L19 19M1 19L19 1L1 19Z"
        stroke="#6C7277"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default CloseIcon;
