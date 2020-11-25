import * as React from 'react';
import { motion } from 'framer-motion';
import { Flex, Text, IconButton } from '@chakra-ui/react';
import { ErrorIcon, SuccessIcon, CloseIcon } from '@/components/icons';

const MotionFlex = motion.custom(Flex);

export const Toast = ({ toast, closeToast }) => {
  return (
    <MotionFlex
      w="320px"
      p={4}
      borderRadius="md"
      shadow="lg"
      alignItems="center"
      justifyContent="space-between"
      bg="white"
      position="fixed"
      top="50px"
      right="24px"
      zIndex={2}
      initial={{ x: 70, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Flex>
        {toast.variant === 'error' ? <ErrorIcon /> : <SuccessIcon />}
        <Text fontSize="sm" fontWeight="medium" ml={4}>
          {toast.title}
        </Text>
      </Flex>
      <IconButton
        maxH="5"
        minW="5"
        aria-label="Close toast"
        colorScheme="none"
        onClick={() => closeToast(toast.id)}
        icon={<CloseIcon />}
      />
    </MotionFlex>
  );
};
