import * as React from 'react';
import { Icon } from '@chakra-ui/icons';

const DoneIcon = (props) => {
  return (
    <Icon
      w="15px"
      h="12px"
      viewBox="0 0 16 12"
      fill="none"
      stroke="icon.stroke"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 7L5 11L15 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  );
};

export default DoneIcon;
