import * as React from 'react';
import useSites from '@/features/sites/useSites';
import { useToast } from '@/features/toast/ToastContext';
import Site from '@/features/sites/Site';
import { Divider, Text } from '@chakra-ui/react';
import FeatureList from '@/features/feature/FeatureList';
import NewFeature from '@/features/feature/NewFeature';
import SitesLayout from '@/features/sites/SitesLayout';

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

  const createFeature = (siteId) => (feature) => operations.addFeature(siteId, feature);

  if (sitesQuery.isLoading) {
    return (
      <SitesLayout createSite={createSite}>
        <Text>LOADING</Text>
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
