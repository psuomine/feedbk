import * as React from 'react';
import { PrimaryButton } from '@/components/buttons';
import { Layout } from '@/components/layout';
import { Text, Box } from '@chakra-ui/react';
import CreateSiteModal from '@/features/sites/CreateSiteModal';

const Sites = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

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

export default Sites;
