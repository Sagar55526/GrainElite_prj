import React from "react";
import styles from './FirmPage.css';

import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';




function FirstPage() {

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
            <div className="page-container">
                <h2 className="head">New Firm</h2>
                <hr />
                <form className="form1"><br /><br /><br />
                    <label className="form-ele">Party Name:<input type="text"/></label><br /><br />
                    <label className="form-ele">Owner Name:<input type="text"/></label><br /><br />
                    <label className="form-ele">Place:<input type="text"/></label><br /><br />
                    <label className="form-ele">Address:<input type="text"/></label><br /><br />
                    <label className="form-ele">State:<input type="text"/></label><br /><br />
                    <label className="form-ele">Country:<input type="text"/></label><br /><br />
                    <label className="form-ele">Mobile No:<input type="tel"/></label><br /><br />
                    <label className="form-ele">Brokerage Bill on Company:<input type="text"/></label><br /><br />
                    <label className="form-ele">PAN No:<input type="text"/></label><br /><br />
                    <label className="form-ele">GSTIN No:<input type="text"/></label><br />
                </form>
                <button className="btn submit-btn">submit</button>
            </div>


        </>
    )
}

export default FirstPage