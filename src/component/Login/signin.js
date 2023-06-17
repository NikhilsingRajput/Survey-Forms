import "./signin.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";



const Sign_in = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const url ='https://surveyform-nikhilrajput.onrender.com'
    // const url = 'http://localhost:8000'
    const Authsignin = async (e) => {
        // console.log(email, password)
        e.preventDefault()
        try {
            
            const res = await axios.post(url+"/signin", {
                "email": email,
                "password": password
            });

            navigate("/Surveylist")
            console.log(res.data);
        } catch (error) {
            console.error(error);
            alert("Invalid Credientials")
        }
       
    }


return <div className="frontpage">
    <div className="left-side">
        <div className="welcome-text">Welcome Page</div>
        <div className="below-text">One line text Will be here</div>
        <div className="text-small">Sign in to continue access pages</div>
        <div className="small-text">Don’t Have An Account?</div>
        <Link to={"/Register"}>
            <button className="btns">Register</button>
        </Link>
       

    </div>
    <div className="right-side">
        <div className="Inner-box">
            <div className="Sign-in-heading">Sign In</div>
            <div className="Below-heading">Sign in to continue access pages</div>

            <form method="POST" action="" onSubmit={Authsignin}>
                <div className="inp">
                    <input placeholder="Email"
                        type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="inp">
                    <input className="hov"
                        placeholder="Password" type="password"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="signin-button" type="submit" >Sign In</button>
            </form>
        </div>
    </div>
</div>

}

export default Sign_in