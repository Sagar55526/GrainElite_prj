import React from "react";
import styles from './ItemMaster.css';

import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';


function ItemMasterPage() {

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
                <h2 className="head">Item Master</h2>
                <hr />
                <div className="input-container">
                    <label for="entry_no">Entry Name:</label>
                    <input type="number" id="entry_no" name="entry_no" required />
                    <label for="item" style={{ marginLeft: "20px" }}>S. no:</label>
                    <input type="text" id="item" name="item" required /><br /><br /><br />
                    <label for="item" style={{ marginLeft: "20px" }}>Group:</label>
                    <input type="text" id="item" name="item" required /><br /><br /><br />
                    <label for="item" style={{ marginLeft: "20px" }}>Brokerage on alternate unit 1 <input type="text" placeholder="none" style={{width:"80px"}}/></label><label htmlFor="">=</label><input type="text" style={{width:"80px"}}/><label htmlFor="">X Weight </label>
                  <hr style={{width:"80%",marginTop:"50px"}}/>
                </div>
            </div>
        </>
    )
}

export default ItemMasterPage