import * as React from 'react';
import { Divider, Flex } from '@chakra-ui/react';
import { useGetSites } from '@/features/sites/useSitesQuery';
import Site from '@/features/sites/Site';
import FeatureList from '@/features/feature/FeatureList';
import NewFeature from '@/features/feature/NewFeature';
import SitesSkeleton from '@/features/sites/SitesSkeleton';
import SitesEmptyState from '@/features/sites/SitesEmptyState';
import { PrimaryButton } from '@/components/buttons';
import CreateSiteModal from '@/features/sites/CreateSiteModal';
import { Layout } from '@/components/layout';

const Sites = () => {
  const [isSitesDialogOpen, setSitesDialogOpen] = React.useState(false);
  const { isLoading, data: sites = [] } = useGetSites();

  const toggleDialog = () => setSitesDialogOpen((state) => !state);

  if (isLoading) {
    return (
      <Layout>
        <SitesSkeleton />
      </Layout>
    );
  }

  if (sites.length === 0) {
    return (
      <Layout>
        <SitesEmptyState toggleDialog={toggleDialog} />
      </Layout>
    );
  }

  return (
    <>
      <Layout>
        <Flex justifyContent="flex-end">
          <PrimaryButton onClick={toggleDialog}>Add new site</PrimaryButton>
        </Flex>
        {sites.map(({ id, name, description, features }) => (
          <React.Fragment key={id}>
            <Site name={name} description={description}>
              <FeatureList features={features} />
              <NewFeature siteId={id} />
            </Site>
            <Divider />
          </React.Fragment>
        ))}
      </Layout>
      <CreateSiteModal isOpen={isSitesDialogOpen} toggleOpen={toggleDialog} />
    </>
  );
};

export default Sites;
