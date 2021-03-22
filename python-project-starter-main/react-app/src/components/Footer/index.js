import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import "./Footer.css"
import chrisPic from "./profilePic1.jpg"
import angelicaPic from "./IMG_0883.JPG"
import elysePic from "./profileimg.jpg"
const Footer = () => {


    return (
        <div id="main-footer">
            <div id="footer-container">
                <a href="https://github.com/Csorini550"> <AiFillGithub className="icon" /> </a>
                <a href="http://chrissorini.com/">
                    <img title="Portfoli Website" className="image-wrap" src={chrisPic} id="personal-pic"></img>
                </a>
                <p className="img-description">Portfoli website</p>
                <a href="https://www.linkedin.com/in/christopher-t-41a491206/"> <AiFillLinkedin className="icon" /> </a>
                <h1>Chris Sorini</h1>
            </div>
            <div className="footer-container fix">
                <a href="https://github.com/anwilson93"> <AiFillGithub className="icon" /> </a>
                <a href="http://angelicawilson.com/">
                    <img title="Portfoli Website" className="image-wrap" src={angelicaPic} id="personal-pic"></img>
                </a>
                <p className="img-description">Portfoli website</p>
                <a href="https://www.linkedin.com/in/angelica-wilson-579b0b202/"> <AiFillLinkedin className="icon" /> </a>
                <h1>Angelica Wilson</h1>
            </div>
            <div className="footer-container fix">
                <a href="https://github.com/elyselindsays"> <AiFillGithub className="icon" /> </a>
                <a href="http://elysecodes.elysesteingold.com/">
                    <img title="Portfoli Website" src={elysePic} id="personal-pic"></img>
                </a>
                <p className="img-description">Portfoli website</p>
                <a href="https://www.linkedin.com/in/elyse-steingold-2234b299/"> <AiFillLinkedin className="icon" /> </a>
                <h1>Elyse Steingold</h1>
            </div>
        </div >
    )
}

export default Footer;