import Home from './views/Home/Home';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <UserProvider>
      <Home />
    </UserProvider>
  );
}
