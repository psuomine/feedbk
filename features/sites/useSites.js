import { useQuery, useMutation } from 'react-query';
import { fetcher } from '@/utils/fetcher';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from '@/features/auth/useAuth';
import { useQueryClient } from 'react-query';

const useSites = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const { create } = useMutation((payload) => fetcher('/api/sites/create', user.token, payload), {
    onMutate: (payload) => {
      // Cancel all sites queries -> to prevent race conditions
      queryClient.cancelQueries('sites');

      const oldSites = queryClient.getQueryData('sites');
      queryClient.setQueryData('sites', (oldSites) => [...oldSites, { ...payload, features: [] }]);

      return () => queryClient.setQueryData('sites', oldSites);
    },
    onError: (error, values, rollback) => {
      if (rollback) {
        rollback();
      }
    },
    onSettled: () => queryClient.invalidateQueries('sites')
  });

  const addFeature = (siteId, feature) => {
    const oldData = queryClient.getQueryData('sites');
    const newData = oldData.map((site) => {
      if (site.id !== siteId) {
        return site;
      }

      return {
        ...site,
        features: [...site.features, feature]
      };
    });
    queryClient.setQueryData('sites', newData);
  };

  const siteQuery = useQuery('sites', async () => await fetcher('/api/sites', user.token), { enabled: !!user });

  const createSite = (payload) => {
    const id = uuidv4();
    create({ ...payload, id });
  };

  return {
    operations: {
      createSite,
      addFeature
    },
    models: {
      sites: siteQuery.data ?? [],
      sitesQuery: siteQuery
    }
  };
};

export default useSites;
