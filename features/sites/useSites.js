import { useQuery, useMutation } from 'react-query';
import { fetcher } from '@/utils/fetcher';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from '@/features/auth/useAuth';
import { useQueryClient } from 'react-query';

const useSites = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const { mutate } = useMutation((payload) => fetcher('/api/sites/create', user.token, payload), {
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

  const { mutate: addFeature } = useMutation((payload) => fetcher('/api/sites/feature', user.token, payload), {
    onMutate: (payload) => {
      queryClient.cancelQueries('sites');

      const oldSites = queryClient.getQueryData('sites');

      const newData = oldSites.map((site) => {
        if (site.id !== payload.siteId) {
          return site;
        }

        return {
          ...site,
          features: [...site.features, payload]
        };
      });

      queryClient.setQueryData('sites', newData);

      return () => queryClient.setQueryData('sites', oldSites);
    },
    onError: (error, values, rollback) => {
      if (rollback) {
        rollback();
      }
    },
    onSettled: () => queryClient.invalidateQueries('sites')
  });

  const siteQuery = useQuery('sites', async () => await fetcher('/api/sites', user.token), { enabled: !!user });

  const createSite = (payload) => {
    const id = uuidv4();
    mutate({ ...payload, id });
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
