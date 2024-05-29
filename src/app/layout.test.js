import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './layout';

// Mock the Header and Cards components
jest.mock('../components/header', () => () => <div>Mocked Header</div>);
jest.mock('../components/Cards/cards', () => () => <div>Mocked Cards</div>);

describe('Layout Component', () => {
  test('renders without crashing', () => {
    render(<Layout />);

    // Check if the mocked Header component is rendered
    expect(screen.getByText('Mocked Header')).toBeInTheDocument();

    // Check if the mocked Cards component is rendered
    expect(screen.getByText('Mocked Cards')).toBeInTheDocument();
  });
});