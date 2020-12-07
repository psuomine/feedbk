import * as React from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { PlusIcon } from '@/components/icons';
import { useDisclosure } from '@chakra-ui/react';
import { CloseIcon, DoneIcon } from '@/components/icons';
import FeatureIconButton from '@/features/feature/FeatureIconButton';
import FeatureId from '@/features/feature/FeatureId';
import NewFeatureTextField from '@/features/feature/NewFeatureTextField';

const MotionFlex = motion.custom(Flex);

// TODO own component for FeatureId
// TODO use same wrapper component for new features and features (same padding etc.)

const NewFeature = ({ onFeatureAdd }) => {
  const [name, setName] = React.useState('');
  const { isOpen: fullWidth, onToggle } = useDisclosure(false);

  const onDoneClick = () => {
    if (!name) {
      return;
    }
    onFeatureAdd({ id: '2bb12a06-5c2f-4ff7-865c-b3a373c42f96', name });
    setName('');
    onToggle();
  };

  const onCloseClick = () => {
    setName('');
    onToggle();
  };

  const onNameChange = (event) => setName(event.target.value);

  return (
    <MotionFlex
      animate={{ width: fullWidth ? '100%' : '43px' }}
      initial={{ width: '43px' }}
      h="43px"
      background="bg.gray.100"
      borderRadius="md"
    >
      {fullWidth ? (
        <MotionFlex
          alignItems="center"
          px="4"
          justifyContent="space-between"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          flex={1}
        >
          <NewFeatureTextField onChange={onNameChange} value={name} />

          <FeatureId id={'2bb12a06-5c2f-4ff7-865c-b3a373c42f96'}>
            <FeatureIconButton _hover={{ stroke: 'error.500' }} onClick={onCloseClick}>
              <CloseIcon />
            </FeatureIconButton>
            <FeatureIconButton _hover={{ stroke: 'success.500' }} onClick={onDoneClick} data-testid="feature-done">
              <DoneIcon />
            </FeatureIconButton>
          </FeatureId>
        </MotionFlex>
      ) : (
        <Button
          onClick={onToggle}
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
