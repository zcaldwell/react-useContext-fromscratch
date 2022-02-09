import { createContext, useContext, useState } from 'react';

export const MessageContext = createContext();

const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  return (
    <MessageContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessageContext.Provider>
  );
};

const useMessage = () => {
  const context = useContext(MessageContext);

  if (context === undefined) {
    throw new Error('user must be used within provider');
  }
  return context;
};

export { MessageProvider, useMessage };
