import * as React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import Feature from '@/features/feature/Feature';
import FeatureId from '@/features/feature/FeatureId';

const FeatureListItem = ({ featureName, featureId }) => {
  return (
    <Flex overflow="hidden" flex={1}>
      <Feature as="li">
        <Text>{featureName}</Text>
        <FeatureId id={featureId} />
      </Feature>
    </Flex>
  );
};

export default FeatureListItem;
