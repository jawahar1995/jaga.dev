import React, { useEffect, useState } from 'react';
import './Preloader.css';

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1800);
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div id="preloader" className={!loading ? 'hide' : ''}>
            <div class="preloader-inner">
                <div class="preloader-logo">
                    <img src="/jk-logo.jpg" alt="JK Logo" />
                </div>
                <div class="preloader-bar">
                    <div class="preloader-fill"></div>
                </div>
                <p class="preloader-text">Loading Portfolio...</p>
            </div>
        </div>
    );
}
