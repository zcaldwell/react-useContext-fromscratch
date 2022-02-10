import React from 'react';
import styles from './Message.css';

const { avatarImage } = styles;

export default function Message({ message }) {
  const { entry, name, image } = message;
  console.log(message);

  return (
    <div>
      <img src={image} className={avatarImage} />
      <h2>{name}</h2>
      <p>{entry}</p>
    </div>
  );
}
