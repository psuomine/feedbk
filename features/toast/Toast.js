import * as React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { useToast } from '@/features/toast/ToastContext';
import { ErrorIcon } from '@/components/icons/ErrorIcon';
import { motion } from 'framer-motion';

const MotionFlex = motion.custom(Flex);

export const Toast = () => {
  const { removeToast } = useToast();

  return (
    <MotionFlex
      w="320px"
      p={4}
      borderRadius="md"
      shadow="lg"
      alignItems="center"
      bg="white"
      position="fixed"
      top="50px"
      right="24px"
      zIndex={2}
      initial={{ x: 70, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <ErrorIcon />
      <Text fontSize="sm" fontWeight="medium" ml={4}>
        Error while adding a site
      </Text>
    </MotionFlex>
  );
};
