import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import { AppBar } from '@/components/appBar';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Container as="main" d="flex" justifyContent="center" maxWidth="100%">
        <Box bg="white" boxShadow="sm" maxW="1024px" w="100%" borderWidth="1px" p="6" mx={4}>
          {children}
        </Box>
      </Container>
    </>
  );
};

export default Layout;
