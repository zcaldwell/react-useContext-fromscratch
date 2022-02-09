import Message from './Message';
import { render, screen } from '@testing-library/react';

const message = {
  entry: 'hi',
  name: 'zach',
};

test('When a message is rendered a name and message show up', () => {
  render(<Message message={message} />);

  const name = screen.getByRole('heading', { name: /zach/i });
  const entry = screen.getByText('hi');

  expect(name).toBeInTheDocument();
  expect(entry).toBeInTheDocument();
});
