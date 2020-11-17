import * as React from 'react';
import NextLink from 'next/link';
import { Box, Text, Grid } from '@chakra-ui/react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import AppBarLink from './AppBarLink';
import AppBarMenuItem from './AppBarMenuItem';

const AppBar = () => {
  return (
    <Grid width="100%" alignItems="center" h="64px" templateColumns="150px 1fr" bg="bg.gray.800" px={[4, 8]}>
      <Text color="white" fontSize="2xl" fontWeight="bold">
        Feedbäk
      </Text>
      <Box as="nav" display={{ base: 'none', md: 'flex' }}>
        <AppBarLink to="/">New feedbacks</AppBarLink>
        <AppBarLink to="/archived">Archived feedbacks</AppBarLink>
        <AppBarLink to="/sites">Sites</AppBarLink>
      </Box>
      <Box display={{ base: 'flex', md: 'none' }} justifySelf="flex-end">
        <Menu>
          <MenuButton fontSize="2xl" color="white" as={HamburgerIcon}></MenuButton>
          <MenuList>
            <AppBarMenuItem to="/">New feedbacks</AppBarMenuItem>
            <AppBarMenuItem to="/archived">Archived feedbacks</AppBarMenuItem>
            <AppBarMenuItem to="/sites">Sites</AppBarMenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Grid>
  );
};

export default AppBar;
