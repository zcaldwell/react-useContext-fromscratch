import { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const loginSuccessful =
      username === process.env.AUTH_USERNAME &&
      password === process.env.AUTH_PASSWORD;
    if (loginSuccessful) setUser({ username });
    return loginSuccessful;
  };

  const logout = (callback) => {
    setUser(null);
    callback();
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('user must be used within provider');
  }
  return context;
};

export { UserProvider, useUser };
