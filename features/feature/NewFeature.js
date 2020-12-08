import * as React from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { PlusIcon } from '@/components/icons';
import { CloseIcon, DoneIcon } from '@/components/icons';
import FeatureIconButton from '@/features/feature/FeatureIconButton';
import FeatureId from '@/features/feature/FeatureId';
import NewFeatureTextField from '@/features/feature/NewFeatureTextField';

const MotionFlex = motion.custom(Flex);

const initialState = {
  name: '',
  isFullWidth: false,
  isError: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'NAME_CHANGE':
      return { ...state, name: action.payload, isError: false };
    case 'ERROR_SUBMIT':
      return { ...state, isError: true };
    case 'TOGGLE_FULL_WIDTH':
      return { ...state, isFullWidth: !state.isFullWidth };
    case 'RESET':
      return { ...initialState };
    default:
      throw new Error();
  }
};

const NewFeature = ({ onFeatureAdd }) => {
  const [{ name, isFullWidth, isError }, dispatch] = React.useReducer(reducer, initialState);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      dispatch({ type: 'ERROR_SUBMIT' });
      return;
    }

    onFeatureAdd({ id: '2bb12a06-5c2f-4ff7-865c-b3a373c42f96', name });
    dispatch({ type: 'RESET' });
  };

  const onCloseClick = () => {
    dispatch({ type: 'RESET' });
  };

  const onNameChange = (event) => {
    dispatch({ type: 'NAME_CHANGE', payload: event.target.value });
  };

  const onOpenField = () => {
    dispatch({ type: 'TOGGLE_FULL_WIDTH' });
  };

  return (
    <MotionFlex
      as="form"
      onSubmit={onSubmit}
      animate={{ width: isFullWidth ? '100%' : '43px' }}
      initial={{ width: '43px' }}
      h="43px"
      w="43px"
      background="bg.gray.100"
      borderRadius="md"
    >
      {isFullWidth ? (
        <MotionFlex
          alignItems="center"
          px="4"
          justifyContent="space-between"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          flex={1}
        >
          <NewFeatureTextField onChange={onNameChange} value={name} error={isError} />

          <FeatureId id={'2bb12a06-5c2f-4ff7-865c-b3a373c42f96'}>
            <FeatureIconButton _hover={{ stroke: 'error.500' }} onClick={onCloseClick}>
              <CloseIcon />
            </FeatureIconButton>
            <FeatureIconButton _hover={{ stroke: 'success.500' }} type="submit" data-testid="feature-done">
              <DoneIcon />
            </FeatureIconButton>
          </FeatureId>
        </MotionFlex>
      ) : (
        <Button
          w="100%"
          h="100%"
          onClick={onOpenField}
          alignItems="center"
          cursor="pointer"
          justifyContent="center"
          flex="1"
          backgroundColor="inherit"
        >
          <PlusIcon />
        </Button>
      )}
    </MotionFlex>
  );
};

export default NewFeature;
