import React from 'react';
import { Link } from '@chakra-ui/react';
import { MenuItem } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

const AppBarMenuItem = ({ to, children }) => {
  const { pathname } = useRouter();
  const isActive = pathname === to;

  return (
    <MenuItem tabIndex="-1" backgroundColor={isActive ? 'brand.50' : 'white'}>
      <NextLink href={to} passHref>
        <Link color={isActive ? 'brand.500' : '#1A202C'}>{children}</Link>
      </NextLink>
    </MenuItem>
  );
};

export default AppBarMenuItem;
