import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('completes a quiz and shows the score and answer review', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /start your quiz/i }));
  expect(screen.getByText(/a train passes a platform/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /240 m/i }));
  fireEvent.click(screen.getByRole('button', { name: /go to question 10, unanswered/i }));
  fireEvent.click(screen.getByRole('button', { name: /see my results/i }));

  expect(screen.getByText('10% correct')).toBeInTheDocument();
  expect(screen.getByText('Take a closer look')).toBeInTheDocument();
  expect(screen.getByText(/54 km\/h is 15 m\/s/i)).toBeInTheDocument();
});
