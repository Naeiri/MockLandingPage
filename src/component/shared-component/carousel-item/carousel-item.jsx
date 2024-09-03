import React from 'react';

/**
 * CarouselItems is a reusable component
 *
 * @component
 * @param {Object} props - The props object.
 * @param {string} props.imageSrc
 * @param {string} props.altText
 *
 * @example
 * <CarouselItems
 *   imageSrc="/path/to/image.jpg"
 *   altText="Description of the image"
 * />
 */

const CarouselItems = ({ imageSrc, altText }) => {
    return (
        <>
            <img
                className="d-block w-100"
                src={imageSrc}
                alt={altText}
            />
        </>
    );
};

export default CarouselItems;
