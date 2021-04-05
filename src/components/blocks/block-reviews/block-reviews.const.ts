import img1 from "../../../img/review_1.jpg";
import img2 from "../../../img/review_2.jpg";
import { IReview } from "./block-reviews.type";

const REWIEWS: IReview[] = [
    {
        text: `ООО "Новый Город" объявляет благодарность за тесное и продуктивное сотрудничество компании "CustomServ".
    Выражает благодарность за проведенную в компании работу по информационной безопасности и своевременную
    помощь сотрудникам в сфере IT технологий.
    Надеемся на долгосрочное сотрудничество.`,
        author: `Лариса Евгеньевна`,
        position: `Ген. директор ООО "Новый Город"`,
        photo: img1,
    },
    {
        text: `ООО "Аркада" выражает благодарность компании "CustomServ" за качественное обслуживание серверов, грамотную и своевременную поддержку пользователей.
        Надеемся на продолжение тесного взаимовыгодного сотрудничества в новом 2017 году.`,
        author: `Гольдинов В.В.`,
        position: `Ген. директор ООО "Аркада"`,
        photo: img2,
    },
];

export { REWIEWS };