import React from 'react';
import { Container } from '@chakra-ui/react';
import { AppBar } from '@/components/appBar';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Container as="main" maxW="lg" borderWidth="1px" mx="auto" w="100%" p="6" bg="white" boxShadow="sm">
        {children}
      </Container>
    </>
  );
};

export default Layout;
