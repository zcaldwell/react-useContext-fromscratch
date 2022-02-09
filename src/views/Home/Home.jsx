import React from 'react';
import MessageEntry from '../../components/MessageEntry/MessageEntry';
import MessageList from '../../components/MessageList/MessageList';
import { MessageProvider } from '../../context/MessageContext';

export default function Home() {
  return (
    <MessageProvider>
      <MessageEntry />
      <MessageList />
    </MessageProvider>
  );
}
