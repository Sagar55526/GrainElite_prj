import React from 'react';
import styles from './Intro.css';
import { useAuth0 } from "@auth0/auth0-react";

import image from './left_side_img.gif';
import btmcorns from './corn.gif';
import corn from './side_corn.gif';

function Intro() {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    const handleLogin = () => {
        loginWithRedirect();
    };

    const handleLogout = () => {
        logout({ returnTo: window.location.origin });
    };

    if (isAuthenticated) {
        window.location.href = '/contractnote'; 
    }

    return (
        <>
        <div style={{width:"800px",height:"630px",zIndex:"1" ,padding:"20px" ,border: "3px solid rgba(205, 177, 50, 0.704)", borderRadius:"20px", backgroundColor:"rgba(161, 164, 117, 0.5)" }}>
 
            <div className='left_container'><img src={image} alt="" /></div>
            <div className='right_container'><h1>We are <span>GrainElite</span></h1>
            <h2 style={{marginBottom: "10px",textTransform:"capitalize"}}>your own portfolio</h2>
            {isAuthenticated ? (
                <button className='btn' onClick={handleLogout}>Log Out</button>
            ) : (
                <button className='btn'  onClick={handleLogin}>Log In</button>
            )}
            </div>
            </div>
            <img className='corn_svg1 gif' src={corn} alt="" />
            <img className='btmcorn gif' src={btmcorns} alt="" />
            <img className='btmcorn1 gif' src={btmcorns} alt="" />
            <img className='corn_svg gif' src={corn} alt="" />
        </>
    );
}

export default Intro;
