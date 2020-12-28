import * as React from 'react';
import { Skeleton as ChakraSkeleton } from '@chakra-ui/react';

const Skeleton = ({ height, width, ...props }) => {
  return (
    <ChakraSkeleton
      height={height}
      width={width}
      borderRadius="md"
      startColor="bg.gray.100"
      endColor="bg.gray.200"
      {...props}
    />
  );
};

export default Skeleton;
