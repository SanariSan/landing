import React from "react";
import { Button, Segment } from "semantic-ui-react";
import classNames from "classnames";
import "semantic-ui-css/semantic.min.css";
import s from "./block-intro.module.scss";

const Intro: React.FC = () => {
    return (
        <Segment className={s.intro}>
            <h1 className={classNames("light")}>Креативное агенство которое вы искали</h1>
            <hr />
            <p className={classNames("light")}>
                Мы - CustomServ, агенство по разработке креативного веб дизайна и прогрессивных мобильных приложений.
            </p>
            <Button inverted color="blue">
                LEARN MORE
            </Button>
            <div className={s.overlay} />
        </Segment>
    );
};

export { Intro };
