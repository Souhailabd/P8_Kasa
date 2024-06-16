import { Link } from "react-router-dom"
import Logo from "../../assets/Logofooter.png"


function Footer(){
    return (
        <footer>
            <div className="footer">
                <Link to="/">
                <img src={Logo} alt="logo kasa" className="footer-logo" />
                </Link>
                <p className="footer-right">© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}


export default Footer