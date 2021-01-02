import * as React from 'react';
import { Box, Text, Grid } from '@chakra-ui/react';
import { Menu, MenuButton, MenuList, Divider, MenuItem, MenuDivider, Avatar } from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';
import AppBarLink from './AppBarLink';
import AppBarMenuItem from './AppBarMenuItem';
import { useAuth } from '@/features/auth/useAuth';

const AppBar = () => {
  const { user, signout } = useAuth();

  return (
    <>
      <Grid
        width="100%"
        alignItems="center"
        h="64px"
        templateColumns="150px 1fr 150px"
        bg="white"
        px={[4, 8]}
        maxW="1200px"
        margin="0 auto"
      >
        <Text color="brand.500" fontSize="2xl" fontWeight="bold">
          Feedbäk
        </Text>
        <Box as="nav" display={{ base: 'none', md: 'flex' }} justifySelf="center">
          <AppBarLink to="/feedbacks">New feedbacks</AppBarLink>
          <AppBarLink to="/archived">Archived feedbacks</AppBarLink>
          <AppBarLink to="/sites">Sites</AppBarLink>
        </Box>
        <Box display={{ base: 'flex', md: 'none' }} justifySelf="flex-end">
          <Menu>
            <MenuButton fontSize="2xl" color="white" as={HamburgerIcon} />
            <MenuList>
              <AppBarMenuItem to="/">New feedbacks</AppBarMenuItem>
              <AppBarMenuItem to="/archived">Archived feedbacks</AppBarMenuItem>
              <AppBarMenuItem to="/sites">Sites</AppBarMenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box justifySelf="flex-end">
          <Menu autoSelect={false} placement="auto">
            <MenuButton src={user.photoUrl} name={user.name} cursor="pointer" size="sm" as={Avatar} />
            <MenuList>
              <Box px="4" py="2" role="menuitem">
                <Text>{user.name}</Text>
                <Text fontSize="sm" lineHeight="short" color="text.gray.600">
                  {user.email}
                </Text>
              </Box>
              <MenuDivider />
              <MenuItem
                onClick={signout}
                justifyContent="center"
                color="brand.500"
                textAlign="center"
                fontWeight="medium"
                _active={{ backgroundColor: 'brand.100' }}
                _focus={{ backgroundColor: 'brand.100' }}
              >
                Sign Out
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Grid>
      <Divider />
    </>
  );
};

export default AppBar;
