import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';

const SelectItem = ({ title, subtitle, value, onClick, isSelected }) => {
  return (
    <Box
      as="li"
      value={value}
      onClick={onClick}
      _first={{ mt: 0, borderTopRadius: 'md' }}
      _last={{ borderBottomRadius: 'md' }}
      borderBottom="1px"
      borderColor="border.default"
      padding="4"
      cursor="pointer"
      transition="background-color 0.15s ease-in-out"
      _hover={{
        backgroundColor: 'bg.gray.100'
      }}
    >
      <Text>{title}</Text>
      {subtitle && (
        <Text fontSize="sm" color="text.gray.600" lineHeight="12px">
          {subtitle}
        </Text>
      )}
    </Box>
  );
};

export default SelectItem;
