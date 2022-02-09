import { useMessage } from '../../context/MessageContext';
import { useUser } from '../../context/UserContext';
import { useState } from 'react';
import styles from './MessageEntry.css';

const { inputContainer, formContainer, nameInput } = styles;

export default function MessageEntry() {
  const [entry, setEntry] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const { user, setUser } = useUser();
  const { messages, setMessages } = useMessage();
  const { avatar, setAvatar } = useAvatar();
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
    <div className="nameInput">
      <label>
        Name
        <input
          type="text"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Avatar
        <input
          type="text"
          value={avatar}
          placeholder="Enter Avatar Url"
          onChange={(e) => setAvatar(e.target.value)}
        />
      </label>
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
            <label>
              Enter Message
              <input value={entry} onChange={(e) => setEntry(e.target.value)} />
            </label>
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
