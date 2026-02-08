import React from 'react';
import testimonialBg from '../assets/depressed-woman-having-psychotherapy-session-doctor-s-office.jpg';

const TestimonialsSection: React.FC = () => {
    const testimonials = [
        {
            id: 1,
            name: 'SALI',
            date: 'MAI 8, 2025',
            text: "C'était ma toute première consultation chez un psychologue, et grâce à Mme Meryem Abouhafs, ce ne sera certainement pas la dernière. Elle a su créer un espace de confiance et de bienveillance dans lequel je me suis sentie écoutée, apaisée, et étonnamment légère en sortant. Un grand merci pour cette belle expérience, aussi enrichissante qu'apaisante.",
            avatar: 'https://i.pravatar.cc/150?u=sali',
            initial: 'S',
            color: '#c0392b'
        },
        {
            id: 2,
            name: "K M'H",
            date: 'JANVIER 6, 2025',
            text: "د. مريم أبوحنيش دكتورة واستشارية على مستوى عالي من الأخلاق الحميدة و روح المساعدة، فهي مستمعة جيدة و دائماً رهن الإشارة عندما يتعلق الأمر بالإستفسار عن أي موضوع من شانه المساعدة. سعدت كثيراً بمرافقتها لي في رحلتي للتشافي، لديها القدرة و الخبرة الكافيتين لجعلكم أكثر مرونة في تخطي الصعوبات التي تواجهكم. شكراً د. مريم على مجهوداتك وعلى حسن مرافقتك.",
            avatar: 'https://i.pravatar.cc/150?u=kmh',
            initial: 'K',
            color: '#2ecc71'
        }
    ];

    return (
        <section className="testimonials-section">
            <div className="container testimonials-container">
                <div className="testimonials-header">
                    <div className="header-bg-image">
                        <img src={testimonialBg} alt="Background" />
                        <div className="header-box">
                            <h3>Pourquoi choisir notre service ?</h3>
                            <p>Ce que nos patients disent de nous :</p>
                        </div>
                    </div>
                </div>

                <div className="testimonials-grid">
                    <button className="nav-btn prev"><i className="fas fa-chevron-left"></i></button>

                    <div className="cards-wrapper">
                        {testimonials.map((t) => (
                            <div key={t.id} className="testimonial-card">
                                <div className="card-header">
                                    <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <div className="verified-icon"><i className="fas fa-check-circle"></i></div>
                                    <div className="google-icon"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="18" /></div>
                                </div>
                                <div className="card-body">
                                    <p className={t.id === 2 ? 'rtl' : ''}>{t.text}</p>
                                </div>
                                <div className="card-footer">
                                    <div className="user-avatar" style={{ backgroundColor: t.color }}>
                                        {t.initial}
                                    </div>
                                    <div className="user-info">
                                        <h4 className="user-name">{t.name}</h4>
                                        <p className="user-date">{t.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="nav-btn next"><i className="fas fa-chevron-right"></i></button>
                </div>

                <div className="pagination">
                    <span className="dot active"></span>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
