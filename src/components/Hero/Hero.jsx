import React from 'react';
import ParticlesBackground from '../ParticlesBackground';
import { useTypewriter } from '../../hooks/useTypewriter';
import './Hero.css';

export default function Hero() {
    const typewriterText = useTypewriter([
        'Scalable Full-Stack Systems.',
        'Digital ID & ERP Platforms.',
        'Flutter Mobile Applications.',
        'AI-Powered Testing Agents.',
        'High-Performance Web Apps.',
        'Cloud & Microservice APIs.',
    ]);

    return (
        <section id="home" className="hero">
            <ParticlesBackground />
            <div className="hero-content">
                <div className="hero-text">
                    <div className="hero-badge slide-up">
                        <span className="badge-dot"></span> Available for Senior / Lead Roles
                    </div>
                    <p className="eyebrow slide-up delay-1">SENIOR SOFTWARE DEVELOPER & ARCHITECT</p>
                    <h1 className="slide-up delay-2">
                        Hello, I'm<br />
                        <strong className="gradient-text">Jawahar S</strong>
                    </h1>
                    <div className="typewriter-wrap slide-up delay-3">
                        <span>Specialized in </span>
                        <span className="typewriter">{typewriterText}</span>
                        <span className="cursor-blink">|</span>
                    </div>
                    <p className="hero-desc slide-up delay-4">
                        <strong>6+ years</strong> of software engineering experience delivering enterprise web applications, Flutter mobile apps, and robust backend systems across Next.js, React, Angular, Node.js, GraphQL, Java, and AWS S3.
                    </p>
                    <div className="chips slide-up delay-5">
                        <b>Next.js</b>
                        <b>React</b>
                        <b>Flutter</b>
                        <b>Next.js</b>
                        <b>Angular</b>
                        <b>TypeScript</b>
                        <b>GraphQL</b>
                        <b>Node.js</b>
                        <b>Java</b>
                        <b>AWS S3</b>
                        <b>Prisma</b>
                        <b>SSO & RBAC</b>
                    </div>
                    <div className="actions slide-up delay-6">
                        <a className="btn primary" href="#projects">
                            <span>Explore Selected Work</span>
                            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </a>
                        <a className="btn ghost" href="#contact">
                            <span>Get In Touch</span>
                        </a>
                    </div>
                    <div className="contact-mini slide-up delay-7">
                        ⚡ 6+ Years Exp &nbsp;•&nbsp; 📱 7397362310 &nbsp;•&nbsp; ✉️ sjaga456@gmail.com &nbsp;•&nbsp; 📍 Coimbatore, India
                    </div>
                </div>

                <div className="photo-wrap slide-right delay-2">
                    <div className="photo-ring ring-1"></div>
                    <div className="photo-ring ring-2"></div>
                    <div className="photo-inner">
                        <img src="/jawahar-profile.jpg" alt="Jawahar S" />
                    </div>
                    <div className="photo-badge badge-exp">
                        <strong>6+ Years</strong>
                        <span>Software Experience</span>
                    </div>
                    <div className="photo-badge badge-proj">
                        <strong>10+ Delivered</strong>
                        <span>Production Projects</span>
                    </div>
                </div>
            </div>

            <div className="scroll-hint">
                <span>Scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
}
