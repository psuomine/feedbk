import React from 'react';
import { Button } from '@chakra-ui/react';
import { useAuth } from '@/features/auth/useAuth';

const Login = () => {
  const auth = useAuth();

  return <Button onClick={() => auth.signinWithGitHub()}>Login</Button>;
};

export default Login;
