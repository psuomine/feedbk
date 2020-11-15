import * as React from 'react';
import { PrimaryButton, SecondaryButton } from '@/components/buttons';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Box
} from '@chakra-ui/react';
import { TextInput, TextareaInput } from '@/components/input';

const initialState = { name: '', description: '', isDirty: false, error: '' };

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_VALUE_CHANGE': {
      return { ...state, [action.name]: action.value, isDirty: true };
    }
    case 'SET_NAME_INPUT_ERROR': {
      return { ...state, error: action.error };
    }
    case 'RESET': {
      return { ...initialState };
    }
  }
};

const CreateSiteModal = ({ isOpen, toggleOpen }) => {
  const [{ name, description, isDirty, error }, dispatch] = React.useReducer(reducer, initialState);

  const validateName = () => {
    const error = name.length === 0 && isDirty ? 'Site name is required' : '';
    dispatch({ type: 'SET_NAME_INPUT_ERROR', error });
  };

  const onValueChange = ({ target: { name, value } }) => dispatch({ type: 'INPUT_VALUE_CHANGE', name, value });

  const onClose = () => {
    dispatch({ type: 'RESET' });
    toggleOpen();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent maxW="xl">
        <ModalHeader px={6} pb={1} fontSize="lg">
          New site
        </ModalHeader>
        <Box px={6}>
          <Text fontSize="sm" lineHeight="short" color="text.gray.600">
            Fill out the site information below to get started
          </Text>
        </Box>
        <ModalCloseButton tabIndex="-1" top={6} right={6} onClick={onClose} />
        <ModalBody px={6} my={4}>
          <TextInput
            name="name"
            label="Site name"
            value={name}
            required
            onChange={onValueChange}
            error={error ? error : ''}
            onBlur={validateName}
          />
          <Box mt={4}>
            <TextareaInput name="description" label="Description" value={description} onChange={onValueChange} />
          </Box>
        </ModalBody>
        <ModalFooter backgroundColor="bg.gray.100" p={6}>
          <SecondaryButton mr={6} onClick={onClose}>
            Cancel
          </SecondaryButton>
          <PrimaryButton disabled={!isDirty || name.length === 0} type="submit">
            Add this site
          </PrimaryButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateSiteModal;
