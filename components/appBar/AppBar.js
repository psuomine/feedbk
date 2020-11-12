import * as React from 'react';
import AppBarLink from './AppBarLink';
import { Box, Text, Grid } from '@chakra-ui/core';

const AppBar = () => {
  return (
    <Grid width="100%" alignItems="center" h="64px" templateColumns="1fr 1024px 1fr" bg="bg.gray.800">
      <Text ml="8" color="white" fontSize="2xl" fontWeight="bold">
        Feedbäk
      </Text>
      <Box d="flex" as="nav">
        <AppBarLink to="/">New feedbacks</AppBarLink>
        <AppBarLink to="/archived">Archived feedbacks</AppBarLink>
        <AppBarLink to="/sites">Sites</AppBarLink>
      </Box>
    </Grid>
  );
};

export default AppBar;
