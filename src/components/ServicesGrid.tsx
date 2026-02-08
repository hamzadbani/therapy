import React from 'react';
import imgAdolescent from '../assets/authentic-scene-young-person-undergoing-psychological-therapy.jpg';
import imgEnfant from '../assets/close-up-girl-therapy-session-with-parents.jpg';
import imgAdulte from '../assets/depressed-woman-having-psychotherapy-session-doctor-s-office.jpg';
import imgBilan from '../assets/close-up-psychologist-taking-notes-clipboard-therapy-session-with-her-worried-patient-psychology-mental-health-concept.jpg';

const ServicesGrid: React.FC = () => {
    const services = [
        { type: 'image', src: imgAdolescent, alt: 'Adolescent therapy' },
        {
            type: 'text',
            title: 'Thérapie pour adolescent',
            desc: 'Les adolescents doivent faire face à un ensemble ...',
            link: '#'
        },
        { type: 'image', src: imgEnfant, alt: 'Child therapy' },
        {
            type: 'text',
            title: 'Thérapie enfant',
            desc: 'La thérapie pour enfants se concentre sur ...',
            link: '#'
        },
        {
            type: 'text',
            title: 'Thérapie pour adulte',
            desc: 'Avez-vous du mal à dormir, vous sentez-vous démotivé ...',
            link: '#'
        },
        { type: 'image', src: imgAdulte, alt: 'Adult therapy' },
        {
            type: 'text',
            title: 'Bilan neuropsychologique',
            desc: 'Les connaissances du bilan permettent de formule ...',
            link: '#'
        },
        { type: 'image', src: imgBilan, alt: 'Neuropsychological assessment' }
    ];

    return (
        <section className="services-grid-section">
            <div className="container">
                <h2 className="services-grid-title">Quel type de service est le mieux adapté pour vous ?</h2>
                <div className="services-grid">
                    {services.map((item, index) => (
                        <div key={index} className={`grid-item ${item.type}-item`}>
                            {item.type === 'image' ? (
                                <img src={item.src} alt={item.alt} />
                            ) : (
                                <div className="text-card">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <a href={item.link} className="voir-plus">Voir plus</a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
