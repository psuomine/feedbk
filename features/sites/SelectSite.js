import * as React from 'react';
import { Select, Text } from '@chakra-ui/react';
import { useGetSites } from '@/features/sites/useSitesQuery';

const SelectSite = ({ selectedId, onSelect }) => {
  const { isLoading, data: sites = [] } = useGetSites();

  return (
    <div>
      <Text mb="1" fontSize="sm" htmlFor={name}>
        Site
      </Text>
      <Select
        placeholder="Select site"
        borderColor="border.default"
        fontSize="sm"
        focusBorderColor="border.focus"
        onChange={(event) => console.log('event', event.target.value)}
      >
        {sites.map((site) => (
          <option key={site.id} value={site.id}>
            {site.name}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default SelectSite;
