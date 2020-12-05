import React from 'react';
import { Flex } from '@chakra-ui/react';

const FeatureIcon = ({ children, ...props }) => {
  return (
    <Flex borderRadius="md" background="white" ml="4" px="4" h="100%" alignItems="center" stroke="#6C7277" {...props}>
      {React.cloneElement(children, { stroke: 'inhert' })}
    </Flex>
  );
};

export default FeatureIcon;
