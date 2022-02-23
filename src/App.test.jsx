import App from './App';
import { MessageProvider } from './context/MessageContext';
import { UserProvider } from './context/UserContext';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('When button is pressed a message shows up', () => {
  render(
    <UserProvider>
      <MessageProvider>
        <App />
      </MessageProvider>
    </UserProvider>
  );

  const nameInput = screen.getByLabelText(/username/i);

  const passwordInput = screen.getByLabelText(/password/i);

  userEvent.type(nameInput, 'zach');

  userEvent.type(passwordInput, 'password');

  const button = screen.getByRole('button');

  userEvent.click(button);

  const name = screen.getByText(/zach/i);

  expect(name).toBeInTheDocument();
});
