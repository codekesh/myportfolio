import React from "react";
import { BsInstagram, BsFacebook, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

function Connect() {
    return (
        <div className="connect">
            <h1>Connect With Me</h1>
            <div className="connection">
                <a href="https://github.com/codekesh">
                    <BsGithub size={30} className="icons" />
                </a>
                <a href="https://www.linkedin.com/in/keshav-t-488684112/">
                    <BsLinkedin size={30} className="icons" />
                </a>
                <a href="mailto: 201117@iiitt.ac.in">
                    <AiOutlineMail size={30} className="icons" />
                </a>
                <a href="https://www.instagram.com/keshavtulsiyan/">
                    <BsInstagram size={30} className="icons" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100010782427183">
                    <BsFacebook size={30} className="icons" />
                </a>
                <a href="https://twitter.com/tulsyan_keshav">
                    <BsTwitter size={30} className="icons" />
                </a>
            </div>
        </div>
    )
}

export default Connect