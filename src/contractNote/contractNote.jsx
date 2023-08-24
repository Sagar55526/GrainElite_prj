import React from "react";
import styles from './contractNote.css';

import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';


function ContractNote() {

    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();

    return(
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
            <h2 className="head">Contract Note</h2>
                <hr />
            <form style={{fontSize:"20px"}}>
            <div className="form-group">
                <label for="entry_no">Entry No:</label>
                <input type="number" id="entry_no" name="entry_no" required/>
                <label for="date" style={{marginLeft:"20px"}}>Date:</label>
                <input type="date" id="date" name="date" required/>
                <label for="item" style={{marginLeft:"20px"}}>Item Name:</label>
                <input type="text" id="item" name="item" required/>
            </div><br /><br /><br />
            <div className="form-group">
                <label for="seller">Seller Name:</label>
                <input type="text" id="seller" name="seller" required/>
                <label for="buyer" style={{marginLeft:"20px"}}>Buyer Name:</label>
                <input type="text" id="buyer" name="buyer" required/>
            </div><br /><br /><br />
            <div className="form-group">
                <label for="qty">Quantity:</label>
                <input type="number" id="qty" name="qty" required/>
                <label for="rate" style={{marginLeft:"20px"}}>Rate:</label>
                <input type="number" id="rate" name="rate" required/>  
            </div><br /><br /><br />
            <div className="form-group">
                <label for="s_brokerage">Seller Brokerage:</label>
                <input type="number" id="s_brokerage" name="s_brokerage" required/>
                <label for="b_brokerage" style={{marginLeft:"20px"}}>Buyer Brokerage:</label>
                <input type="number" id="b_brokerage" name="b_brokerage" required/>
            </div><br /><br /><br />
            <div className="form-group">
                <label for="remark">Remark:</label>
                <input type="text" name="remark" style={{width:"500px",height:"50px"}}/>
                {/* <textarea name="remark" id="remark" cols="60" rows="3"></textarea> */}
            </div><br /><br /><br />
            <div className="buttons">
                <button className="btn" style={{margin:"0 20px 0 20px"}}>Reset</button>
                <button className="btn" style={{margin:"0 30px 0 30px"}}>Cancel</button>
                <button className="btn" style={{margin:"0 20px 0 20px"}}>Save</button>
            </div>
        </form>
        </div>
        </>
    )
}

export default ContractNote