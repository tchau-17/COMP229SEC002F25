import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css'; 

export default function Layout() {
    return (
        <>
            <div className="layout-container">
                <div className="nav-buttons-container">
                    <Link to="/homepage"><button className="nav-button">Home Page</button></Link>
                    <Link to="/aboutme"><button className="nav-button">About Me</button></Link>
                    <Link to="/projectspage"><button className="nav-button">Projects</button></Link>
                    <Link to="/service"><button className="nav-button">Service</button></Link>
                    <Link to="/contact"><button className="nav-button">Contact Me</button></Link>
                </div>
            </div>
            <br/>
            <hr />
        </>
    );
}