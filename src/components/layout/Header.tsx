import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";

function Header() {
    return (
        <div className="header">
            <Logo/>
            <Navbar/>
        </div>
    )
}

export default Header;