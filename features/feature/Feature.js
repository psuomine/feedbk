import * as React from 'react';
import { Flex } from '@chakra-ui/react';

const FeatureItem = ({ children, ...props }) => {
  return (
    <Flex
      px="4"
      background="#F9FAFB"
      borderRadius="md"
      justifyContent="space-between"
      alignItems="center"
      h="43px"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default FeatureItem;
