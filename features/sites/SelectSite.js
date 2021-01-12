import * as React from 'react';
import { Select } from '@chakra-ui/react';
import { useGetSites } from '@/features/sites/useSitesQuery';

const SelectSite = ({ selectedId, onSelect }) => {
  const { isLoading, data: sites = [] } = useGetSites();

  return (
    <Select placeholder="Select option" onChange={(event) => console.log('event', event.target.value)}>
      {sites.map((site) => (
        <option key={site.id} value={site.id}>
          {site.name}
        </option>
      ))}
    </Select>
  );
};

export default SelectSite;
