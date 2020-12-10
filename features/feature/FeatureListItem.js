import * as React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import Feature from '@/features/feature/Feature';
import FeatureId from '@/features/feature/FeatureId';
import FeatureIconButton from '@/features/feature/FeatureIconButton';
import { ClipboardIcon, CopiedToClipboardIcon } from '@/components/icons';

const FeatureListItem = ({ featureName, featureId }) => {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  const onCopyClick = () => {
    setCopied(true);
    navigator.clipboard.writeText(featureId);
  };

  return (
    <Flex overflow="hidden" flex={1}>
      <Feature as="li">
        <Text>{featureName}</Text>
        <FeatureId id={featureId}>
          <div>
            <FeatureIconButton
              _hover={{ stroke: 'brand.500' }}
              onClick={onCopyClick}
              width="54px"
              height="24px"
              stroke={copied ? 'brand.500' : '#6C7277'}
            >
              {!copied ? <CopiedToClipboardIcon /> : <ClipboardIcon height="24px" />}
            </FeatureIconButton>
          </div>
        </FeatureId>
      </Feature>
    </Flex>
  );
};

export default FeatureListItem;
