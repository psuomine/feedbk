import * as React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const FeatureId = ({ id, children }) => {
  return (
    <Flex alignItems="center" pl="4" py="2" height="100%">
      <Text fontSize="xs" color="text.gray.600" mr="2">
        Feature Id
      </Text>
      <Flex borderRadius="md" background="white" h="100%" px="4" alignItems="center">
        <Text fontSize="sm">{id}</Text>
      </Flex>
      {children}
    </Flex>
  );
};

export default FeatureId;
