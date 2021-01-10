import { useQuery, useMutation } from 'react-query';
import { fetcher } from '@/utils/fetcher';
import { useAuth } from '@/features/auth/useAuth';
import { useQueryClient } from 'react-query';

export const useGetSites = () => {
  const { user } = useAuth();
  return useQuery('sites', async () => await fetcher('/api/sites', user.token), { enabled: !!user });
};

export const useCreateSite = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation((payload) => fetcher('/api/sites/create', user.token, payload), {
    onSuccess: (response, variables) => {
      queryClient.setQueryData('sites', (oldSites) => [...oldSites, { ...variables, features: [] }]);
    },
    onSettled: () => queryClient.invalidateQueries('sites')
  });
};

export const useCreateFeature = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation((payload) => fetcher('/api/sites/feature', user.token, payload), {
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
};
