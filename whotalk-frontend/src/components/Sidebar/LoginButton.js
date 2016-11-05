import React from 'react';
import { Link } from 'react-router';


const SignInButton = ({onClick}) => {
    return (
        <div className="login-button" onClick={onClick}>
            <Link className="huge ui button grey" to='/auth'>
                Sign In
            </Link>
        </div>
    );
};

export default SignInButton;