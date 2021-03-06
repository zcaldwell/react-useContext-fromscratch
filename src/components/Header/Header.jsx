import React from 'react';
import { useUser } from '../../context/UserContext';
import styles from './Header.css';

const { header } = styles;

export default function Header() {
  const { user } = useUser();
  return (
    <div className={header}>
      <h1>Welcome to the Guest Book</h1>
      {user ? (
        <h2>Hello {user}, please leave a message! </h2>
      ) : (
        <h2>Plese sign in.</h2>
      )}
    </div>
  );
}
