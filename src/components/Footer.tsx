import React from 'react';
import logo from '../assets/logo-CPXK47SO.png';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container footer-top">
                <div className="footer-logo-section">
                    <div className="footer-logo-circle">
                        <img src={logo} alt="Meryem Abouhafs Logo" />
                    </div>
                </div>

                <div className="footer-links-section">
                    <div className="footer-column">
                        <h4 className="footer-heading">CONSULTATIONS</h4>
                        <ul className="footer-list">
                            <li><a href="#">Thérapie pour adolescent</a></li>
                            <li><a href="#">Thérapie pour enfant</a></li>
                            <li><a href="#">Thérapie pour adulte</a></li>
                            <li><a href="#">Bilan neuropsychologique</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-heading">PAGES</h4>
                        <ul className="footer-list check-list">
                            <li><i className="fas fa-check"></i> <a href="#">D'accueil</a></li>
                            <li><i className="fas fa-check"></i> <a href="#">A propos</a></li>
                            <li><i className="fas fa-check"></i> <a href="#">Blog</a></li>
                            <li><i className="fas fa-check"></i> <a href="#">Prendre RDV</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-newsletter">
                    <div className="newsletter-form">
                        <input type="email" placeholder="Email" />
                        <button type="submit" className="btn-contact">Contactez-nous</button>
                    </div>
                </div>
            </div>

            <div className="container footer-bottom">
                <div className="footer-social">
                    <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <div className="footer-copyright">
                    <p>Copyright © 2024 Meryem Abouhafs, Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
