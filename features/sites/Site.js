import * as React from 'react';
import { Text, Flex, VStack } from '@chakra-ui/react';
import { FeatureIcon } from '@/components/icons';

const Site = ({ name, description, children }) => {
  return (
    <Flex direction="column" as="section" mt="6">
      <Text fontSize="xl" fontWeight="medium" as="h6">
        {name}
      </Text>
      <Text fontSize="sm" lineHeight="short" color="text.gray.600">
        {description}
      </Text>
      <Flex p="6" direction="column">
        <Flex alignItems="center">
          <FeatureIcon w="20px" h="20px" />
          <Text ml="2" fontWeight="medium" as="h6">
            Features
          </Text>
        </Flex>
        <VStack spacing="4" mt="4" alignItems="stretch">
          {children}
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Site;
