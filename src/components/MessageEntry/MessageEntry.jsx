import { useMessage } from '../../context/MessageContext';
import { useUser } from '../../context/UserContext';
import { useState } from 'react';
import styles from './MessageEntry.css';
import { useHistory } from 'react-router-dom';

const { inputContainer, formContainer } = styles;

export default function MessageEntry() {
  const [entry, setEntry] = useState('');
  const [image, setImage] = useState('');
  const {
    user: { username },
    logout,
  } = useUser();
  const { messages, setMessages } = useMessage();
  const history = useHistory();

  function updateEntry() {
    if (!entry) return;
    setMessages([...messages, { username, entry, image }]);
    setEntry('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEntry();
  };

  const handleLogout = () => {
    logout(() => history.push('/'));
  };

  const avatarInput = (
    <div className={avatarInput}>
      <label>
        Avatar
        <input
          type="text"
          value={image}
          placeholder="Enter Avatar Url"
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
    </div>
  );

  return (
    <div className={inputContainer}>
      <div>
        <form onSubmit={handleSubmit} className={formContainer}>
          {messages.image ? null : avatarInput}
          <div>
            <label>
              Enter Message
              <input value={entry} onChange={(e) => setEntry(e.target.value)} />
            </label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
          <button type="button" onClick={handleLogout}>
            Sign-Out
          </button>
        </form>
      </div>
    </div>
  );
}
