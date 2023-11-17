import { render, screen } from '@testing-library/react';
import Pricing from './Pricing';

test('renders learn react link', () => {
  render(<Pricing />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
