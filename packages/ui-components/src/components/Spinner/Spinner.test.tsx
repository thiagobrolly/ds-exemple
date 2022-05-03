// import { render, screen } from '@testing-library/react';
import React from 'react';
import { render } from '@testing-library/react';
import { Spinner } from '.';

describe('<Spinner />', () => {
  it('Should render correctly', () => {
    render(<Spinner />);
    // expect(screen.getByTitle(/loading/i)).toBeInTheDocument();
  });
});
