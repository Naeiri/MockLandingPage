import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './scrolltotop.scss';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <div
                    onClick={scrollToTop}
                    className="scroll-to-top"
                >
                    <FaArrowUp />
                </div>
            )}
        </>
    );
};

export default ScrollToTop;