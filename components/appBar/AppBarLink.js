import { Box, Link } from '@chakra-ui/core';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const AppBarLink = ({ to, children }) => {
  const { pathname } = useRouter();

  const isActive = pathname === to;

  return (
    <Box
      transition="all 0.2s ease-in-out"
      cursor="pointer"
      px="3"
      py="2"
      borderRadius="md"
      bg={isActive ? 'bg.gray.900' : 'bg.gray.800'}
      ml="4"
      d="flex"
      justifyContent="center"
      _hover={{
        backgroundColor: 'bg.gray.700'
      }}
    >
      <NextLink href={to} passHref>
        <Link
          color={isActive ? 'white' : 'text.gray.300'}
          fontSize="sm"
          fontWeight="medium"
          letterSpacing="wide"
          _hover={{ color: 'white' }}
          _focus={{ boxShadow: 'none' }}
        >
          {children}
        </Link>
      </NextLink>
    </Box>
  );
};

export default AppBarLink;
