import * as React from 'react';
import { Text } from '@chakra-ui/react';
import Feature from '@/features/feature/Feature';
import FeatureId from '@/features/feature/FeatureId';

const FeatureListItem = ({ featureName, featureId }) => {
  return (
    <Feature as="li">
      <Text>{featureName}</Text>
      <FeatureId id={featureId} />
    </Feature>
  );
};

export default FeatureListItem;
