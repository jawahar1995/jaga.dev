import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [progress, setProgress] = useState(0);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setProgress((window.scrollY / docHeight) * 100);

            const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
            sections.forEach((id) => {
                const el = document.getElementById(id);
                if (el) {
                    const top = el.offsetTop - 120;
                    const bottom = top + el.offsetHeight;
                    if (window.scrollY >= top && window.scrollY < bottom) {
                        setActiveSection(id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header id="header" className={scrolled ? 'scrolled' : ''}>
            <nav className="nav">
                <a className="logo-img" href="#home">
                    <img src="/jk-logo.jpg" alt="JK Logo" />
                </a>
                <button
                    id="menu"
                    aria-label="Toggle Menu"
                    className={menuOpen ? 'open' : ''}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div id="links" className={menuOpen ? 'open' : ''}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </nav>
            <div className="nav-progress" style={{ width: `${progress}%` }}></div>
        </header>
    );
}
