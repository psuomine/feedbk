import React from 'react';
import { Input } from '@chakra-ui/react';

const NewFeatureTextField = ({ onChange, value, error }) => {
  return (
    <Input
      id="new-feature-input"
      isInvalid={error}
      autoFocus={true}
      px="2"
      w={['160px', '250px']}
      borderColor="white"
      placeholder="Feature name"
      fontSize="sm"
      backgroundColor={error ? 'error.100' : 'white'}
      h="30px"
      onChange={onChange}
      value={value}
      _invalid={{
        borderColor: 'error.500',
        boxShadow: '0 0 0 1px #E38F7D'
      }}
      _focus={{
        borderColor: 'border.focus',
        boxShadow: '0 0 0 1px #87ABD3'
      }}
    />
  );
};

export default NewFeatureTextField;
