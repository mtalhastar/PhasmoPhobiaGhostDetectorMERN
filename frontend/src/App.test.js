import { render, screen } from '@testing-library/react';
import App from './App';



test('Renders Form', () => {
  render(<App />);
  const linkElement = screen.getByTestId("FORM");
  expect(linkElement).toBeInTheDocument();
});
test('Nav Bar is present', () => {
  render(<App />);
  const linkElement = screen.getByTestId("navbar");
  expect(linkElement).toBeInTheDocument()
});

test('Nav Bar is present', () => {
  render(<App />);
  const linkElement = screen.getByTestId("navbar");
  expect(linkElement).toHaveTextContent("Properties for sale")
});
