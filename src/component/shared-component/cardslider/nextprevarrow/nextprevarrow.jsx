import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import "./nextprevarrow.scss";

const NextArrow = ({ onClick }) => {
    return (
        <div className="slick-arrow slick-next" onClick={onClick}>
            <MdChevronRight size={50} />
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div className="slick-arrow slick-prev" onClick={onClick}>
            <MdChevronLeft size={50} />
        </div>
    );
};

export { NextArrow, PrevArrow };
