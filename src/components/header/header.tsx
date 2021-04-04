import classNames from "classnames";
import React from "react";
import { Image } from "semantic-ui-react";
import logo from "../../img/logo_old.png";
import s from "./header.module.scss";

const Header: React.FC = () => {
    return (
        <div className={classNames(s.headerBlock)}>
            <Image src={logo} size="small" className={classNames(s.logo)} />

            <nav className={classNames(s.menu)}>
                <ul>
                    <li>
                        <a href="#intro">HOME</a>
                    </li>
                    <li>
                        <a href="#story">ABOUT</a>
                    </li>
                    <li>
                        <a href="#abilities">EXPERTISE</a>
                    </li>
                    <li>
                        <a href="#examples">WORKS</a>
                    </li>
                    <li>
                        <a href="#reviews">PEOPLE SAY</a>
                    </li>
                    <li>
                        <a href="#form">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export { Header };
