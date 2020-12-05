import * as React from 'react';
import { Flex, useDisclosure } from '@chakra-ui/react';
import { PrismaClient } from '@prisma/client';
import { PrimaryButton } from '@/components/buttons';
import { Layout } from '@/components/layout';
import CreateSiteModal from '@/features/sites/CreateSiteModal';
import useSites from '@/features/sites/useSites';
import { useToast } from '@/features/toast/ToastContext';
import Site from '@/features/sites/Site';
import { Divider } from '@chakra-ui/react';
import FeatureList from '@/features/feature/FeatureList';

const prisma = new PrismaClient();

export const getServerSideProps = async () => {
  const sites = await prisma.site.findMany();
  const features = [
    { id: '2bb12a06-5c2f-4ff7-865c-b3a373c42f96', name: 'Feature 123' },
    { id: '2bb12a06-5c2f-4ff7-865c-b3a373c42f90', name: 'Feature 456' }
  ];

  const result = sites.map((site) => ({ ...site, features }));

  return {
    props: {
      sites: result
    }
  };
};

const Sites = ({ sites }) => {
  const { showToast } = useToast();
  const { isOpen, onToggle } = useDisclosure();

  const { operations, models } = useSites(sites);

  console.log('MODELS', models);

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
        {models.sites.map((site) => (
          <React.Fragment key={site.id}>
            <Site name={site.name} description={site.description}>
              <FeatureList features={site.features} siteId={site.id} addFeature={operations.addFeature} />
            </Site>
            <Divider />
          </React.Fragment>
        ))}
      </Layout>

      <CreateSiteModal isOpen={isOpen} toggleOpen={onToggle} createSite={createSite} />
    </>
  );
};

export default Sites;
