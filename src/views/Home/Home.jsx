import React from 'react';
import MessageEntry from '../../components/MessageEntry/MessageEntry';
import MessageList from '../../components/MessageList/MessageList';
import { MessageProvider } from '../../context/MessageContext';
import Header from '../../components/Header/Header';

export default function Home() {
  return (
    <>
      <Header />

      <MessageProvider>
        <MessageEntry />
        <MessageList />
      </MessageProvider>
    </>
  );
}
