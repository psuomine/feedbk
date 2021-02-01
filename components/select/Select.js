import * as React from 'react';
import { chakra, Flex, Text } from '@chakra-ui/react';
import { useDetectOutsideClick } from '@/utils/useDetectOutsideClick';
import { ChevronDownIcon } from '@/components/icons';
import { motion } from 'framer-motion';

const ChakraUl = motion.custom(chakra.ul);
const MotionBox = motion.custom(chakra.ul);

const menuAnimate = {
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25
    },
    display: 'block'
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: {
      duration: 0.3,
      delay: 0.1
    },
    transitionEnd: {
      display: 'none'
    }
  }
};

const Select = ({ value, onChange, placeholder, children }) => {
  const dropdownRef = React.useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef);
  const selectedLabel = React.useRef();

  const handleOnClick = () => setIsActive((state) => !state);

  const onClick = (label, value) => () => {
    selectedLabel.current = label;
    setIsActive(false);
    onChange(value);
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
        <Text>{value ? selectedLabel.current : placeholder}</Text>
        <MotionBox animate={{ rotate: isActive ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDownIcon />
        </MotionBox>
      </Flex>

      <ChakraUl
        ref={dropdownRef}
        listStyleType="none"
        border="1px"
        borderRadius="md"
        borderColor="border.default"
        mt="1"
        boxShadow="base"
        initial="exit"
        animate={isActive ? 'enter' : 'exit'}
        variants={menuAnimate}
      >
        {React.Children.map(children, (child) => {
          const isSelected = value == child.props.value;
          return React.cloneElement(child, { onClick: onClick(child.props.title, child.props.value), isSelected });
        })}
      </ChakraUl>
    </div>
  );
};

export default Select;
