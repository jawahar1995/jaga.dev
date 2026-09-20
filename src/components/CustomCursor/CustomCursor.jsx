import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const trailRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const trail = trailRef.current;
        if (!cursor || !trail) return;

        let mouseX = 0, mouseY = 0;
        let trailX = 0, trailY = 0;
        let animId;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
        };

        const animateTrail = () => {
            trailX += (mouseX - trailX) * 0.15;
            trailY += (mouseY - trailY) * 0.15;
            trail.style.transform = `translate3d(${trailX}px, ${trailY}px, 0) translate(-50%, -50%)`;
            animId = requestAnimationFrame(animateTrail);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animId = requestAnimationFrame(animateTrail);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <>
            <div id="cursor" ref={cursorRef}></div>
            <div id="cursor-trail" ref={trailRef}></div>
        </>
    );
}
