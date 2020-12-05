import * as React from 'react';
import { Flex, Input } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { PlusIcon } from '@/components/icons';
import { useDisclosure } from '@chakra-ui/react';
import { CloseIcon, DoneIcon } from '@/components/icons';
import FeatureIcon from '@/features/feature/FeatureIcon';
import FeatureId from '@/features/feature/FeatureId';

const MotionFlex = motion.custom(Flex);

// TODO own component for FeatureId
// TODO use same wrapper component for new features and features (same padding etc.)

const NewFeature = () => {
  const { isOpen: fullWidth, onToggle } = useDisclosure(false);

  return (
    <MotionFlex
      animate={{ width: fullWidth ? '100%' : '43px' }}
      initial={{ width: '43px' }}
      h="43px"
      background="#F9FAFB"
      borderRadius="md"
    >
      {fullWidth ? (
        <MotionFlex
          alignItems="center"
          px="4"
          justifyContent="space-between"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          flex={1}
        >
          <Input
            autoFocus={true}
            px="2"
            w="250px"
            borderColor="white"
            placeholder="Feature name"
            required
            fontSize="sm"
            backgroundColor={'white'}
            h="30px"
            _invalid={{
              borderColor: 'error.500',
              boxShadow: '0 0 0 1px #E38F7D'
            }}
            _focus={{
              borderColor: 'border.focus',
              boxShadow: '0 0 0 1px #87ABD3'
            }}
          />
          <FeatureId id={'2bb12a06-5c2f-4ff7-865c-b3a373c42f96'}>
            <FeatureIcon _hover={{ stroke: 'error.500' }} onClick={onToggle}>
              <CloseIcon />
            </FeatureIcon>
            <FeatureIcon _hover={{ stroke: 'success.500' }} onClick={onToggle}>
              <DoneIcon />
            </FeatureIcon>
          </FeatureId>
        </MotionFlex>
      ) : (
        <Flex onClick={onToggle} alignItems="center" cursor="pointer" justifyContent="center" flex="1">
          <PlusIcon />
        </Flex>
      )}
    </MotionFlex>
  );
};

export default NewFeature;
