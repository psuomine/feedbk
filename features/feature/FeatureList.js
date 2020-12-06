import * as React from 'react';
import { VStack } from '@chakra-ui/react';
import NewFeature from '@/features/feature/NewFeature';
import FeatureListItem from '@/features/feature/FeatureListItem';
import { AnimatePresence } from 'framer-motion';

const FeatureList = ({ features, siteId, addFeature }) => {
  const onFeatureAdd = (feature) => {
    addFeature(siteId, feature);
  };

  return (
    <VStack as="ul" spacing="4" mt="4" alignItems="stretch">
      <AnimatePresence initial={false}>
        {features.map((feature) => (
          <FeatureListItem key={feature.id} featureName={feature.name} featureId={feature.id} />
        ))}
      </AnimatePresence>
      <NewFeature onFeatureAdd={onFeatureAdd} />
    </VStack>
  );
};

export default FeatureList;
