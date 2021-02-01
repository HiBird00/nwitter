import userEvent from '@testing-library/user-event';
import AuthForm from 'components/AuthForm';
import { authService, firebaseInstance } from 'fbase';
import React, { useState } from 'react';
import "css/Auth.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';

const Auth = () => {
    const onSocialClick = async (event) => {
        const { 
            target: { name },
        } = event;
        let provider;
        if(name === "google"){
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        }else if(name === "github"){
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        const data  = await authService.signInWithPopup(provider);
        console.log(data);
    }


return (
    <div className="authContainer">
        <FontAwesomeIcon icon={faTwitter}
        size="3x"
        color={"#1da1f2"}
        style={{marginBottom:30}}/>
        <AuthForm />
        <div className="authBtns">
            <button onClick={onSocialClick} name="google" className="authBtn">Continue with Google
                <FontAwesomeIcon icon={faGoogle} size="1x" color="black" style={{marginLeft:5}}/>
            </button>
            <button onClick={onSocialClick} name="github" className="authBtn">Continue with Github
                <FontAwesomeIcon icon={faGithub} size="1x" color="black" style={{marginLeft:5}}/>
            </button>
        </div>
    </div>
    )
};
export default Auth;