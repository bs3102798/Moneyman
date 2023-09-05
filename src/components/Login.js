import React, { useState } from 'react';

const Login = () => {
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const handleLoginUsernameChange = (event) => {
        setLoginUsername(event.target.value);
    };

    const handleLoginPasswordChange = (event) => {
        setLoginPassword(event.target.value);
    };

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        const loginData = {
            username: loginUsername,
            password: loginPassword,
        };
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
                <div>
                    <label>
                        Username:
                        <input type="text" value={loginUsername} onChange={handleLoginUsernameChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" value={loginPassword} onChange={handleLoginPasswordChange} />
                    </label>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

const Register = () => {
    const [signupUsername, setSignupUsername] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupEmail, setSignupEmail] = useState('');

    const handleSignupUsernameChange = (event) => {
        setSignupUsername(event.target.value);
    };

    const handleSignupPasswordChange = (event) => {
        setSignupPassword(event.target.value);
    };

    const handleSignupEmailChange = (event) => {
        setSignupEmail(event.target.value);
    };

    const handleRegisterSubmit = async (event) => {
        event.preventDefault();

        const signupData = {
            username: signupUsername,
            password: signupPassword,
            email: signupEmail,
        };

        // Add your registration logic here
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegisterSubmit}>
                <div>
                    <label>
                        Username:
                        <input type="text" value={signupUsername} onChange={handleSignupUsernameChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" value={signupPassword} onChange={handleSignupPasswordChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="email" value={signupEmail} onChange={handleSignupEmailChange} />
                    </label>
                </div>
                <div>
                    <button type="submit">Sign-up</button>
                </div>
            </form>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <div className="auth-box">
                <Login />
                <Register />
            </div>
        </div>
    );
};

export default App;
