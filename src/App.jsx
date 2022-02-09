import Home from './views/Home/Home';
import { UserProvider } from './context/UserContext';
import './App.css';

export default function App() {
  return (
    <UserProvider>
      <Home />
    </UserProvider>
  );
}
