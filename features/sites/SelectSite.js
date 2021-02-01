import * as React from 'react';
import { useGetSites } from '@/features/sites/useSitesQuery';
import Select from '@/components/select/Select';
import SelectItem from '@/components/select/SelectItem';

const SelectSite = ({ selectedId, onSelect }) => {
  const [selectedSite, setSelectedSite] = React.useState('');
  const { isLoading, data: sites = [] } = useGetSites();

  const onChange = (value) => {
    setSelectedSite(value);
  };

  return (
    <>
      <Select placeholder="Select feature" onChange={onChange} value={selectedSite}>
        <SelectItem value="1" title="Test 1" />
        <SelectItem value="2" title="Test 2" subtitle="yolo" />
      </Select>
    </>
  );
};

export default SelectSite;
