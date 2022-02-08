import { createContext, useContext, useState } from 'react';

export const MessageContext = createContext();

const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState([]);

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

const useMessage = () => {
  const context = useContext(MessageContext);

  if (context === undefined) {
    throw new Error('useer must be used within provider');
  }
  return context;
};

export { MessageProvider, useMessage };
