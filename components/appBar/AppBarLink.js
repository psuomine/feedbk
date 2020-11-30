import * as React from 'react';
import { Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const AppBarLink = ({ to, children }) => {
  const { pathname } = useRouter();

  const isActive = pathname === to;

  return (
    <NextLink href={to} passHref>
      <Flex
        position="relative"
        transition="all 0.1s ease-in-out"
        cursor="pointer"
        px="3"
        py="2"
        borderRadius="md"
        bg={isActive ? 'bg.gray.500' : 'white'}
        ml="4"
        justifyContent="center"
        color={isActive ? 'text.gray.900' : 'text.gray.600'}
        _hover={{
          color: 'text.gray.900'
        }}
      >
        <Link
          color="currentColor"
          fontSize="sm"
          fontWeight="medium"
          letterSpacing="wide"
          transition="all 0.1s ease-in-out"
          _hover={{ color: '#32343D' }}
          _focus={{ boxShadow: 'none' }}
        >
          {children}
        </Link>
      </Flex>
    </NextLink>
  );
};

export default AppBarLink;
