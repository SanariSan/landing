import classNames from "classnames";
import React from "react";
import pc from "../../../img/pc.png";
import brush from "../../../img/brush.png";
import phone from "../../../img/phone.png";
import data from "../../../img/data.png";
import server from "../../../img/server.png";
import heart from "../../../img/heart.png";
import s from "./block-abilities.module.scss";
import { Card } from "../../../components";
import { Segment } from "semantic-ui-react";

const Abilities: React.FC = () => {
    return (
        <Segment id={"abilities"} className={classNames(s.abilitiesBlock)}>
            <h2>Мы можем все и даже больше</h2>
            <h4>Оказываем комлексное обслуживание вашего бизнеса</h4>
            <hr />
            <div className={classNames(s.cards)}>
                <div className={classNames(s.cardsRow1)}>
                    <Card
                        img={pc}
                        header={"WEB DESIGN & DEVELOPMENT"}
                        text={`Предоставим полный спектр работ по поддержке и развитию IT-инфраструктуры в зависимости от
                            ваших потребностей. `}
                    />
                    <Card
                        img={brush}
                        header={"BRANDING IDENTITY"}
                        text={`Разработаем креативный логотип для вышей компании, доработаем существующий.`}
                    />
                    <Card
                        img={phone}
                        header={"MOBILE APP"}
                        text={`Поможем расширить аудиторию с помощью мобильного приложения. Охват всех платформ благодаря
                        современному подходу.`}
                    />
                </div>
                <div className={classNames(s.cardsRow2)}>
                    <Card
                        img={data}
                        header={"SEARCH ENGINE OPTIMIZATION"}
                        text={`Продвинем ваш сайт в топы поисковых систем, подключим грамотную таргет рекламу по целевой
                        аудитории.`}
                    />
                    <Card
                        img={server}
                        header={"SECURE DATA"}
                        text={`Защитим ваши данные и разместим все на мощном серверном оборудовании.`}
                    />
                    <Card
                        img={heart}
                        header={"MADE WITH LOVE"}
                        text={`Для нас важен каждый клиент, учтем все пожелания и выведем ваш бизнес на новый уровень.`}
                    />
                </div>
            </div>
            <span className={s.overlay} />
        </Segment>
    );
};

export { Abilities };
