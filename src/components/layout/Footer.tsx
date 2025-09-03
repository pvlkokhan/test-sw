import { getIconPath } from "../../utils/Utils";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__icon">
                <img src={getIconPath("rocket")}/>
            </div>
            <div className="footer__text">Exciting space adventure!</div>
        </div>
    )
}

export default Footer;