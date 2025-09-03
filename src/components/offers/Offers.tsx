import { getBgPath } from "../../utils/Utils";
import Button from "../button/Button";

type Offer = {
    id: number;
    title: string;
    text: string;
}

const offersData: Offer[] = [
    {
        id: 0,
        title: "Move the borders of reality!",
        text: "Go on a space adventure - it's possible with us!"
    },
    {
        id: 1,
        title: "Space is not just stars and planets",
        text: "Go on a space adventure"
    },
    {
        id: 2,
        title: "For those who dream of stars",
        text: "Our offer: make your dream come true"
    },
    {
        id: 3,
        title: "Fulfill your fantastic dreams",
        text: "Space has never been so close"
    }
];

function Offers() {
    const buttonText = "Learn more";
    const isFullCard = (index: number) => index % 3 === 0;
    return (
        <div className="offers-container">
            <div className="offers-container__title">Offers</div>
            <div className="offers-grid">
                {offersData.map((offer, index) => (
                    <div
                        key={index}
                        className={`offer-card ${isFullCard(index) ? 'offer-card--full' : ''}`}
                        style={{backgroundImage: `url(${getBgPath(`bg-offer-${offer.id}`)})`}}
                    >
                    <div className="offer-card__content">
                        <div className={`offer-card__content__title ${!isFullCard(index) ? "offer-card__content__title--half" : ""}`}>{offer.title}</div>
                        <div className={`offer-card__content__text ${!isFullCard(index) ? "offer-card__content__text--half" : ""}`}>{offer.text}</div>
                        <Button text={buttonText} />
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Offers;