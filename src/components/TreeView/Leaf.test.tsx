import React from 'react';
import { render } from '@testing-library/react';

import { Leaf } from './Leafs';

describe('Leaf Component', () => {
  render(<Leaf code="1337" name="johnnytester" />);

  test('dummytest', () => {
    const one = 1;
    expect(one).toBe(1);
  });
});
