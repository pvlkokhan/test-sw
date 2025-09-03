import Button from "../button/Button";

function Banner() {
    const buttonText = "Learn more";

    return (
        <div className="banner">
            <div className="banner__container">
                <div className="banner__title">Discover the vast expanses of <span className="pink-text">space</span></div>
                <div className="banner__text">Where the possibilities are <span className="yellow-text">endless!</span></div>
            </div>
            <div className="banner__button">
                <Button text={buttonText} fill={true} />
            </div>
        </div>
    )
}

export default Banner;