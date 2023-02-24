import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { LoginContext } from "../../App";
import './Login.css';
import { initializeApp } from 'firebase/app';
import firebaseConfig from "./firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const app = initializeApp(firebaseConfig);
function Login() {
    const auth = getAuth(app);
    const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext);
    const navigate = useNavigate();

    const [alreadyMember, setAlreadyMember] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('UserEmail').value;
        const isValidEmail = /\S+@\S+\.\S+/.test(email);
        const password = document.getElementById('UserPass').value;



        const isValidPassword = password.length >= 4;
        if (!alreadyMember) {
            const confirmPass = document.getElementById('PassConfirm').value;
            if (password !== confirmPass) {
                alert('Passwords do not match');
            }
            if (isValidEmail && isValidPassword && password === confirmPass) {
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // Signed in 
                        setIsLoggedIn(true);
                        navigator.vibrate(100);
                        navigate('/place_order');
                        // ...
                    })
                    .catch((error) => {
                        const errorMessage = error.message;
                        alert(errorMessage);
                        // ..
                    });

            }
            else {
                alert("Please enter a valid email and password of 4 digit ");
            }
        }
        else {
            if (isValidEmail && isValidPassword) {
                const auth = getAuth();
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        setIsLoggedIn(true);
                        navigator.vibrate(100);
                        navigate('/place_order');

                        // ...
                    })
                    .catch((error) => {
                        const errorMessage = error.message;
                        alert(errorMessage);
                    });
            }
        }


    }
    return (
        <Container>
            <div className="form-container">
                <form onSubmit={handleFormSubmit}>
                    {
                    !alreadyMember && <input className="input-field" type="text" name="name" id="UserName" placeholder="Name" />
                    }
                    <input className="input-field" type="email" name="email" id="UserEmail" placeholder="Email" />
                    <input className="input-field" type="password" name="password" id="UserPass" placeholder="Password" />
                    {!alreadyMember && <input className="input-field" type="password" name="confirm_password" id="PassConfirm" placeholder="Confirm Password" />}
                    {alreadyMember ? <input className="submit-btn custom-btn" type="Submit" value={'Sign In'} readOnly /> : <input className="submit-btn custom-btn" type="Submit" value={'Sign Up'} readOnly />}
                    {!alreadyMember ? <p className="member" onClick={() => setAlreadyMember(!alreadyMember)}> Already a member? </p> : <p className="member" onClick={() => setAlreadyMember(!alreadyMember)}> New Member? </p>}
                </form>
            </div>
        </Container>
    );
}

export default Login;