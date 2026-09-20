import React from 'react';
import './Projects.css';

export default function Projects() {
    const projectList = [
        {
            num: '01',
            title: 'MyStudyId — Smart Digital ID & Verification (Web & Mobile)',
            desc: 'Digital ID card platform & Flutter mobile application for colleges & organizations. Features Student & Staff ID card display, QR code scanning, dynamic Portrait and Landscape orientation views, SSO authentication, ID card template customization, bulk uploads, S3 storage, and role-based access control (Admin/Owner/Member/Viewer).',
            tech: ['Next.js', 'React', 'Flutter', 'TypeScript', 'GraphQL', 'Prisma', 'Keystone', 'S3', 'SSO', 'QR Code'],
            company: 'Bluebasket Labs Pvt Ltd',
            featured: true,
            delay: 'delay-1'
        },
        {
            num: '02',
            title: 'GreenLight — AI Testing Agent Platform',
            desc: 'AI-powered web application testing platform with GitHub branch integration, test discovery, test plans & execution, browser/video recording, PR-driven testing, AI-assisted error fixing, and integrations with Jira, Slack, MS Teams & Linear.',
            tech: ['React', 'TypeScript', 'GraphQL', 'AI', 'Jira', 'Slack', 'MS Teams', 'Linear'],
            company: 'Bluebasket Labs Pvt Ltd',
            featured: true,
            delay: 'delay-2'
        },
        {
            num: '03',
            title: 'SmartPipe — ERP & Organization Management',
            desc: 'Enterprise resource planning and member management system with organization management, authentication, ID card functionality and a full modern React ecosystem.',
            tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'shadcn', 'TanStack Query', 'Redux', 'GraphQL'],
            company: 'Bluebasket Labs Pvt Ltd',
            featured: false,
            delay: 'delay-1'
        },
        {
            num: '04',
            title: 'MakerBay ERP — Batch Bundle & Digital ID Cards',
            desc: 'ERP system with employee/visitor ID cards, QR verification, batch bundle management, organization branding, S3 image storage, Stripe payment integration, and template position management (CEO/COO etc.).',
            tech: ['Next.js', 'GraphQL', 'Prisma', 'Apollo', 'S3', 'Stripe'],
            company: 'Bluebasket Labs Pvt Ltd',
            featured: false,
            delay: 'delay-2'
        },
        {
            num: '05',
            title: 'TreeManager & Upplft',
            desc: 'TreeManager (asset/tree management) and Upplft (business workflow platform) — responsive UI, CRUD operations, API integrations, form validations and authentication flows.',
            tech: ['Angular', 'JavaScript', 'HTML/CSS', 'REST APIs', 'Git'],
            company: 'AgileIT Experts Pty Ltd',
            featured: false,
            delay: 'delay-3'
        },
        {
            num: '06',
            title: 'Assets Project — Letosys',
            desc: 'Asset tracking and management web application with responsive UI, form validations, CRUD operations and API integrations. Delivered clean, maintainable Angular frontend.',
            tech: ['Angular', 'JavaScript', 'HTML/CSS', 'REST APIs'],
            company: 'Letosys Private Limited',
            featured: false,
            delay: 'delay-1'
        },
        {
            num: '07',
            title: 'Glosys — Health Innovation Platform',
            desc: 'Health innovation platform with Java-based backend services and web frontend. Application forms, business logic, data validation, and healthcare-focused workflow features.',
            tech: ['Java', 'HTML/CSS', 'JavaScript', 'Backend'],
            company: 'Health Innovation Pvt Ltd',
            featured: false,
            delay: 'delay-2'
        },
        {
            num: '08',
            title: 'Angular Enterprise Web Applications',
            desc: 'Multiple Angular-based enterprise projects: responsive UI, API integration, SSO/auth flows, bulk data uploads, role-based UI, CSV downloads, form validations, bug fixing and PR code reviews.',
            tech: ['Angular', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Bootstrap'],
            company: 'Multiple Companies',
            featured: false,
            delay: 'delay-3'
        },
        {
            num: '09',
            title: 'E-Commerce & Gym Management Portals',
            desc: 'E-commerce platform with product, customer & order management alongside Gym/fitness management applications with member management, responsive web interfaces, and API/database integrations.',
            tech: ['React', 'JavaScript', 'HTML/CSS', 'REST APIs', 'Node.js'],
            company: 'Tenfinish Private Limited',
            featured: false,
            delay: 'delay-1'
        },
        {
            num: '10',
            title: 'S3 Gold Project & Client Websites',
            desc: 'Amazon S3 file and image storage solution with upload & retrieval functionality. Built and maintained multiple responsive client websites with custom frontend UI and API integrations.',
            tech: ['Amazon S3', 'JavaScript', 'React', 'REST APIs', 'HTML/CSS'],
            company: 'Tenfinish Private Limited',
            featured: false,
            delay: 'delay-2'
        }
    ];

    return (
        <section id="projects" className="section dark-section">
            <div className="section-inner">
                <div className="section-title reveal">
                    <p className="eyebrow">SELECTED WORK</p>
                    <h2>
                        Projects & <span className="gradient-text">Contributions</span>
                    </h2>
                </div>

                <div className="projects-grid">
                    {projectList.map((project, idx) => (
                        <div
                            key={idx}
                            className={`project-card reveal-up ${project.delay} ${project.featured ? 'featured' : ''}`}
                        >
                            <div className="project-num">{project.num}</div>
                            <div className="project-glow"></div>
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <div className="project-tech">
                                {project.tech.map((t, tIdx) => (
                                    <span key={tIdx}>{t}</span>
                                ))}
                            </div>
                            <div className="project-company">{project.company}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
