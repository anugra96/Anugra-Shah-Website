import React from "react";
import "./TopBar.scss";
import {Person, Mail} from "@material-ui/icons";

export default function TopBar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">

                <div className="left">
                    <a href="#intro" className="logo">Anugra Shah</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>647-705-2680</span>
                    </div>

                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>anugra.96@outlook.com</span>
                    </div>
                </div>
                

                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>

            </div>

        </div>
    )
}