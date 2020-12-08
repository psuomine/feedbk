import * as React from 'react';
import FeatureListItem from '@/features/feature/FeatureListItem';
import { AnimatePresence } from 'framer-motion';

const FeatureList = ({ features }) => {
  return (
    <AnimatePresence initial={false}>
      {features.map((feature) => (
        <FeatureListItem key={feature.id} featureName={feature.name} featureId={feature.id} />
      ))}
    </AnimatePresence>
  );
};

export default FeatureList;
