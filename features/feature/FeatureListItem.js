import * as React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import Feature from '@/features/feature/Feature';
import FeatureId from '@/features/feature/FeatureId';
import FeatureIconButton from '@/features/feature/FeatureIconButton';
import { ClipboardIcon } from '@/components/icons';

const FeatureListItem = ({ featureName, featureId }) => {
  return (
    <Flex overflow="hidden" flex={1}>
      <Feature as="li">
        <Text>{featureName}</Text>
        <FeatureId id={featureId}>
          <div>
            <FeatureIconButton _hover={{ stroke: 'brand.500' }} onClick={() => {}}>
              <ClipboardIcon height="24px" />
            </FeatureIconButton>
          </div>
        </FeatureId>
      </Feature>
    </Flex>
  );
};

export default FeatureListItem;
