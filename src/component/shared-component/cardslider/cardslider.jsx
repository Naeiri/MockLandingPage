import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import img1 from '../../../assets/images/home/second-section/birthday-cake.png';
import img3 from '../../../assets/images/home/second-section/celebration-cake.png';
import img6 from '../../../assets/images/home/second-section/cupcakes-mini-cakes.png';
import img5 from '../../../assets/images/home/second-section/seasonal-holiday.png';
import img4 from '../../../assets/images/home/second-section/specialty-cake.png';
import img2 from '../../../assets/images/home/second-section/wedding-cake.png';
import './cardslider.scss';
import { NextArrow, PrevArrow } from './nextprevarrow/nextprevarrow';

const CardSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of cards to show
        slidesToScroll: 3, // Number of cards to scroll at a time
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const cards = [
        {
            title: "Birthday Cake",
            description: "Themed Birthday Cakes (superhero, princess, sports), & Number Cakes",
            image: img1,
        },
        {
            title: "Wedding Cake",
            description: "Multi-tiered, Themed, & Floral Wedding Cakes",
            image: img2,
        },
        {
            title: "Celebration Cake",
            description: "Anniversary, Engagement, Graduation, Baby Shower, & Gender Reveal Cakes",
            image: img3,
        },
        {
            title: "Specialty Cake",
            description: "Bento Cakes (small, personal-sized cakes)",
            image: img4,
        },
        {
            title: "Seasonal & Holiday",
            description: "Christmas, Easter, Halloween, & Valentine's Day Cakes",
            image: img5,
        },
        {
            title: "Cupcakes & Mini Cake",
            description: "Custom-designed Cupcakes & Themed Cupcakes",
            image: img6,
        },
    ];

    return (
        <div className="card-slider">
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <div key={index} className="card border-0">
                        <img src={card.image} alt={card.title} className="card-image" />
                        <h3 className="mt-3 card-title color-brown">{card.title}</h3>
                        <p className="card-description color-brown fs fst-italic">{card.description}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CardSlider;
