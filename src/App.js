import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/ListFriend';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/listFriend" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
