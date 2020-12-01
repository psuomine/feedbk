import * as React from 'react';
import { VStack } from '@chakra-ui/react';
import FeatureItem from '@/features/feature/FeatureItem';
import NewFeature from '@/features/feature/NewFeature';

const FeatureList = ({ features }) => {
  return (
    <VStack as="ul" spacing="4" mt="4" alignItems="stretch">
      {features.map((feature) => (
        <FeatureItem key={feature.id} featureName={feature.name} featureId={feature.id} />
      ))}
      <NewFeature />
    </VStack>
  );
};

export default FeatureList;
