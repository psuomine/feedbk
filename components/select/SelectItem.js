import * as React from 'react';
import { chakra } from '@chakra-ui/react';

const SelectItem = ({ title, value, onClick, isSelected }) => {
  return (
    <chakra.li value={value} onClick={onClick}>
      {title}
    </chakra.li>
  );
};

export default SelectItem;
