import * as React from 'react';
import { SecondaryButton, PrimaryButton } from '@/components/buttons';
import {
  Modal as ChakraModal,
  ModalOverlay as ChakraModalOverlay,
  ModalContent as ChakraModalContent,
  ModalHeader as ChakraModalHeader,
  ModalFooter as ChakraModalFooter,
  ModalBody as ChakraModalBody,
  ModalCloseButton as ChakraModalCloseButton,
  Text,
  Box
} from '@chakra-ui/react';

// Helper function to call all functions
const callAll = (...fns) => (...args) => fns.forEach((fn) => fn && fn(...args));

const ModalContext = React.createContext();

function Modal(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />;
}

function ModalCloseButton({ children: child }) {
  const [, setIsOpen] = React.useContext(ModalContext);
  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(false), child.props.onClose, child.props.onClick)
  });
}

function ModalOpenButton({ children: child }) {
  const [, setIsOpen] = React.useContext(ModalContext);
  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(true), child.props.onClick)
  });
}

function ModalContentBase(props) {
  const [isOpen, setIsOpen] = React.useContext(ModalContext);

  return <ChakraModal isOpen={isOpen} onClose={() => setIsOpen(false)} motionPreset="slideInBottom" {...props} />;
}

function ModalBody({ children }) {
  return (
    <ChakraModalBody my={2} px={[4, 6]}>
      {children}
    </ChakraModalBody>
  );
}

function ModalFooter({ children }) {
  return (
    <ChakraModalFooter
      backgroundColor="bg.gray.100"
      p={[4, 6]}
      borderBottomLeftRadius="md"
      borderBottomRightRadius="md"
    >
      {children}
    </ChakraModalFooter>
  );
}

function ModalFooterButtons({ text, isDisabled, ...props }) {
  return (
    <>
      <ModalCloseButton>
        <SecondaryButton mr={[4, 6]}>Cancel</SecondaryButton>
      </ModalCloseButton>
      <PrimaryButton disabled={isDisabled} {...props}>
        {text}
      </PrimaryButton>
    </>
  );
}

function ModalContent({ title, subtitle, children, ...props }) {
  return (
    <ModalContentBase>
      <ChakraModalOverlay />
      <ChakraModalContent maxW="xl" mx={4} {...props}>
        <Box px={[4, 6]}>
          <ChakraModalHeader pb={1} fontSize="lg" px={0}>
            {title}
          </ChakraModalHeader>
          <Text fontSize="sm" lineHeight="short" color="text.gray.600">
            {subtitle}
          </Text>
        </Box>
        <ModalCloseButton>
          <ChakraModalCloseButton tabIndex="-1" top={[4, 6]} right={[4, 6]} />
        </ModalCloseButton>
        {children}
      </ChakraModalContent>
    </ModalContentBase>
  );
}

const useModal = () => {
  const context = React.useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
};

export { Modal, ModalOpenButton, ModalContent, ModalBody, ModalFooter, ModalFooterButtons, useModal };
