import * as React from 'react';
import { Text, Flex } from '@chakra-ui/react';

const FeatureItem = ({ featureName, featureId }) => {
  return (
    <Flex
      as="li"
      px="4"
      py="3"
      background="#F9FAFB"
      borderRadius="md"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text>{featureName}</Text>
      <Flex alignItems="center">
        <Text fontSize="xs" color="text.gray.600" mr="2">
          Feature Id
        </Text>
        <Flex borderRadius="md" background="white" px="4" py="1">
          <Text fontSize="sm">{featureId}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FeatureItem;
