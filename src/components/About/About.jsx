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
                        <div className="card-icon">⚡</div>
                        <p>
                            I am a Senior Software Developer with <strong>6+ years</strong> of hands-on experience designing, architecting, and engineering high-impact web and mobile solutions across diverse domains — ERP platforms, digital ID card systems, AI testing agents, and enterprise management tools.
                        </p>
                        <p>
                            My technical toolkit includes <strong>React, Next.js, Angular, and Flutter</strong> on the client side; <strong>Node.js, GraphQL, Prisma, and Java</strong> on the server side; <strong>AWS S3</strong> for scalable cloud storage; and robust enterprise security with <strong>SSO, RBAC</strong>, and token-based authentication flows.
                        </p>
                        <p>
                            I excel at translating business requirements into high-performing, resilient applications with intuitive UI/UX, clean maintainable code, and high operational reliability.
                        </p>
                    </div>

                    <div className="stats-grid">
                        <div className="stat-card reveal-up delay-1">
                            <Counter target={6} />
                            <small>+</small>
                            <span>Years Industry Experience</span>
                        </div>
                        <div className="stat-card reveal-up delay-2">
                            <Counter target={10} />
                            <small>+</small>
                            <span>Production Projects</span>
                        </div>
                        <div className="stat-card reveal-up delay-3">
                            <strong>Full-Stack</strong>
                            <span>Web & Mobile Architecture</span>
                        </div>
                        <div className="stat-card reveal-up delay-4">
                            <strong>5</strong>
                            <span>Tech Organizations</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
