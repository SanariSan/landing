import classNames from "classnames";
import React from "react";
import { Button, Image, Segment } from "semantic-ui-react";
import s from "./block-examples.module.scss";
import ex1 from "../../../img/ex1.png";
import ex2 from "../../../img/ex2.png";

const Examples: React.FC = () => {
    return (
        <Segment id={"examples"} className={classNames(s.examplesBlock)}>
            <h2>Наши работы</h2>
            <div className={classNames(s.cardsWrapper)}>
                <span className={s.overlay} />

                <div className={classNames(s.cards)}>
                    <Image as="a" src={ex1} />
                    <Image as="a" src={ex2} />
                </div>
            </div>
            <Button inverted color="blue">
                LOAD MORE
            </Button>
        </Segment>
    );
};

export { Examples };
