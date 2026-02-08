import React from 'react';
import contactBg from '../assets/doctor-offering-medical-teleconsultation.jpg';

const ContactSection: React.FC = () => {
    return (
        <section className="contact-section" style={{ backgroundImage: `url(${contactBg})` }}>
            <div className="contact-overlay"></div>
            <div className="container contact-container">
                <div className="contact-header">
                    <span className="contact-label">CONTACT</span>
                    <h2 className="contact-title">Une Demande ? Une Question ?</h2>
                </div>

                <div className="contact-card">
                    <div className="contact-form-side">
                        <form className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Prénom</label>
                                    <input type="text" placeholder="Prénom" />
                                </div>
                                <div className="form-group">
                                    <label>Nom</label>
                                    <input type="text" placeholder="Nom" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Téléphone</label>
                                    <input type="tel" placeholder="Téléphone" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Date</label>
                                    <input type="date" placeholder="jj/mm/aaaa" />
                                </div>
                                <div className="form-group">
                                    <label>Temps</label>
                                    <input type="time" placeholder="--:--" />
                                </div>
                            </div>
                            <div className="form-group full-width">
                                <label>Message</label>
                                <textarea placeholder="Message" rows={4}></textarea>
                            </div>
                            <button type="submit" className="btn-send">envoyer</button>
                        </form>
                    </div>

                    <div className="contact-info-side">
                        <h3>Besoin d'aide supplémentaire ?</h3>
                        <p className="info-intro">N'hésitez pas à nous appeler, nous sommes là pour vous accompagner.</p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="info-text">
                                    <span className="info-label">ASSISTANCE À LA CLIENTÈLE</span>
                                    <a href="tel:+212643055155" className="info-value">+212 643-055155</a>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <i className="fas fa-location-dot"></i>
                                </div>
                                <div className="info-text">
                                    <span className="info-label">ASSISTANCE PAR LOCALISATION</span>
                                    <span className="info-value">3 Av. TanTan, Casablanca 20100</span>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="info-text">
                                    <span className="info-label">ASSISTANCE PAR E-MAIL</span>
                                    <a href="mailto:infos@psychologue-meryemabouhafs.com" className="info-value">infos@psychologue-meryemabouhafs.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wavy-divider">
                <svg viewBox="0 0 1440 120" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default ContactSection;
