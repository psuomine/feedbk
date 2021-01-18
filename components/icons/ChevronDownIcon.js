import * as React from 'react';
import { Icon } from '@chakra-ui/icons';

const ChevronDownIcon = (props) => {
  return (
    <Icon fill="none" h="7px" w="14px" viewBox="0 0 16 9" stroke="icon.stroke" {...props}>
      <path d="M15 1L8 8L1 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  );
};

export default ChevronDownIcon;
