import React from "react";
import { Button, Segment } from "semantic-ui-react";
import s from "./block-intro.module.scss";

const Intro: React.FC = () => {
    return (
        <Segment id={"intro"} className={s.introBlock}>
            <h1>Креативное агенство которое вы искали</h1>
            <hr />
            <p>Мы - CustomServ, агенство по разработке креативного веб дизайна и прогрессивных мобильных приложений.</p>
            <Button inverted color="blue">
                LEARN MORE
            </Button>
            <span className={s.overlay} />
        </Segment>
    );
};

export { Intro };
