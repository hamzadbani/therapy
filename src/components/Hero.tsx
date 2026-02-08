import React from 'react';
import background from '../assets/seaboat.jpg';

const Hero: React.FC = () => {
    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">Meryem Abouhafs, psychologue Casablanca</h1>
                <h2 className="hero-subtitle">Résilient avec plein de ressources</h2>
                <p className="hero-description">
                    Bénéficiez des connaissances, des outils et du soutien nécessaires pour surmonter les défis de la vie,
                    retrouver votre calme, renforcer vos liens et reprendre le contrôle de votre vie.
                </p>
                <button className="btn-primary hero-btn">Prendre RDV</button>
            </div>
        </section>
    );
};

export default Hero;
