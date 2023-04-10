import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import axios from 'axios'


const Register = () => {
    const navigate = useNavigate()

    const [name, setName] = useState('');
    // const [isValid, setIsValid] = useState();                 // for error name
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');            // for email error
    const [phone, setPhone] = useState(0);
    const [profession, setProfession] = useState('');
    const [isValid, setIsValid] = useState(false);               // for incorrect profession
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState("");      // validating password error
    const [passErr, setPassErr] = useState(false)                // for password error
    const [confirmPassword, setConfirmPassword] = useState(0);
    const [error, setError] = useState("");

    const handelSubmit = async (e) => {

        e.preventDefault();
        try {
            //instead of local host we need to use hosted backend later*************
            const res = await axios.post("http://localhost:8000/", {
                "name": name,
                "email": email,
                "phone": phone,
                "profession": profession,
                "password": password,
                "confirmPassword": confirmPassword
            });

            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
        navigate("/");
    }

    // validating profession input
    const validateProfession = (input) => {
        // const regex = /^[a-zA-Z]{1,29}[a-zA-Z]$/;
        // return regex.test(input);
    };

    const handleChange = (e) => {
        const input = e.target.value;
        setProfession(input);
        // setIsValid(validateProfession(input));
    };

    // validating password 
    const PasswordHandler = (e) => {
        // const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        // const specialLetters = /[A-Za-z]+/;
        const item = e.target.value;
             setPassword(item);
        if (item.length < 6) {
            setPassErr(true)
        }
        // else if (!specialCharacters.test(e) || !specialLetters.test(e)) {
        //     setPassErr(true)
        // } 
        else {
            setPassErr(false)
        }
        
    }

    //validating email address
    const handleEmailChange = (e) => {
        const value = e.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setEmailError(<div style={{ color: "red" }}>*Please enter a valid email address</div>);
        } else {
            setEmail(value);
            setEmailError('');
        }
    }

    // validating confirm password
    const handleConfirmPassword = (e) => {
        const cpass= e.target.value
        setConfirmPassword(e.target.value);
         if (password !== cpass) {
            setError("Password and Confirm Password do not match! ");
            setValidPassword("");
        } else {
            setError("");
            setValidPassword(password);
        }
    };

    // validating passwords are matching or not
    
      
       
    



    return (
        <div className="main-div">
            <div className="left-side">
                <div className="welcome-text">Welcome Page</div>
                <div className="below-text">One line text Will be here</div>
                <div className="text-small">Sign in to continue access pages</div>
                <div className="small-text">Already Have An Account?</div>
                <Link to={'/'}>
                    <button id="btn-signin" >Sign In</button>
                </Link>
            </div>
            <div className="container">
                <form method="POST" action="/" onSubmit={handelSubmit}>
                    <div className="heading1">Register</div>
                    <div className="heading2" >Register to continue access pages</div>
                    <div className="input-box">
                        <input  onChange={(e) => { setName(e.target.value) }}
                            value={name}
                            required className="reg-input" type={'text'} placeholder={"Name"}  />
                        <input className="reg-input"  type={'email'}
                            placeholder={"Email"}
                            required
                            onChange={handleEmailChange} />
                              {(emailError && emailError.length !== 0) ? <p className="Emailerror">{emailError}</p> : null}
                        {/* to display email error */}
                    </div>
                    <div className="input-box">
                    <input
                         className="reg-input"
                            type={'text'}
                            pattern="[0-9]{1}[0-9]{9}"
                            placeholder={"Phone"}
                            onChange={(e) => { setPhone(e.target.value) }} />
                        <input
                            className="reg-input"
                            type={'text'}
                            // required
                            placeholder={"Profession"}
                            value={profession}
                            onChange={handleChange} 
                            required />

                        {(isValid == 0 && isValid < 31) ? (
                            // <span style={{ color: "green" }}>Valid profession!</span>
                            null
                        ) : (
                            <div style={{ color: "red" }}>
                                Profession can only contain upto 30 letters and numbers.
                            </div>
                        )}
                    </div>
                    <div className="input-box">
                    <input
                        className="reg-input"
                            type={'password'}
                            placeholder={"Password"}
                            required
                            onChange={PasswordHandler} />

                        <input
                        className="reg-input"
                            type={'password'}
                            required
                            placeholder={"Confirm Password"}
                            onChange={handleConfirmPassword} 
                             /> 
                             {/* // password error displaying here */}
                        {passErr ? <div style={{ color: "red" }} >Password Invalid</div> : null}   
                        <div>
                            {/* //confirm password error displaying here */}
                            {error ? <p style={{ color: "red" }}>{error}</p> : null}
                        </div>
                        
                    </div>
                    <div id="checkbox">
                    <input   type={'checkbox'} required /><span className="checkbox-text"> I agree to Terms & Condition receiving marketing and promotional materials</span>
                    </div>
                    <button className="btns-1" type="submit" >Register</button>

                </form>

            </div>

        </div>
    )
}

export default Register;


