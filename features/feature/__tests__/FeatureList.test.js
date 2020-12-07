import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FeatureList from '../FeatureList';

test('Renders features', async () => {
  const fakeFeatures = [
    { id: '123', name: 'Fake feature 1' },
    { id: '456', name: 'Fake feature 2' }
  ];

  render(<FeatureList features={fakeFeatures} />);

  const listItems = screen.getAllByRole('listitem');

  expect(listItems).toHaveLength(2);
});

test('Add feature', async () => {
  let fakeFeatures = [
    { id: '123', name: 'Fake feature 1' },
    { id: '456', name: 'Fake feature 2' }
  ];

  const addFeature = jest.fn();

  render(<FeatureList features={fakeFeatures} siteId="1" addFeature={addFeature} />);

  userEvent.click(screen.getByRole('button'));

  userEvent.type(screen.getByPlaceholderText('Feature name'), 'Fake feature 3');

  userEvent.click(screen.getByTestId('feature-done'));

  expect(addFeature).toHaveBeenCalledTimes(1);
});
