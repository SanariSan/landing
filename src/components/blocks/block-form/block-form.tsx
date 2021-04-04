import classNames from "classnames";
import React, { useRef, useState } from "react";
import { Button, Input, TextArea, Modal, Header, Icon, Segment } from "semantic-ui-react";
import { LinkService } from "../../../services";
import { config } from "../../../config";
import s from "./block-form.module.scss";
import { IStatusMessage } from "./block-form.type";
import {
    INIT_EMAIL_STATE,
    INIT_MESSAGE_STATE,
    INIT_NAME_STATE,
    INIT_STATUS_MESSAGE_STATE,
    INIT_SUBJECT_STATE,
} from "./block-form.const";

const Form: React.FC = () => {
    const nameRef: any = useRef<HTMLInputElement>(null);
    const emailRef: any = useRef<HTMLInputElement>(null);
    const subjectRef: any = useRef<HTMLInputElement>(null);
    const messageRef: any = useRef<HTMLInputElement>(null);

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [emptyFields, setEmptyFields] = useState<string[]>([]);
    const [statusMessage, setStatusMessage] = useState<IStatusMessage>(INIT_STATUS_MESSAGE_STATE);

    const resetStatusMessage = (): any => setStatusMessage(INIT_STATUS_MESSAGE_STATE);
    const resetFormFields = (): any => {
        setName(INIT_NAME_STATE);
        setEmail(INIT_EMAIL_STATE);
        setSubject(INIT_SUBJECT_STATE);
        setMessage(INIT_MESSAGE_STATE);
    };

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value);
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value);
    const handleSubject = (e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.currentTarget.value);
    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.currentTarget.value);
    const handleModal = () => {
        resetStatusMessage();
        resetFormFields();
    };

    const validateForm = () => {
        let passed = true;
        let emptyFieldsLocal = [];

        setEmptyFields([]);

        if (!name) {
            emptyFieldsLocal.push("name");
        }
        if (!email) {
            emptyFieldsLocal.push("email");
        }
        if (!subject) {
            emptyFieldsLocal.push("subject");
        }
        if (!message) {
            emptyFieldsLocal.push("message");
        }
        if (emptyFieldsLocal.length) {
            passed = false;
            setEmptyFields(emptyFieldsLocal);
        }

        return passed;
    };

    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateForm()) {
            LinkService.post<{ status: "OK" | "ERR"; data?: Object; err?: string }>({
                path: config.appealUrl,
                body: { name, email, subject, message },
            })
                .then(({ status, data, err }) => {
                    if (status === "ERR") {
                        console.log(err);
                        return setStatusMessage({ status: false, message: "Произошла ошибка, подробно в консоли" });
                    }

                    console.log(data);
                    setStatusMessage({ status: true, message: "Заявка получена" });
                })
                .catch(err => {
                    console.log(err);
                    setStatusMessage({
                        status: false,
                        message: "Произошла непредвиденная ошибка, подробно в консоли",
                    });
                });
        }
    };

    return (
        <Segment id={"form"} className={classNames(s.formBlock)}>
            <div className={classNames(s.left)}>
                <h2>Связаться с нами</h2>
                <form onSubmit={handleForm}>
                    {emptyFields.length ? (
                        <span>Не заполнены поля: {emptyFields.map((e: string) => `${e} `)}</span>
                    ) : null}

                    <Modal open={statusMessage.status !== null} size="small">
                        <Header icon>Уведомление</Header>
                        <Modal.Content>
                            <Modal.Description>{statusMessage.message}</Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color="green" inverted onClick={handleModal}>
                                <Icon name="checkmark" /> Ok
                            </Button>
                        </Modal.Actions>
                    </Modal>

                    <Input ref={nameRef} placeholder="Name" value={name} onChange={handleName} />
                    <Input ref={emailRef} placeholder="Email" value={email} onChange={handleEmail} />
                    <Input ref={subjectRef} placeholder="Subject" value={subject} onChange={handleSubject} />
                    <TextArea
                        ref={messageRef}
                        placeholder="Message"
                        rows={6}
                        value={message}
                        onChange={handleMessage}
                    />
                    <Button inverted color="blue">
                        SUBMIT
                    </Button>
                </form>
            </div>
            <div className={classNames(s.right)}>
                <h2>Довольные клиенты</h2>
                <p>Новый Город</p>
                <p>МАЯК-1</p>
                <p>СтройМонолит</p>
                <p>Аркада</p>
            </div>
        </Segment>
    );
};

export { Form };
