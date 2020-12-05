import * as React from 'react';
import { VStack } from '@chakra-ui/react';
import FeatureListItem from '@/features/feature/FeatureListItem';
import NewFeature from '@/features/feature/NewFeature';

const FeatureList = ({ features }) => {
  return (
    <VStack as="ul" spacing="4" mt="4" alignItems="stretch">
      {features.map((feature) => (
        <FeatureListItem key={feature.id} featureName={feature.name} featureId={feature.id} />
      ))}
      <NewFeature />
    </VStack>
  );
};

export default FeatureList;
