import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import LoginStyles from "../../styles/LoginStyles";
import { auth } from '../../firebase';

const Login = () => {

    const loginStyles = LoginStyles();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignIn = (e) => {
        e.preventDefault();
        //some fancy firebase login here
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            })
            .catch(error => alert(error.message))
    }

    const handleRegister = (e) => {
        e.preventDefault();
        //some fancy firebase register here. 
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) history.push('/');
            })
            .catch(error => alert(error.message))
    }

    const history = useHistory();

    return (
        <div className={loginStyles.root}>
            <Link to='/'>
                <img
                    className={loginStyles.logo}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>
            <div className={loginStyles.loginContainer}>
                <h1>Sign-in</h1>
                <form className={loginStyles.form}>
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        className={loginStyles.signInButton}
                        onClick={handleSignIn}
                    >Sign In</button>

                    <p>
                        By signing-in you agree to Amazon Fake Clone's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                   </p>

                    <button
                        className={loginStyles.createAccountButton}
                        onClick={handleRegister}
                    >Create your Amazon Account</button>

                </form>
            </div>
        </div>
    );
}

export default Login;