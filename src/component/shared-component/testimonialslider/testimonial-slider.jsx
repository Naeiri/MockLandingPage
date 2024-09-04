import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import userOne from '../../../assets/images/home/sixth-section/user-one.png';
import userThree from '../../../assets/images/home/sixth-section/user-three.png';
import userTwo from '../../../assets/images/home/sixth-section/user-two.png';
import { NextArrow, PrevArrow } from '../cardslider/nextprevarrow/nextprevarrow';
import './testimonial-slider.scss';

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        arrows: true,
    };

    const cards = [
        {
            imageID: userOne,
            name: "Sarah Perez",
            address: "Quezon City",
            comment: "Chloezee made my daughter’s birthday extra special with a stunning unicorn cake! It not only looked amazing but tasted even better. Everyone at the party couldn’t stop talking about it. I’ll definitely be ordering again!",
        },
        {
            imageID: userTwo,
            name: "Amanda & Jason Williams",
            address: "Antipolo City",
            comment: "We trusted Chloezee with our wedding cake, and they exceeded our expectations. The cake was beautifully customized to match our theme, and the flavors were incredible. Thank you for being a part of our big day!",
        },
        {
            imageID: userThree,
            name: "Leo Garcia",
            address: "Marikina City",
            comment: "I ordered a custom bento cake from Chloezee, and it was a huge hit! The design was exactly what I wanted, and the cake was delicious. The whole experience, from ordering to delivery, was smooth and easy.",
        },
    ];

    return (
        <div className="testimonial-slider-container">
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <div key={index} className="p-5 card">
                        <img src={card.imageID} alt={card.name} className="card-image" />
                        <h6 className="mt-3 fw-bold card-name color-brown">{card.name}</h6>
                        <p className='mb-5 card-address'>{card.address}</p>
                        <p className="card-comment color-brown fst-italic">{card.comment}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TestimonialSlider;
