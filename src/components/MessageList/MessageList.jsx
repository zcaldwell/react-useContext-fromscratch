import React from 'react';
import { useMessage } from '../../context/MessageContext';
import Message from '../Message/Message';
import styles from './MessageList.css';
import Hover from '../../hooks/Hover';

const { listItems, allList, hover } = styles;

export default function MessageList() {
  const { messages } = useMessage();

  return (
    <>
      <div>
        <ul className={allList}>
          {messages.map((message) => {
            return (
              <li
                key={`${message.name}-${message.entry}`}
                className={listItems}
              >
                <Message message={message} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={hover}>
        <Hover />
      </div>
    </>
  );
}
