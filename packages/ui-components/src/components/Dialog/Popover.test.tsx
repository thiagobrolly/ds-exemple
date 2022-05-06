import React from 'react';
import { render } from '@testing-library/react';

import { DialogModal } from '.';

describe('<DialogModal />', () => {
  it('should render the heading', () => {
    render(<DialogModal />);
  });
});
