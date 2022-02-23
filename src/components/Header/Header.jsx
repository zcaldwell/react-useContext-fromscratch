import React from 'react';
import { useUser } from '../../context/UserContext';
import styles from './Header.css';

const { header } = styles;

export default function Header() {
  const {
    user: { username },
  } = useUser();
  return (
    <div className={header}>
      <h1>Welcome to the Guest Book</h1>
      <h2>Hello {username}, please leave a message! </h2>
    </div>
  );
}
