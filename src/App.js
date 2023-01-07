import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import './App.css'
import LoginWithEmail from './Components/LoginModal/LoginWithEmail';
import Signup from './Components/SignUp/Signup';
import { useContext, useEffect } from 'react';
import { AuthContext, FirebaseContext } from './store/FirebaseContext';
import { getAuth, onAuthStateChanged} from "firebase/auth";
import Sell from './Components/Sell/Sell';
import Create from './Components/Create/Create';

function App() {
  const {user,setUser} = useContext(AuthContext);
  const {firebase} = useContext(FirebaseContext)
  const auth = getAuth();
  useEffect(()=>{
    console.log(user);
    onAuthStateChanged(auth,(user)=>{
      setUser(user);
      console.log(user);
    })
  })
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<LoginWithEmail/>}/>
      <Route exact path="/signUp" element={<Signup/>}/>
      <Route exact path="/post" element={<Sell/>}/>
      <Route exact path="/create" element={<Create/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
