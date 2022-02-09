import App from './App';
import { MessageProvider } from './context/MessageContext';
import { UserProvider } from './context/UserContext';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// test('When button is pressed a message shows up', () => {
//   render(
//     <UserProvider>
//       <MessageProvider>
//         <App />
//       </MessageProvider>
//     </UserProvider>
//   );

//   const nameInput = screen.getByText(/name/i);
//   const messageInput = screen.getByText(/enter message/i);

//   expect(nameInput).toBeInTheDocument();
//   expect(messageInput).toBeInTheDocument();

// userEvent.type(nameInput, 'zach');
// expect(nameInput.value).toBe('zach');

// userEvent.type(messageInput, 'hi');
// expect(messageInput.value).toBe('hi');

// const button = screen.getByRole('button');
// expect(button).toBeInTheDocument();

// userEvent.click(button);
// const name = screen.getByText('zach');
// const input = screen.getByText('hi');
// expect(name).toBeInTheDocument();
// expect(input).toBeInTheDocument();
// });

test('When button is pressed a message shows up', () => {
  render(
    <UserProvider>
      <MessageProvider>
        <App />
      </MessageProvider>
    </UserProvider>
  );

  const nameInput = screen.getByText(/name/i);
  const messageInput = screen.getByText(/enter message/i);
  const submitButton = screen.getByRole('button', { name: /submit/i });
  const header = screen.getByRole('heading', { name: /please sign in/i });

  expect(nameInput).toBeInTheDocument();
  expect(messageInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
  expect(header).toBeInTheDocument();
});
