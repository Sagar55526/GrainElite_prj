import React, { useState } from "react";
import styles from './settings.css';
import board from './board.png';
import profile from './profile.png';

import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function Settings() {

    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();

   

    return (
        <>
            <div className="main-nav-container">
                <div className="vertical"></div>
                <div className="container">
                    <button className="btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                    <h3>Welcome,<br /><span>{user.email}</span></h3>
                </div>
                <div className="navbar">
                    <ul>

                        <Link to="/firmpage">
                            <li>
                                add firm
                            </li>
                        </Link>

                        <Link to="/contractnote">
                            <li>
                                contract note
                            </li>
                        </Link>

                        <Link to="/itemmaster">
                            <li>
                                Item Master
                            </li>
                        </Link>

                        <Link to="/brokeragebill">
                            <li>
                                brokerage bill
                            </li>
                        </Link>

                        <Link to="/settings">
                            <li>
                                settings
                            </li>
                        </Link>

                    </ul>
                </div>
            </div>
            <div className="page-container temp-container">
                <div className="image-container">
                    <img src={board} alt="" className="board" />
                    <div className="profile">
                        <img
                            src={profile}
                            className="profile"
                        />
                    </div>
                    <div
                        className="profile-info"
                    >
                        <h3>
                            Hello,
                            <br />
                            <span className="user-email">{user.email}</span>
                        </h3>
                    </div>
                    <div className="user-info">
                        <div className="user-text-info">
                        <label htmlFor="">Firm Name: -----------</label><br /><br />
                        <label htmlFor="">User ID: ---------------</label><br /><br />
                        <label htmlFor="">City: ------------------</label>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Settings