import { useMessage } from '../../context/MessageContext';
import { useUser } from '../../context/UserContext';
import { useState } from 'react';

export default function MessageEntry() {
  const [entry, setEntry] = useState('');
  const [name, setName] = useState('');
  const { user, setUser } = { useUser };
  const { message, setMessage } = { useMessage };

  const nameInput = (
    <div>
      <label>Name</label>
      <input
        value={name}
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
  const displayUser = user ? `${user} is signed in.` : 'Please Sign In';
  return (
    <>
      <div>
        <h1>{displayUser}</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          {user ? null : MessageEntry}
          <div>
            <input>Enter Message</input>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
          {user ?? (
            <button
              onClick={() => {
                setUser('');
                setEntry('');
              }}
            >
              Sign-Out
            </button>
          )}
        </form>
      </div>
    </>
  );
}
