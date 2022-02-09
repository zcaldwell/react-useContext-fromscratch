import React from 'react';
import { useMessage } from '../../context/MessageContext';
import Message from '../Message/Message';
import styles from './MessageList.css';

const { listItems } = styles;

export default function MessageList() {
  const { messages } = useMessage();
  return (
    <div>
      <ul>
        {messages.map((message) => {
          return (
            <li key={`${message.name}-${message.entry}`} className={listItems}>
              <Message message={message} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
