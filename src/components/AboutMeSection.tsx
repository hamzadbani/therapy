import React from 'react';
import psychologistImg from '../assets/full-shot-psychologist-her-office.jpg';

const AboutMeSection: React.FC = () => {
    return (
        <section className="about-me-section">
            <div className="container about-me-container">
                <div className="about-me-text">
                    <h2 className="about-title">Qui suis-je ?</h2>
                    <h3 className="about-subtitle">Meryem Abouhafs, psychologue clinicienne et psychothérapeute, à Casablanca</h3>
                    <p className="about-description">
                        Avec plusieurs années d'expérience en psychothérapie, nous avons aidé de nombreuses personnes à surmonter leurs défis et à
                        retrouver un bien-être émotionnel. Nous avons accompagné des individus souffrant d'anxiété, de dépression, de traumatismes,
                        d'épuisement professionnel en leur offrant un chemin vers la guérison lorsqu'ils se sentaient perdus. Nous avons également soutenu
                        des personnes confrontées au deuil, aux difficultés relationnelles, aux difficultés scolaires et aux grandes transitions de vie.
                    </p>
                    <button className="btn-dark">voir plus</button>
                </div>

                <div className="about-me-image">
                    <img src={psychologistImg} alt="Meryem Abouhafs" />
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;
