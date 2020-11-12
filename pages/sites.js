import { useState } from 'react';
import { PrimaryButton } from '@/components/buttons';
import { Layout } from '@/components/layout';
import { Text, Box } from '@chakra-ui/core';
import CreateSiteModal from '@/features/sites/CreateSiteModal';

const sites = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModalOpen = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <Layout>
        <Box d="flex" justifyContent="space-between">
          <Text fontSize="xl" fontWeight="500">
            Sites
          </Text>
          <PrimaryButton onClick={toggleModalOpen}>Add new site</PrimaryButton>
        </Box>
      </Layout>

      <CreateSiteModal isOpen={isModalOpen} toggleOpen={toggleModalOpen} />
    </>
  );
};

export default sites;
