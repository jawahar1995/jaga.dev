import React from 'react';
import './Skills.css';

export default function Skills() {
    const skillCategories = [
        {
            title: 'Frontend & Mobile Development',
            icon: '🖥️',
            items: [
                { name: 'HTML5 / CSS3', level: 95 },
                { name: 'JavaScript / TypeScript', level: 90 },
                { name: 'Angular', level: 88 },
                { name: 'React / Next.js', level: 85 },
                { name: 'Flutter (Mobile App)', level: 82 },
            ],
            delay: 'delay-1',
        },
        {
            title: 'Backend & Databases',
            icon: '⚙️',
            items: [
                { name: 'Node.js', level: 82 },
                { name: 'GraphQL / Prisma', level: 80 },
                { name: 'Java', level: 75 },
                { name: 'MySQL / MongoDB', level: 78 },
                { name: 'REST APIs', level: 88 },
            ],
            delay: 'delay-2',
        },
        {
            title: 'Tools & Cloud',
            icon: '☁️',
            items: [
                { name: 'AWS S3', level: 75 },
                { name: 'Git / GitHub', level: 90 },
                { name: 'SSO / RBAC / Auth', level: 82 },
                { name: 'Keystone CMS', level: 78 },
                { name: 'Stripe Integration', level: 70 },
            ],
            delay: 'delay-3',
        },
    ];

    const techPills = [
        'shadcn', 'TanStack Query', 'Redux', 'Flutter', 'React Hook Form',
        'Yup', 'Apollo', 'Keystone', 'Prisma',
        'QR Code', 'Stripe', 'Jira', 'Linear'
    ];

    return (
        <section id="skills" className="section dark-section">
            <div className="section-inner">
                <div className="section-title reveal">
                    <p className="eyebrow">TECH STACK</p>
                    <h2>
                        Skills & <span className="gradient-text">Technologies</span>
                    </h2>
                </div>

                <div className="skills-categories">
                    {skillCategories.map((cat, idx) => (
                        <div key={idx} className={`skill-group reveal-up ${cat.delay}`}>
                            <h4>
                                <span className="skill-icon">{cat.icon}</span> {cat.title}
                            </h4>
                            <div className="skill-items">
                                {cat.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="skill-item">
                                        <span>{item.name}</span>
                                        <div className="skill-bar">
                                            <div className="skill-fill" data-width={item.level}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="tech-pills reveal">
                    {techPills.map((pill, idx) => (
                        <span key={idx}>{pill}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}
