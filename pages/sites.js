import * as React from 'react';
import { Text, Box, useDisclosure } from '@chakra-ui/react';
import { PrismaClient } from '@prisma/client';
import { PrimaryButton } from '@/components/buttons';
import { Layout } from '@/components/layout';
import CreateSiteModal from '@/features/sites/CreateSiteModal';
import useSites from '@/features/sites/useSites';

const prisma = new PrismaClient();

export const getStaticProps = async () => {
  const sites = await prisma.site.findMany();
  return {
    props: {
      sites
    }
  };
};

const Sites = ({ sites }) => {
  console.log('sites', sites);
  const { isOpen, onToggle } = useDisclosure();

  const { operations, models } = useSites(sites);

  const createSite = (payload) => {
    operations.createSite(payload);
  };

  console.log('MODELS:SITES', models.sites);

  return (
    <>
      <Layout>
        <Box d="flex" justifyContent="space-between">
          <Text fontSize="xl" fontWeight="500">
            Sites
          </Text>
          <PrimaryButton onClick={onToggle}>Add new site</PrimaryButton>
        </Box>
        <ul>
          {models.sites.map((site) => {
            return (
              <li key={site.id}>
                <p>{site.name}</p>
                <p>{site.description}</p>
              </li>
            );
          })}
        </ul>
      </Layout>

      <CreateSiteModal isOpen={isOpen} toggleOpen={onToggle} createSite={createSite} />
    </>
  );
};

export default Sites;
