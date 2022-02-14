import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
    const path = process.env.PUBLIC_URL;
    return(
        <footer>
            <div className="inner">
                <NavLink to='/'>
                    <img className="logo" src={path+'/img/logo.png'} alt="footer_logo" />
                </NavLink>
                <div className="wrap">
                    <article>
                        <h2>Need help? We're always <br />here when you need us.</h2>
                        <ul>
                            <li>Get support</li>
                            <li>Report a lost or stolen card</li>
                            <li>Find ATM</li>
                            <li>FAQs</li>
                        </ul>
                    </article>
                    <article>
                        <ul>
                            <h3>COMPANY</h3>
                            <li>Who we are</li>
                            <li>Careers</li>
                            <li>Newsroom</li>
                            <li>Investor Relationsv</li>
                            <li>Newsroom</li>
                            <li>Binding Corporate Rules</li>
                        </ul>
                        <ul>
                            <h3>MASTERCARD SITES</h3>
                            <li>Mastercard Data & Services</li>
                            <li>Mastercard Brand Center</li>
                            <li>Mastercard Marketing Center</li>
                            <li>Mastercard Developers</li>
                            <li>Priceless Cities</li>
                        </ul>
                    </article>                    
                </div>

                <div className="copyright">
                    <span>&copy; 1994-2022 Mastercard.</span>
                    <ul className="terms">
                        <li>Privacy</li>
                        <li>Accessibility</li>
                        <li>Terms</li>
                        <li>Site map</li>
                    </ul>
                    <ul className="sns">
                        <li><FontAwesomeIcon icon={faFacebookF} /></li>
                        <li><FontAwesomeIcon icon={faInstagram} /></li>
                        <li><FontAwesomeIcon icon={faTwitter} /></li>
                        <li><FontAwesomeIcon icon={faYoutube} /></li>
                    </ul>
                </div>
                
            </div>
        </footer>
    )
}