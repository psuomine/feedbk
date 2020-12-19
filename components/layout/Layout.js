import React from 'react';
import { useRouter } from 'next/router';
import { Container, Box, Button } from '@chakra-ui/react';
import { AppBar } from '@/components/appBar';
import { useAuth } from '@/features/auth/useAuth';

const Layout = ({ children }) => {
  const auth = useAuth();
  const router = useRouter();

  if (auth.loading) {
    return 'LOADING NOW';
  }

  if (!auth.user) {
    if (typeof window !== 'undefined') {
      router.push('/');
    }

    return null;
  }

  return (
    <>
      <AppBar />
      <Button onClick={auth.signout}>Logout</Button>
      <Container as="main" d="flex" justifyContent="center" maxWidth="100%">
        <Box maxW="1024px" w="100%" p={[2, 6]}>
          {children}
        </Box>
      </Container>
    </>
  );
};

export default Layout;
