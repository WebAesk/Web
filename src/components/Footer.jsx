import React from "react";
import "../css/Footer.css";
import platSponsorImages from "../assets/platSponsors/sponsors.jsx";
import goldSponsorImages from "../assets/goldSponsors/goldSponsors.jsx";
import silverSponsorImages from "../assets/silverSponsors/silverSponsors.jsx";
import supportSponsorImages from "../assets/supportSponsors/supportSponsors.jsx";
const Footer = () => {

    return (
        <footer className="footer">
            <div className="sponsors">
                <h2>SPONSORS</h2>
                <div className="sponsor-logos">
                    {platSponsorImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Sponsor ${index + 1}`}
                            className="sponsor-logo"
                        />
                    ))}
                </div>
            </div>
            <hr />
            <div className="sponsors">
                <div className="sponsor-logos">
                    {goldSponsorImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Sponsor ${index + 1}`}
                            className="sponsor-logo"
                        />
                    ))}
                </div>
            </div>
            <hr />
            <div className="sponsors">
                <div className="sponsor-logos">
                    {silverSponsorImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Sponsor ${index + 1}`}
                            className="sponsor-logo"
                        />
                    ))}
                </div>
            </div>
            <hr />
            <div className="sponsors">
                <div className="sponsor-logos">
                    {supportSponsorImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Sponsor ${index + 1}`}
                            className="sponsor-logo"
                        />
                    ))}
                </div>
            </div>
            <hr />
            <div className="footer-links">
                <div>
                    <h3>Contact US</h3>
                    <ul>
                        iletisim@ytuaesk.com<br /><br />
                        <strong>Fatih Buğra Tüfek - 0(545) 554 09 76</strong>
                        <br />fatihbugratufek@hotmail.com<br /><br />
                        <strong>Can Vedat Şenel - 0(553) 371 88 71</strong>
                        <br />senelcanvedat@gmail.com
                    </ul>
                </div>
                <div>
                    <h3>Our Counsellors</h3>
                    <ul>
                        <strong>Doç. Dr. Binnur Sağbaş</strong>
                        <br />bzeybek@yildiz.edu.tr<br /><br />
                        <strong>Doç. Dr. Ahmet Yiğit Arabul</strong>
                        <br />farabul@yildiz.edu.tr
                    </ul>
                </div>
                <div>
                    <h3>Get Social</h3>
                    <ul>
                        <li>
                            <a
                                href="https://www.linkedin.com/company/ytuaesk/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Linkedin
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/ytuaesk"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://x.com/YtuAESK"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                X.com
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/YtuAESK"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Facebook
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;