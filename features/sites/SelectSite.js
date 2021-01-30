import * as React from 'react';
import { Select } from '@chakra-ui/react';
import { useGetSites } from '@/features/sites/useSitesQuery';
import NewSelect from '@/components/select/Select';
import NewSelectItem from '@/components/select/SelectItem';

const SelectSite = ({ selectedId, onSelect }) => {
  const [selectedSite, setSelectedSite] = React.useState('');
  const { isLoading, data: sites = [] } = useGetSites();

  const onChange = (event) => {
    setSelectedSite(event.target.value);
  };

  return (
    <>
      <Select placeholder="Select option" onChange={(event) => console.log('event', event.target.value)}>
        {sites.map((site) => (
          <option key={site.id} value={site.id}>
            {site.name}
          </option>
        ))}
      </Select>
      <NewSelect placeholder="Select feature" onChange={onChange} value={selectedSite}>
        <NewSelectItem value="1" title="Test 1" />
        <NewSelectItem value="2" title="Test 2" subtitle="yolo" />
      </NewSelect>
    </>
  );
};

export default SelectSite;
