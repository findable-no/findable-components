import React from 'react';
import { render } from '@testing-library/react';
import { Leafs } from './Leafs';
import { testfiles } from './test-data';

describe('Leafs Component', () => {
  render(<Leafs leafs={testfiles} />);

  test('dummytest', () => {
    const one = 1;
    expect(one).toBe(1);
  });
});
