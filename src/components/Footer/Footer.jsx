import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="footer-inner">
                <div className="footer-logo">
                    <img src="/jk-logo.jpg" alt="JK Logo" /> Jawahar S
                </div>
                <p>© {new Date().getFullYear()} Jawahar S &nbsp;•&nbsp; Software Developer &nbsp;•&nbsp; Coimbatore, India</p>
                <p className="footer-sub">Built with React, Vite & Modern CSS Animations</p>
            </div>
        </footer>
    );
}
