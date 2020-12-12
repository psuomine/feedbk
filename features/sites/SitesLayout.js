import * as React from 'react';
import { Flex, useDisclosure } from '@chakra-ui/react';
import { PrimaryButton } from '@/components/buttons';
import { Layout } from '@/components/layout';
import CreateSiteModal from '@/features/sites/CreateSiteModal';

const SitesLayout = ({ children, createSite }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Layout>
      <Flex justifyContent="flex-end">
        <PrimaryButton onClick={onToggle}>Add new site</PrimaryButton>
      </Flex>
      {children}
      <CreateSiteModal isOpen={isOpen} toggleOpen={onToggle} createSite={createSite} />
    </Layout>
  );
};

export default SitesLayout;
