import * as React from 'react';
import { Flex, VStack, useDisclosure } from '@chakra-ui/react';
import { PrismaClient } from '@prisma/client';
import { PrimaryButton } from '@/components/buttons';
import { Layout } from '@/components/layout';
import CreateSiteModal from '@/features/sites/CreateSiteModal';
import useSites from '@/features/sites/useSites';
import { useToast } from '@/features/toast/ToastContext';
import FeatureItem from '@/features/sites/FeatureItem';
import Site from '@/features/sites/Site';
import { Divider } from '@chakra-ui/react';
import NewFeature from '@/features/sites/NewFeature';

const prisma = new PrismaClient();

export const getServerSideProps = async () => {
  const sites = await prisma.site.findMany();
  return {
    props: {
      sites
    }
  };
};

const Sites = ({ sites }) => {
  const { showToast } = useToast();
  const { isOpen, onToggle } = useDisclosure();

  const { operations, models } = useSites(sites);

  const createSite = (payload) => {
    operations.createSite(payload);
    showToast({ title: 'Successfully Created!' });
  };

  return (
    <>
      <Layout>
        <Flex justifyContent="flex-end">
          <PrimaryButton onClick={onToggle}>Add new site</PrimaryButton>
        </Flex>
        <Site
          name="Sitename 1"
          description=" Site description text. This text can be anything! Just do it! User added these"
        >
          <VStack spacing="4" mt="4" alignItems="stretch">
            <FeatureItem featureName="Feature 1" featureId="2bb12a06-5c2f-4ff7-865c-b3a373c42f96" />
            <FeatureItem featureName="Feature 2" featureId="2bb12a06-5c2f-4ff7-865c-b3a373c42f96" />
            <NewFeature />
          </VStack>
        </Site>
        <Divider />
        <Site
          name="Sitename 2"
          description=" Site description text. This text can be anything! Just do it! User added these"
        >
          <FeatureItem featureName="Feature 1" featureId="2bb12a06-5c2f-4ff7-865c-b3a373c42f96" />
          <FeatureItem featureName="Feature 2" featureId="2bb12a06-5c2f-4ff7-865c-b3a373c42f96" />
          <NewFeature />
        </Site>
      </Layout>

      <CreateSiteModal isOpen={isOpen} toggleOpen={onToggle} createSite={createSite} />
    </>
  );
};

export default Sites;
