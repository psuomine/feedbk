import * as React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { useToast } from '@/features/toast/ToastContext';
import { ErrorIcon } from '@/components/icons/ErrorIcon';

export const Toast = () => {
  const { removeToast } = useToast();

  return (
    <Flex w="320px" p={4} borderRadius="md" shadow="lg" alignItems="center">
      <ErrorIcon />
      <Text fontSize="sm" fontWeight="medium" ml={4}>
        Error while adding a site
      </Text>
    </Flex>
  );
};
