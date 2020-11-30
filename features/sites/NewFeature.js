import * as React from 'react';
import { Flex, Input } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { PlusIcon } from '@/components/icons';

const MotionFlex = motion.custom(Flex);

const NewFeature = () => {
  const [fullWidth, setFullWidth] = React.useState(false);
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
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
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
            h="29px"
            _invalid={{
              borderColor: 'error.500',
              boxShadow: '0 0 0 1px #E38F7D'
            }}
            _focus={{
              borderColor: 'border.focus',
              boxShadow: '0 0 0 1px #87ABD3'
            }}
          />
        </MotionFlex>
      ) : (
        <Flex onClick={() => setFullWidth(!fullWidth)} alignItems="center" justifyContent="center" flex="1">
          <PlusIcon />
        </Flex>
      )}
    </MotionFlex>
  );
};

export default NewFeature;
