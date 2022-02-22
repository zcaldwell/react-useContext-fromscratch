import React from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import useForm from '../../hooks/useForm';

export default function Auth() {
  const history = useHistory();
  const location = useLocation();
  const user = useUser();
  const [error, setError] = useState(null);

  const { formState, handleFormChange } = useForm({
    username: '',
    password: '',
  });

  const { from } = location.state || { from: { pathname: '/' } };

  const handleLogin = (e) => {
    e.preventDefault();
    const loginSuccessful = user.login(formState.username, formState.password);

    if (loginSuccessful) {
      history.replace(from.pathname);
    } else {
      setError('Login failed');
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>
          Username
          <input type="username" name="username" onChange={handleFormChange} />
        </label>
        <label>
          Password
          <input type="password" name="password" onChange={handleFormChange} />
        </label>
        <button type="submit">Login</button>
      </form>
      {error && <h2>{error}</h2>}
    </div>
  );
}
