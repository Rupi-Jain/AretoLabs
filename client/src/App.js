import UserText from './components/UserText';
import UserPosts from './components/UserPosts';
import Login from './components/Login';
import { atom, useRecoilState } from 'recoil'
import { user as userAtom} from './recoil/atom'

import './App.css';


function App() {
  const [user, setUser] = useRecoilState(userAtom);

  return (
    <div>  
       
      <Login />  
   
    </div>
  );
}

export default App;
