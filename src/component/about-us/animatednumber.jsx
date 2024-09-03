import React, { useEffect, useRef, useState } from 'react';
import { animated, useSpring } from 'react-spring';

function AnimatedNumber({ n }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const { number } = useSpring({
        from: { number: 0 },
        number: isVisible ? n : 0,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <animated.div ref={ref}>
            {number.to((n) => n.toFixed(0))}
        </animated.div>
    );
}

export default AnimatedNumber;