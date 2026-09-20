import React from 'react';
import './Experience.css';

export default function Experience() {
    const experiences = [
        {
            period: 'May 2025 — June 2026',
            title: 'Software Engineer',
            company: '🏢 Bluebasket Labs Pvt Ltd',
            current: true,
            desc: 'Full-stack development using Next.js, React, TypeScript, GraphQL, Prisma, and Keystone CMS. Delivered multiple large-scale products.',
            bullets: [
                'Built MyStudyId / SmartID — Digital ID card & verification platform for colleges',
                'Developed GreenLight — AI-powered web application testing platform',
                'Contributed to SmartPipe — ERP & member management system',
                'Worked on MakerBay ERP — Batch bundle & digital ID card system with Stripe',
                'Implemented SSO, RBAC (Admin/Owner/Member/Viewer), S3 image storage & bulk uploads'
            ],
            tags: ['Next.js', 'React', 'TypeScript', 'GraphQL', 'Prisma', 'S3', 'SSO'],
            animation: 'reveal-left'
        },
        {
            period: 'Previous Role',
            title: 'Software Engineer',
            company: '🏢 AgileIT Experts Pty Ltd',
            current: false,
            desc: 'Frontend development and business application enhancements with Angular, JavaScript, HTML & CSS.',
            bullets: [
                'Developed TreeManager — Tree/asset management application',
                'Contributed to Upplft — Business workflow platform',
                'Implemented CRUD operations, API integrations, form validations & responsive UI'
            ],
            tags: ['Angular', 'JavaScript', 'HTML/CSS', 'REST APIs', 'Git'],
            animation: 'reveal-right'
        },
        {
            period: 'Previous Role',
            title: 'Software Developer',
            company: '🏢 Letosys Private Limited',
            current: false,
            desc: 'Contributed to frontend and application development.',
            bullets: [
                'Worked on Assets Project — Asset tracking & management system',
                'Built responsive UI, validations, and API integrations'
            ],
            tags: ['Angular', 'JavaScript', 'HTML/CSS', 'REST APIs'],
            animation: 'reveal-left'
        },
        {
            period: 'Early Career',
            title: 'Software Developer',
            company: '🏢 Health Innovation Private Limited',
            current: false,
            desc: 'Built the Glosys Project — a health innovation platform with Java backend and web frontend, covering forms, business logic and validations.',
            bullets: [],
            tags: ['Java', 'HTML/CSS', 'JavaScript', 'Backend'],
            animation: 'reveal-right'
        },
        {
            period: 'Early Career',
            title: 'Technical Apprentice — Quality Department',
            company: '🏭 Ford Sparket Manufacturing',
            current: false,
            desc: 'Gained foundational experience in quality assurance processes, technical documentation and production-line workflows within a manufacturing environment.',
            bullets: [],
            tags: ['Quality Assurance', 'Technical Documentation'],
            animation: 'reveal-left'
        }
    ];

    return (
        <section id="experience" className="section">
            <div className="section-inner">
                <div className="section-title reveal">
                    <p className="eyebrow">CAREER JOURNEY</p>
                    <h2>
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                </div>

                <div className="timeline">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className={`timeline-item ${exp.animation}`}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">{exp.period}</div>
                            <div className="timeline-card">
                                <div className="company-header">
                                    <div className="company-info">
                                        <h3>{exp.title}</h3>
                                        <h4>{exp.company}</h4>
                                    </div>
                                    {exp.current && <span className="badge-current">Recent</span>}
                                </div>
                                <p>{exp.desc}</p>
                                {exp.bullets.length > 0 && (
                                    <ul>
                                        {exp.bullets.map((bullet, bIdx) => (
                                            <li key={bIdx}>{bullet}</li>
                                        ))}
                                    </ul>
                                )}
                                <div className="tech-tags">
                                    {exp.tags.map((tag, tIdx) => (
                                        <span key={tIdx}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
