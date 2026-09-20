import { useEffect } from 'react';

export function useScrollReveal() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // Trigger skill bars inside if any
                        entry.target.querySelectorAll('.skill-fill').forEach((bar) => {
                            if (bar.dataset.width) {
                                bar.style.width = bar.dataset.width + '%';
                            }
                        });
                    }
                });
            },
            { threshold: 0.15 }
        );

        const elements = document.querySelectorAll(
            '.reveal, .reveal-left, .reveal-right, .reveal-up, .skill-group'
        );
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);
}
