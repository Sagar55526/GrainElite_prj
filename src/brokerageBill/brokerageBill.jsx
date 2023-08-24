import React, { useState } from "react";
import styles from "./brokerageBill.css";

import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';


function BrokerageBill() {

    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();

    const [lowerContainerVisible, setLowerContainerVisible] = useState(false);

    const handleToggleLowerContainer = () => {
        setLowerContainerVisible(!lowerContainerVisible);
    };

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
                <h2 className="head">Brokerage Bill</h2>
                <hr />
                <div className="uppercontainer">
                    <label className="form-ele">Bill No:<input style={{ width: "100px" }} type="number" /></label>  <label style={{ marginLeft: "250px" }} className="form-ele">Contracts from:<input style={{ width: "130px" }} type="date" /></label><label style={{ marginLeft: "600px" }} className="form-ele">to:<input style={{ width: "130px" }} type="date" /></label>    <br /><br />
                    <label className="form-ele">Firm Name:<input style={{ width: "450px" }} type="number" /></label> <br /><br />
                    <label className="form-ele">Item:<input style={{ width: "150px" }} type="number" /></label>     <label className="form-ele" style={{ marginLeft: "300px" }}>Include Transaction:<input style={{ width: "250px" }} type="number" /></label>
                    <button
                    className="btn submit-btn2"
                    onClick={handleToggleLowerContainer}
                >
                    {lowerContainerVisible ? "Disable" : "Submit"}
                </button>
                </div>
                <div className="lowercontainer" style={{ display: lowerContainerVisible ? "block" : "none" }}>
                    <table>
                        <thead>
                            <tr>
                                <th>Bill No</th>
                                <th>Buyer/Seller</th>
                                <th>Item Name</th>
                                <th style={{padding:"0 35px"}}>Brokerage(in Qtl)</th>
                                <th>Rate</th>
                                <th>Quantity(in Qtl)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>121081053</td>
                                <td>Paliwal trading company, Banapura</td>
                                <td>Wheat</td>
                                <td>8₹</td>
                                <td>2450</td>
                                <td>220</td>
                            </tr>
                            <tr>
                                <td>121081033</td>
                                <td>Rathod Trading Company, Banapura</td>
                                <td>Wheat</td>
                                <td>8₹</td>
                                <td>2550</td>
                                <td>280</td>
                            </tr>
                            <tr>
                                <td>151021040</td>
                                <td>Laxminarayna Traders, Khandwa</td>
                                <td>Moong</td>
                                <td>20₹</td>
                                <td>6560</td>
                                <td>500</td> 
                            </tr>
                            <tr>
                                <td>201210822</td>
                                <td>Sudarshan Trading, Sanawad</td>
                                <td>Wheat</td>
                                <td>8₹</td>
                                <td>2400</td>
                                <td>250</td>
                            </tr>
                            <tr>
                                <td>141520249</td>
                                <td>Narmada Krishi Udyog, Banapura</td>
                                <td>Moong</td>
                                <td>20₹</td>
                                <td>6850</td>
                                <td>300</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default BrokerageBill