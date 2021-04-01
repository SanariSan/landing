import classNames from "classnames";
import React from "react";
import { Button, Input } from "semantic-ui-react";
import s from "./block-form.module.scss";

const Form: React.FC = () => {
    return (
        <div className={classNames(s.formBlock)}>
            <div className={classNames(s.left)}>
                <h2>Связаться с нами</h2>
                <form onSubmit={e => e.preventDefault()}>
                    <Input placeholder="Name" />
                    <Input placeholder="Email" />
                    <Input placeholder="Subject" />
                    <textarea placeholder="Message" rows={6} />
                    <Button inverted color="blue">
                        SUBMIT
                    </Button>
                </form>
            </div>
            <div className={classNames(s.right)}>
                <h2>Довольные клиенты</h2>
                <p>Новый Город</p>
                <p>МАЯК-1</p>
                <p>СтройМоноит</p>
                <p>Аркада</p>
            </div>
        </div>
    );
};

export { Form };
