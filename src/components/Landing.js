import React from 'react';
import { NavLink } from 'react-router-dom';
import './Landing.css';
import Button from 'react-bootstrap/Button';

//import logoshesha from './images/logoshesha.png';


export const Landing = () => {
    return (<>
        <div className="bg">
        <h1 className="text-center text-light my-5" style={{position:"relative",top:"200px",}}>Welcome on Our Food Recipe Website "SHESHA"<br/><span style={{color:"green",fontSize:"25px", fontWeight:"600",}}>We Hope You Enjoy</span></h1>
        <p className="text-center text-light my-5"> </p>
        <h1 className="text-center text-light my-5" style={{position:"relative",top:"200px",}}>To View Our Website and See What's Best For You :<br/><span style={{color:"whitesmoke",fontSize:"25px",}}>Register Now And Thank You ! </span></h1>
        <div className="text-center">
        <NavLink to="/Register"><Button variant="outline-light" style={{ position: "relative", top: "250px", left: "-3%", fontWeight:"600", }}>Sign Up</Button>{' '}</NavLink>
        <NavLink to="/Login"><Button variant="outline-light" style={{ position: "relative", top: "250px", left: "4%", fontWeight:"600", }}>LogIn</Button>{' '}</NavLink> 
        </div>
        </div>
    </>)
}
