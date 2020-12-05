import * as React from 'react';
import { Flex, Input, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { PlusIcon } from '@/components/icons';
import { useDisclosure } from '@chakra-ui/react';
import { CloseIcon, DoneIcon } from '@/components/icons';

const MotionFlex = motion.custom(Flex);

// TODO own component for FeatureId
// TODO use same wrapper component for new features and features (same padding etc.)

const NewFeature = () => {
  const { isOpen: fullWidth, onToggle } = useDisclosure(false);

  return (
    <MotionFlex
      animate={{ width: fullWidth ? '100%' : '43px' }}
      initial={{ width: '43px' }}
      cursor="pointer"
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
          <Flex alignItems="center" pl="4" py="2" height="100%">
            <Text fontSize="xs" color="text.gray.600" mr="2">
              Feature Id
            </Text>
            <Flex borderRadius="md" background="white" h="100%" px="4" alignItems="center">
              <Text fontSize="sm">{'65f57140-6bd9-4b67-ac65-0a9e30851742'}</Text>
            </Flex>
            <Flex
              borderRadius="md"
              background="white"
              ml="4"
              px="4"
              h="100%"
              alignItems="center"
              stroke="#6C7277"
              _hover={{ stroke: 'error.500' }}
              onClick={onToggle}
            >
              <CloseIcon stroke="inherit" />
            </Flex>
            <Flex
              borderRadius="md"
              background="white"
              ml="4"
              px="4"
              h="100%"
              alignItems="center"
              stroke="#6C7277"
              _hover={{ stroke: 'success.500' }}
              onClick={onToggle}
            >
              <DoneIcon stroke="inherit" />
            </Flex>
          </Flex>
        </MotionFlex>
      ) : (
        <Flex onClick={onToggle} alignItems="center" justifyContent="center" flex="1">
          <PlusIcon />
        </Flex>
      )}
    </MotionFlex>
  );
};

export default NewFeature;
