import React, { useState, useContext } from 'react';
import Logo from '../../Assets/olx-logo.png'
import { FirebaseContext } from '../../store/FirebaseContext';
import Header from '../Header/Header';
import './Signup.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '../../firebase/config';
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  // Firebase Context Destructuring
  const { firebase } = useContext(FirebaseContext)
  const auth = getAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("db", db);
    console.log("Started");
    try {
      createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
        console.log("userCredential", userCredential);
        await addDoc(collection(db, "users"), {
          id: userCredential.user.uid,
          username: username,
          email: email,
          phone: phone
        }).then(() => {
          navigate('/login')
        })
        console.log("SuccessFully Created");
        alert("SuccessFully Created");
      })
    } catch (error) {
      console.log("error", error);
      const errorCode = error.code;
      console.log("errorCode", errorCode);
      const errorMessage = error.message;
      console.log("errorMessage", error);
    }
  }
  return (
    <>
      <Header />
      <div>
        <div className="signupParentDiv">
          <img width="200px" height="200px" src={Logo}></img>
          <form onClick={handleSignup}>
            <label htmlFor="fname">Username</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="name"
              defaultValue="John"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
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
            <label htmlFor="lname">Phone</label>
            <br />
            <input
              className="input"
              type="number"
              id="lname"
              name="phone"
              defaultValue="Doe"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
            <button>Signup</button>
          </form>
          <a>Login</a>
        </div>
      </div>
      <Footer />
    </>
  );
}
