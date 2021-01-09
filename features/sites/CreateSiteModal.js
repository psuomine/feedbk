import * as React from 'react';
import { Flex } from '@chakra-ui/react';
import { PrimaryButton } from '@/components/buttons';
import { useCreateSite } from '@/features/sites/useSitesQuery';
import { TextInput, TextareaInput } from '@/components/input';
import { useToast } from '@/features/toast/ToastContext';

import {
  Modal,
  ModalOpenButton,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalFooterButtons
} from '@/components/modal/Modal';

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

const CreateSiteModal = () => {
  const { showToast } = useToast();
  const [{ name, description, isDirty, error }, dispatch] = React.useReducer(reducer, initialState);

  const { mutate: createFeatureMutation } = useCreateSite();

  const validateName = () => {
    const error = name.length === 0 && isDirty ? 'Site name is required' : '';
    dispatch({ type: 'SET_NAME_INPUT_ERROR', error });
  };

  const onValueChange = ({ target: { name, value } }) => dispatch({ type: 'INPUT_VALUE_CHANGE', name, value });

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('onsubmit');
    createFeatureMutation({ name, description });
    showToast({ title: 'Successfully Created!' });

    reset();
  };

  return (
    <Modal>
      <ModalOpenButton>
        <PrimaryButton onClick={reset}>Add new site</PrimaryButton>
      </ModalOpenButton>
      <ModalContent
        as="form"
        title="New site"
        subtitle="Fill out the site information below to get started"
        onSubmit={onSubmit}
      >
        <ModalBody>
          <TextInput
            name="name"
            label="Site name"
            value={name}
            required
            onChange={onValueChange}
            error={error ? error : ''}
            onBlur={validateName}
          />
          <Flex mt={4}>
            <TextareaInput name="description" label="Description" value={description} onChange={onValueChange} />
          </Flex>
        </ModalBody>
        <ModalFooter>
          <ModalFooterButtons text="Add this site" disabled={!isDirty || name.length === 0} type="submit" />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateSiteModal;
