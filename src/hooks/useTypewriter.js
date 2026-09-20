import { useState, useEffect } from 'react';

export function useTypewriter(words, speed = 90, deleteSpeed = 60, delay = 1800) {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex % words.length];

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.slice(0, text.length + 1));
                if (text.length + 1 === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), delay);
                }
            } else {
                setText(currentWord.slice(0, text.length - 1));
                if (text.length - 1 === 0) {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? deleteSpeed : speed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, delay]);

    return text;
}
