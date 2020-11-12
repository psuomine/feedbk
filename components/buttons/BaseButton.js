import { Button } from '@chakra-ui/core';

const BaseButton = ({ children, onClick, ...rest }) => {
  return (
    <Button onClick={onClick} fontWeight="normal" size="sm" px="4" h="36px" {...rest}>
      {children}
    </Button>
  );
};

export default BaseButton;
