import React, { useState, useEffect, useRef } from 'react';
import './About.css';

function Counter({ target }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    let current = 0;
                    const step = Math.ceil(target / 40);
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        setCount(current);
                    }, 40);
                    observer.unobserve(entries[0].target);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return <strong ref={ref}>{count}</strong>;
}

export default function About() {
    return (
        <section id="about" className="section">
            <div className="section-inner">
                <div className="section-title reveal">
                    <p className="eyebrow">ABOUT ME</p>
                    <h2>
                        Professional <span className="gradient-text">Summary</span>
                    </h2>
                </div>
                <div className="about">
                    <div className="card reveal-left">
                        <div className="card-icon">👨‍💻</div>
                        <p>
                            I am a Software Developer with <strong>6+ years</strong> of experience building business-focused web applications across multiple domains — ERP systems, ID card management platforms, AI-powered testing agents, and enterprise management dashboards.
                        </p>
                        <p>
                            My expertise spans frontend with <strong>Angular, React & Next.js</strong>; backend with <strong>Node.js, GraphQL, Prisma & Java</strong>; cloud storage via <strong>AWS S3</strong>; and authentication including <strong>SSO, RBAC</strong>, and email/password flows.
                        </p>
                        <p>
                            I enjoy working on complex, real-world problems and delivering clean, maintainable, production-ready code that makes a difference.
                        </p>
                    </div>

                    <div className="stats-grid">
                        <div className="stat-card reveal-up delay-1">
                            <Counter target={6} />
                            <small>+</small>
                            <span>Years Experience</span>
                        </div>
                        <div className="stat-card reveal-up delay-2">
                            <Counter target={10} />
                            <small>+</small>
                            <span>Projects Delivered</span>
                        </div>
                        <div className="stat-card reveal-up delay-3">
                            <strong>Full</strong>
                            <span>Stack Development</span>
                        </div>
                        <div className="stat-card reveal-up delay-4">
                            <strong>5+</strong>
                            <span>Companies Worked</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
