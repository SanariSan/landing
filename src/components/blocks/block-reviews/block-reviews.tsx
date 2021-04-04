import React, { useState } from "react";
import classNames from "classnames";
import s from "./block-reviews.module.scss";
import { Icon, Image, Menu, Segment } from "semantic-ui-react";
import { IReview } from "./block-reviews.type";
import { REWIEWS } from "./block-reviews.const";

const Reviews: React.FC = () => {
    const [active, setActive] = useState(0);

    return (
        <Segment id={"reviews"} className={classNames(s.reviews)}>
            <Icon name="quote left" />

            {REWIEWS.map(({ text, author, position }: IReview, i: number) => (
                <React.Fragment key={author}>
                    <div className={classNames(s.review, active !== i && s.hide)}>
                        <p>{text}</p>
                        <h4>{author}</h4>
                        <h5>{position}</h5>
                    </div>
                </React.Fragment>
            ))}

            <Menu className={classNames(s.menu)}>
                {REWIEWS.map(({ photo }: IReview, i: number) => (
                    <Menu.Item onClick={() => setActive(i)} key={photo}>
                        <Image src={photo} className={classNames(active === i && s.active)} />
                    </Menu.Item>
                ))}
            </Menu>

            <span className={s.overlay} />
        </Segment>
    );
};

export { Reviews };
