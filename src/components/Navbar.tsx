import React, { useState } from 'react';
import logo from '../assets/logo-CPXK47SO.png';

const Navbar: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <div className="logo-circle">
                    <img src={logo} alt="Meryem Abouhafs Logo" />
                </div>

                <ul className="nav-links">
                    <li><a href="/" className="active">Accueil</a></li>
                    <li><a href="/a-propos">A propos</a></li>
                    <li
                        className="dropdown-trigger"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <a href="/consultations">
                            consultations <span className={`arrow ${isDropdownOpen ? 'up' : 'down'}`}>∨</span>
                        </a>
                        {isDropdownOpen && (
                            <ul className="dropdown-menu">
                                <li><a href="/enfant">Thérapie pour enfant</a></li>
                                <li><a href="/adolescent">thérapie pour adolescent</a></li>
                                <li><a href="/adulte">Thérapie pour adulte</a></li>
                                <li><a href="/bilan">Bilan neuropsychologique</a></li>
                            </ul>
                        )}
                    </li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/rdv">Prendre RDV</a></li>
                </ul>

                <div className="social-icons">
                    <a href="#" className="social-icon">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social-icon">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
