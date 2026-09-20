import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <section id="contact" className="section contact-section">
            <div className="section-inner">
                <div className="contact-glow"></div>
                <div className="section-title reveal" style={{ textAlign: 'center' }}>
                    <p className="eyebrow">LET'S CONNECT</p>
                    <h2>
                        Have a project or <span className="gradient-text">opportunity?</span>
                    </h2>
                    <p className="contact-sub">
                        Feel free to reach out for software development opportunities, collaborations or freelance work.
                    </p>
                </div>

                <div className="contact-cards reveal-up">
                    <a href="tel:7397362310" className="contact-card">
                        <div className="contact-icon">📱</div>
                        <div>
                            <strong>Phone</strong>
                            <span>7397362310</span>
                        </div>
                    </a>

                    <a href="mailto:sjaga456@gmail.com" className="contact-card">
                        <div className="contact-icon">✉️</div>
                        <div>
                            <strong>Email</strong>
                            <span>sjaga456@gmail.com</span>
                        </div>
                    </a>

                    <div className="contact-card">
                        <div className="contact-icon">📍</div>
                        <div>
                            <strong>Location</strong>
                            <span>Coimbatore, Tamil Nadu, India</span>
                        </div>
                    </div>
                </div>

                <div className="contact-cta reveal-up delay-2">
                    <a className="btn primary large" href="mailto:sjaga456@gmail.com">
                        <span>Send Me an Email</span>
                        <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
