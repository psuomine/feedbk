import { useQuery, useMutation, queryCache } from 'react-query';
import { fetcher } from '@/utils/fetcher';
import { v4 as uuidv4 } from 'uuid';

const useSites = (initialSites) => {
  const [create] = useMutation((payload) => fetcher('/api/sites/create', payload), {
    onMutate: (payload) => {
      // Cancel all sites queries -> to prevent race conditions
      queryCache.cancelQueries('sites');

      const oldSites = queryCache.getQueryData('sites');
      queryCache.setQueryData('sites', (oldSites) => [...oldSites, payload]);

      return () => queryCache.setQueryData('sites', oldSites);
    },
    onError: (error, values, rollback) => {
      if (rollback) {
        rollback();
      }
    },
    onSettled: () => queryCache.invalidateQueries('sites')
  });

  const siteQuery = useQuery('sites', () => fetcher('/api/sites'), {
    initialData: initialSites
  });

  const createSite = (payload) => {
    const siteId = uuidv4();
    create({ ...payload, siteId });
  };

  return {
    operations: {
      createSite
    },
    models: {
      sites: siteQuery.data
    }
  };
};

export default useSites;
