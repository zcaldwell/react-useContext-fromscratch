import App from './App';
import { MessageContext } from './context/MessageContext';
import { UserContext } from './context/UserContext';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('When button is pressed a message shows up', () => {
  render(
    <UserContext>
      <MessageContext>
        <App />
      </MessageContext>
    </UserContext>
  );

  const nameInput = screen.getByLabelText(/name/i);
  const messageInput = screen.getByLabelText(/enter message/i);

  expect(nameInput).toBeInTheDocument();
  expect(messageInput).toBeInTheDocument();

  userEvent.type(nameInput, 'zach');
  expect(nameInput.value).toBe('zach');

  userEvent.type(messageInput, 'hi');
  expect(messageInput.value).toBe('hi');

  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();

  userEvent.click(button);
  const name = screen.getByText('zach');
  const input = screen.getByText('hi');
  expect(name).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});
