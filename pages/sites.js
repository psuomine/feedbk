import * as React from 'react';
import useSites from '@/features/sites/useSites';
import { useToast } from '@/features/toast/ToastContext';
import Site from '@/features/sites/Site';
import { Divider, Flex, Text } from '@chakra-ui/react';
import FeatureList from '@/features/feature/FeatureList';
import NewFeature from '@/features/feature/NewFeature';
import SitesLayout from '@/features/sites/SitesLayout';
import SitesSkeleton from '@/features/sites/SitesSkeleton';
import Image from 'next/image';
import { PrimaryButton } from '@/components/buttons';

const Sites = () => {
  const { showToast } = useToast();

  const {
    operations,
    models: { sites, sitesQuery }
  } = useSites();

  const createSite = (payload) => {
    operations.createSite(payload);
    showToast({ title: 'Successfully Created!' });
  };

  const createFeature = (siteId) => (feature) => {
    const payload = { siteId, ...feature };
    operations.addFeature(payload);
  };

  if (sitesQuery.isLoading) {
    return <SitesSkeleton createSite={createSite} />;
  }

  if (true) {
    return (
      <SitesLayout createSite={createSite}>
        <Flex flexDirection="column" alignItems="center" justifyContent="center">
          <Image src="/sites-empty-illustration.svg" alt="Sites emtpy state illustration" height={230} width={200} />
          <Text align="center" mt="4" fontWeight="medium" fontSize="2xl">
            Start by creating a site
          </Text>
          <Text align="center" maxW="420px" mt="2" color="text.gray.600">
            Creating a site and features makes working with feedback easier. With sites it makes easier to keep context
            in mind.
          </Text>
          <PrimaryButton mt="6" onClick={() => {}}>
            Add new site
          </PrimaryButton>
        </Flex>
      </SitesLayout>
    );
  }

  return (
    <SitesLayout createSite={createSite}>
      {sites.map((site) => (
        <React.Fragment key={site.id}>
          <Site name={site.name} description={site.description}>
            <FeatureList features={site.features} />
            <NewFeature onFeatureAdd={createFeature(site.id)} />
          </Site>
          <Divider />
        </React.Fragment>
      ))}
    </SitesLayout>
  );
};

export default Sites;
