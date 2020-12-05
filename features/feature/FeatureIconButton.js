import React from 'react';
import { Button } from '@chakra-ui/react';

const FeatureIconButton = ({ children, ...props }) => {
  return (
    <Button borderRadius="md" background="white" ml="4" px="4" h="100%" alignItems="center" stroke="#6C7277" {...props}>
      {React.cloneElement(children, { stroke: 'inhert' })}
    </Button>
  );
};

export default FeatureIconButton;
