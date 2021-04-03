import classNames from "classnames";
import React from "react";
import { Image } from "semantic-ui-react";
import s from "./block-abilities-card.module.scss";

interface ICard {
    img: string;
    header: string;
    text: string;
}

const Card: React.FC<ICard> = ({ img, header, text }) => {
    return (
        <div className={classNames(s.card)}>
            <Image src={img} size="mini" className={classNames(s.left)} />
            <h3>{header}</h3>
            <p>{text}</p>
        </div>
    );
};

export { Card };
