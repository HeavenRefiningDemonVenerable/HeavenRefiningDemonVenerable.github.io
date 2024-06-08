import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page correctly', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders projects page correctly', () => {
  render(<App />);
  const linkElement = screen.getByText(/Projects/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders experience page correctly', () => {
  render(<App />);
  const linkElement = screen.getByText(/Experience/i);
  expect(linkElement).toBeInTheDocument();
});
