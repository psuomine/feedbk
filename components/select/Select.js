import * as React from 'react';
import { chakra, Flex, Text } from '@chakra-ui/react';
import { useDetectOutsideClick } from '@/utils/useDetectOutsideClick';
import { ChevronDownIcon } from '@/components/icons';

const Select = ({ value, onChange, placeholder, children }) => {
  const dropdownRef = React.useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef);
  const selectedLabel = React.useRef();

  const handleOnClick = () => setIsActive((state) => !state);

  const onClick = (label) => (event) => {
    selectedLabel.current = label;
    setIsActive(false);
    onChange(event);
  };

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
        {value ? <Text>{selectedLabel.current}</Text> : <Text>{placeholder}</Text>}
        <ChevronDownIcon />
      </Flex>
      {isActive && (
        <chakra.ul
          ref={dropdownRef}
          listStyleType="none"
          border="1px"
          borderRadius="md"
          borderColor="border.default"
          mt="1"
          boxShadow="base"
        >
          {React.Children.map(children, (child) => {
            const isSelected = value == child.props.value;
            return React.cloneElement(child, { onClick: onClick(child.props.title), isSelected });
          })}
        </chakra.ul>
      )}
    </div>
  );
};

export default Select;
