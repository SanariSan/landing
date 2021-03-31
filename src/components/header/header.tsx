import classNames from "classnames";
import React from "react";
import { Image } from "semantic-ui-react";
import logo from "../../img/logo_old.png";
import s from "./header.module.scss";

const Header: React.FC = () => {
    return (
        <div className={classNames(s.header)}>
            <Image src={logo} size="small" className={classNames(s.logo)} />
            <nav className={classNames(s.menu)}>
                <ul>
                    <li>
                        <a href="#">HOME</a>
                    </li>
                    <li>
                        <a href="#">ABOUT</a>
                    </li>
                    <li>
                        <a href="#">EXPERTISE</a>
                    </li>
                    <li>
                        <a href="#">WORKS</a>
                    </li>
                    <li>
                        <a href="#">PEOPLE SAY</a>
                    </li>
                    <li>
                        <a href="#">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export { Header };
