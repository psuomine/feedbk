import * as React from 'react';
import { chakra, Flex, Text } from '@chakra-ui/react';
import { useDetectOutsideClick } from '@/utils/useDetectOutsideClick';
import { ChevronDownIcon } from '@/components/icons';

const Select = ({ value, onChange, placeholder }) => {
  const dropdownRef = React.useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef);

  const handleOnClick = () => setIsActive((state) => !state);

  return (
    <div>
      <Flex
        border="1px"
        borderColor={`${isActive ? 'border.focus' : 'border.default'}`}
        h="40px"
        w="100%"
        borderRadius="md"
        alignItems="center"
        px="4"
        justifyContent="space-between"
        onClick={handleOnClick}
        cursor="pointer"
        _hover={{
          borderColor: 'border.focus'
        }}
      >
        {value ? <Text>Value</Text> : <Text>{placeholder}</Text>}
        <ChevronDownIcon />
      </Flex>
      {isActive && (
        <chakra.ul ref={dropdownRef} listStyleType="none">
          <chakra.li bg="green.200">Yolo1</chakra.li>
          <li>Yolo2</li>
          <li>Yolo3</li>
        </chakra.ul>
      )}
    </div>
  );
};

export default Select;
