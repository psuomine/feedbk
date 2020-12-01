import * as React from 'react';
import { render, screen } from '@testing-library/react';
import FeatureList from '../FeatureList';

test('Renders features', async () => {
  const fakeFeatures = [
    { id: '123', name: 'Fake feature 1' },
    { id: '456', name: 'Fake feature 2' }
  ];

  const { getAllByRole } = render(<FeatureList features={fakeFeatures} />);

  const listItems = getAllByRole('listitem');

  expect(listItems).toHaveLength(2);
});
