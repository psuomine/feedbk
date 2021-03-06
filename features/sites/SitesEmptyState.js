import * as React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Button } from '@/components/buttons';
import Image from 'next/image';

const SitesEmptyState = () => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Image src="/sites-empty-illustration.svg" alt="Sites emtpy state illustration" height={230} width={200} />
      <Text align="center" mt="4" fontWeight="medium" fontSize="2xl">
        Start by creating a site
      </Text>
      <Text align="center" maxW="420px" mt="2" color="text.gray.600">
        Creating a site and features makes working with feedback easier. With sites it makes easier to keep context in
        mind.
      </Text>
      <Button onClick={() => {}}>Add new site</Button>
    </Flex>
  );
};

export default SitesEmptyState;
