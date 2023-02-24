import React, { useContext,useState } from "react";
import { Container } from "react-bootstrap";
import { LoginContext } from "../../App";
import './Login.css';

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext);
    

    const [alreadyMember , setAlreadyMember] = useState(false);

    const handleFormSubmit = (e) =>{

        e.preventDefault();
    }
  return (
        <Container>
            <div className="form-container">
                <form onSubmit={handleFormSubmit}>
                    {!alreadyMember && <input className="input-field" type="text" name="name" id=""  placeholder="Name"/>}
                    <input className="input-field" type="email" name="email" id="" placeholder="Email"/>
                    <input className="input-field" type="password" name="password" id="" placeholder="Password"/>
                    {!alreadyMember && <input className="input-field" type="password" name="confirm_password" id="" placeholder="Confirm Password"/>}
                    {alreadyMember?<input className="submit-btn custom-btn" type="Submit" value={'Sign In'} readOnly/>:<input className="submit-btn custom-btn" type="Submit" value={'Sign Up'} readOnly/>}
                    {!alreadyMember ?<p className="member" onClick={()=> setAlreadyMember(!alreadyMember)}> Already a member? </p>:<p className="member" onClick={()=> setAlreadyMember(!alreadyMember)}> New Member? </p>}
                </form>
            </div>
        </Container>
  );
}

export default Login;