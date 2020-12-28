import * as React from 'react';
import { Divider, Flex, Text, VStack } from '@chakra-ui/react';
import SitesLayout from '@/features/sites/SitesLayout';
import { FeatureIcon } from '@/components/icons';
import { Skeleton } from '@/components/skeleton';

const SitesSkeleton = ({ createSite }) => {
  return (
    <SitesLayout createSite={createSite}>
      <Flex mt="6" flexDirection="column">
        <Skeleton height="26px" width="200px" />
        <Skeleton height="15px" width="350px" mt="2" />
        <Flex p={[4, 6]} direction="column">
          <Flex alignItems="center">
            <FeatureIcon w="20px" h="20px" />
            <Text ml="2" fontWeight="medium" as="h6">
              Features
            </Text>
          </Flex>
          <VStack spacing="4" mt="4" alignItems="stretch">
            <Skeleton height="43px" width="100%" />
            <Skeleton height="43px" width="100%" mt="4" />
            <Skeleton h="43px" w="43px" />
          </VStack>
        </Flex>
      </Flex>
      <Divider />
    </SitesLayout>
  );
};

export default SitesSkeleton;
