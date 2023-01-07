import React, { useContext, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './LoginModal.css'
import Logo from '../../Assets/olx-logo.png'
import { FirebaseContext } from '../../store/FirebaseContext'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'

function LoginWithEmail() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);

  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then(() => {
      alert("Successfully Logged In");
      navigate('/')
    }).catch((error) => {
      // alert("Invalid User")
      console.log("xaxa", error.message);
    })
  }
  
  return (
    <>
      <Header />
      <div>
        <div className="loginParentDiv">
          <img width="200px" height="200px" src={Logo}></img>
          <form onClick={handleLogin}>
            <label htmlFor="fname">Email</label>
            <br />
            <input
              className="input"
              type="email"
              id="fname"
              name="email"
              defaultValue="John"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="lname">Password</label>
            <br />
            <input
              className="input"
              type="password"
              id="lname"
              name="password"
              defaultValue="Doe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <button>Login</button>
          </form>
          <a href='signUp'>Signup</a>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LoginWithEmail