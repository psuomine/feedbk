import * as React from 'react';
import { Textarea, FormControl, FormLabel } from '@chakra-ui/react';

const TextareaInput = ({ name, label, value, onChange, placeholder }) => {
  return (
    <FormControl>
      <FormLabel mb="1" fontSize="sm" htmlFor={name}>
        {label}
      </FormLabel>
      <Textarea
        resize="none"
        borderRadius="6px"
        borderColor="border.default"
        fontSize="md"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        boxShadow="sm"
        size="lg"
        _focus={{
          borderColor: 'border.focus',
          boxShadow: '0 0 0 1px #87ABD3'
        }}
      />
    </FormControl>
  );
};

export default TextareaInput;
