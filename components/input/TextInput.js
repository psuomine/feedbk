import { FormControl, FormLabel, Input, Box, Text } from '@chakra-ui/core';
import { motion } from 'framer-motion';

const MotionText = motion.custom(Text);

const TextInput = ({ name, label, value, onChange, placeholder, required = false, error, onBlur }) => {
  return (
    <FormControl>
      <Box d="flex" justifyContent="space-between">
        <FormLabel mb="1" fontSize="sm" htmlFor={name}>
          {label}
          {required && <span>*</span>}
        </FormLabel>
        {error && (
          <Box overflow="hidden">
            <MotionText fontSize="sm" fontWeight="medium" color="error.500" initial={{ y: 25 }} animate={{ y: 0 }}>
              {error}
            </MotionText>
          </Box>
        )}
      </Box>

      <Input
        autoFocus={true}
        isInvalid={error}
        borderColor="border.default"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        boxShadow="sm"
        required
        onBlur={onBlur}
        backgroundColor={error ? 'error.100' : 'white'}
        _invalid={{
          borderColor: 'error.500',
          boxShadow: '0 0 0 1px #E38F7D'
        }}
        _focus={{
          borderColor: 'border.focus',
          boxShadow: '0 0 0 1px #87ABD3'
        }}
      />
    </FormControl>
  );
};

export default TextInput;
