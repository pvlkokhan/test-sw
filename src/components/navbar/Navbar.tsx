import { useState, type JSX } from "react";
import { getIconPath } from "../../utils/Utils";

type NavbarItems = {
    id: number,
    title: string,
    url: string,
    icon?: string,
}

const navbarItems: NavbarItems[] = [
        {
            id: 0,
            title: "Home",
            url: "#"
        },
        {
            id: 1,
            title: "Products",
            url: "#"
        },
        {
            id: 2,
            title: "Home",
            url: "#",
            icon: getIconPath("cart")
        },
    ];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const getIconElement = (icon: string): JSX.Element => {
        return (<div><img src={icon} className="navbar__item__icon"/></div>)
    }

    const getTitleElement = (text: string): JSX.Element => {
        return (<div className="navbar__item__title">{text}</div>)
    }

    return (
        <>
            <button className={`burger ${menuOpen ? 'burger--open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`navbar ${menuOpen ? 'navbar--open' : ''}`}>
                {navbarItems.map((item => (
                    <div key={item.id} className="navbar__item">{ item.icon ? getIconElement(item.icon) : getTitleElement(item.title) }</div>
                )))}
            </div>
        </>
        
    )
}

export default Navbar;