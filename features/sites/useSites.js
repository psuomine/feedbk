import { useQuery, useMutation, queryCache } from 'react-query';
import { fetcher } from '@/utils/fetcher';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from '@/features/auth/useAuth';

const useSites = () => {
  const { user } = useAuth();
  const [create] = useMutation((payload) => fetcher('/api/sites/create', user.token, payload), {
    onMutate: (payload) => {
      // Cancel all sites queries -> to prevent race conditions
      queryCache.cancelQueries('sites');

      const oldSites = queryCache.getQueryData('sites');
      queryCache.setQueryData('sites', (oldSites) => [...oldSites, { ...payload, features: [] }]);

      return () => queryCache.setQueryData('sites', oldSites);
    },
    onError: (error, values, rollback) => {
      if (rollback) {
        rollback();
      }
    },
    onSettled: () => queryCache.invalidateQueries('sites')
  });

  const addFeature = (siteId, feature) => {
    const oldData = queryCache.getQueryData('sites');
    const newData = oldData.map((site) => {
      if (site.id !== siteId) {
        return site;
      }

      return {
        ...site,
        features: [...site.features, feature]
      };
    });
    queryCache.setQueryData('sites', newData);
  };

  const siteQuery = useQuery('sites', async () => await fetcher('/api/sites', user.token), { enabled: user });

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
