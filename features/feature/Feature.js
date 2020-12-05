import * as React from 'react';
import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionFeature = motion.custom(Flex);

const FeatureItem = ({ children, ...props }) => {
  return (
    <MotionFeature
      px="4"
      background="#F9FAFB"
      borderRadius="md"
      justifyContent="space-between"
      alignItems="center"
      h="43px"
      flex={1}
      animate={{ y: 0 }}
      initial={{ y: -43 }}
      {...props}
    >
      {children}
    </MotionFeature>
  );
};

export default FeatureItem;
