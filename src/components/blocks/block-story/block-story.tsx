import classNames from "classnames";
import React from "react";
import s from "./block-story.module.scss";
import logo from "../../../img/logo_letters.png";
import { Button, Image } from "semantic-ui-react";

const Story: React.FC = () => {
    return (
        <div className={classNames(s.story)}>
            <Image src={logo} size="medium" className={classNames(s.left)} />
            <div className={classNames(s.right)}>
                <h4>Наша история</h4>
                <p>
                    Идея создания нашего креативного агенства зародилась в далеком 2017 году. Два хороших друга с
                    большой мечтой - изменить мир IT индустрии, решились открыть свою компанию. Заказов совсем не было,
                    но они не отчаялись и пошли предлагать соседям создать сайт для их бизнеса.
                </p>
                <p>
                    После сотен неудачных попыток они были готовы сдаться, но им повезло, они наткнулись на начинающего
                    бизнесмена и договорились о проекте. Так и началась история компании CustomServ.
                </p>
                <p>Станьте ее частью!</p>

                <Button inverted color="blue">
                    LEARN MORE
                </Button>
            </div>
        </div>
    );
};

export { Story };