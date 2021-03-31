import classNames from "classnames";
import React from "react";
import { Image } from "semantic-ui-react";
import pc from "../../../img/pc.png";
import brush from "../../../img/brush.png";
import phone from "../../../img/phone.png";
import data from "../../../img/data.png";
import server from "../../../img/server.png";
import heart from "../../../img/heart.png";
import s from "./block-abilities.module.scss";

const Abilities: React.FC = () => {
    return (
        <div className={classNames(s.abilities)}>
            <h2>Мы можем все и даже больше</h2>
            <h4>Оказываем комлексное обслуживание вашего бизнеса</h4>
            <hr />
            <div className={classNames(s.cards)}>
                <div className={classNames(s.cardsRow1)}>
                    <div className={classNames(s.card)}>
                        <Image src={pc} size="mini" className={classNames(s.left)} />
                        <h3>WEB DESIGN & DEVELOPMENT</h3>
                        <p>
                            Предоставим полный спектр работ по поддержке и развитию IT-инфраструктуры в зависимости от
                            ваших потребностей.
                        </p>
                    </div>
                    <div className={classNames(s.card)}>
                        <Image src={brush} size="mini" className={classNames(s.left)} />
                        <h3>BRANDING IDENTITY</h3>
                        <p>Разработаем креативный логотип для вышей компании, доработаем существующий.</p>
                    </div>
                    <div className={classNames(s.card)}>
                        <Image src={phone} size="mini" className={classNames(s.left)} />
                        <h3>MOBILE APP</h3>
                        <p>
                            Поможем расширить аудиторию с помощью мобильного приложения. Охват всех платформ благодаря
                            современному подходу.
                        </p>
                    </div>
                </div>
                <div className={classNames(s.cardsRow2)}>
                    <div className={classNames(s.card)}>
                        <Image src={data} size="mini" className={classNames(s.left)} />
                        <h3>SEARCH ENGINE OPTIMIZATION</h3>
                        <p>
                            Продвинем ваш сайт в топы поисковых систем, подключим грамотную таргет рекламу по целевой
                            аудитории.
                        </p>
                    </div>
                    <div className={classNames(s.card)}>
                        <Image src={server} size="mini" className={classNames(s.left)} />
                        <h3>SECURE DATA</h3>
                        <p>Защитим ваши данные и разместим все на мощном серверном оборудовании.</p>
                    </div>
                    <div className={classNames(s.card)}>
                        <Image src={heart} size="mini" className={classNames(s.left)} />
                        <h3>MADE WITH LOVE</h3>
                        <p>Для нас важен каждый клиент, учтем все пожелания и выведем ваш бизнес на новый уровень.</p>
                    </div>
                </div>
            </div>
            <span className={s.overlay} />
        </div>
    );
};

export { Abilities };
