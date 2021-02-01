import * as React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const Selected = () => (
  <Flex
    borderRadius="full"
    height="16px"
    width="16px"
    background="brand.500"
    display="flex"
    alignItems="center"
    justifyContent="center"
    mr="4"
  >
    <Flex borderRadius="full" height="8px" width="8px" background="white"></Flex>
  </Flex>
);

const NotSelected = () => (
  <Flex
    borderRadius="full"
    height="16px"
    width="16px"
    alignItems="center"
    justifyContent="center"
    mr="4"
    border="1px"
    borderColor="border.default"
  />
);

const SelectItem = ({ title, subtitle, value, onClick, isSelected }) => {
  return (
    <Flex
      value={value}
      onClick={onClick}
      _first={{ mt: 0, borderTopRadius: 'md' }}
      _last={{ borderBottomRadius: 'md' }}
      borderBottom="1px"
      borderColor="border.default"
      p="4"
      cursor="pointer"
      transition="background-color 0.15s ease-in-out"
      backgroundColor={isSelected ? 'bg.gray.100' : 'white'}
      direction="column"
      _hover={{
        backgroundColor: 'bg.gray.100'
      }}
    >
      <Flex alignItems="center">
        {isSelected ? <Selected /> : <NotSelected />}
        <Text>{title}</Text>
      </Flex>

      {subtitle && (
        <Text ml="8" fontSize="sm" color="text.gray.600" lineHeight="16px">
          {subtitle}
        </Text>
      )}
    </Flex>
  );
};

export default SelectItem;
