import React from "react";
import classNames from "classnames";
import s from "./block-footer.module.scss";
import { Button, Icon, Image, Input } from "semantic-ui-react";
import logo from "../../../img/logo_old.png";

const Footer: React.FC = () => {
    return (
        <div className={classNames(s.footer)}>
            <div className={classNames(s.wrapper)}>
                <div className={classNames(s.left)}>
                    <Image src={logo} size="small" className={classNames(s.logo)} />
                    <p>
                        Компания CustomServ является зарегистрированным торговым знаком. Любые претензии направлять на
                        электронный адрес support@customserv.ru
                    </p>
                </div>
                <div className={classNames(s.center)}>
                    <h4>Наш офис</h4>
                    <p>
                        <Icon name="building outline" inverted />
                        Санкт-Петербург, Политехническая ул., 29, Санкт-Петербург, 195251
                    </p>
                    <p>
                        <Icon name="phone" inverted />
                        926-39-93
                    </p>
                </div>
                <div className={classNames(s.right)}>
                    <h4>Будь в курсе</h4>
                    <div className={classNames(s.mailing)}>
                        <Input placeholder="Подпишись на рассылку" />
                        <Button icon="paper plane outline" />
                    </div>
                    <div className={classNames(s.socials)}>
                        <Button icon="facebook f" size="big" />
                        <Button icon="twitter" size="big" />
                        <Button icon="world" size="big" />
                        <Button icon="instagram" size="big" />
                        <Button icon="google plus g" size="big" />
                    </div>
                    <p>
                        Copyright 2021 <Icon name="copyright outline" inverted /> CustomServ
                    </p>
                </div>
            </div>
            <span className={s.overlay} />
        </div>
    );
};

export { Footer };
