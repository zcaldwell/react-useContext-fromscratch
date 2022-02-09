import { useMessage } from '../../context/MessageContext';
import { useUser } from '../../context/UserContext';
import { useState } from 'react';
import styles from './MessageEntry.css';

const { inputContainer, formContainer } = styles;

export default function MessageEntry() {
  const [entry, setEntry] = useState('');
  const [name, setName] = useState('');
  const { user, setUser } = useUser();
  const { messages, setMessages } = useMessage();

  function updateEntry() {
    if (!entry) return;
    setUser(name);
    setMessages([...messages, { name, entry }]);
    setEntry('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEntry();
  };

  const nameInput = (
    <div>
      <div>
        <label>Name</label>
      </div>
      <div>
        <input
          type="text"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );

  const displayUser = user ? `${user} is signed in.` : 'Please Sign In';
  return (
    <div className={inputContainer}>
      <div>
        <h1>{displayUser}</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} className={formContainer}>
          {user ? null : nameInput}
          <div>
            <label>Enter Message</label>
            <div>
              <textarea
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button type="submit">Submit</button>
            {user && (
              <button
                type="button"
                onClick={() => {
                  setUser('');
                  setEntry('');
                }}
              >
                Sign-Out
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
