import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import { AppBar } from '@/components/appBar';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Container as="main" d="flex" justifyContent="center" maxWidth="100%">
        <Box maxW="1024px" w="100%" p={[2, 6]}>
          {children}
        </Box>
      </Container>
    </>
  );
};

export default Layout;
