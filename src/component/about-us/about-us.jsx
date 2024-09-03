import React, { useState } from 'react';
import bgImage from '../../assets/images/about-us/background-about.png';
import Footer from '../shared-component/footer/footer';
import Header from '../shared-component/header/header';
import ScrollToTop from '../shared-component/scrolltotop/scrolltotop';
import './about-us.scss';
import AccordionItem from './accordionitem';
import AnimatedNumber from './animatednumber';

const images = [
    { src: 'src/assets/images/about-us/image1.png', alt: 'Image 1' },
    { src: 'src/assets/images/about-us/image2.png', alt: 'Image 2' },
    { src: 'src/assets/images/about-us/image3.png', alt: 'Image 3' },
    { src: 'src/assets/images/about-us/image4.png', alt: 'Image 4' },
];

const AboutUs = () => {
    const [selectedImage, setSelectedImage] = useState(images[0].src);
    const [openIndex, setOpenIndex] = useState(0);

    const handleThumbnailClick = (src) => {
        setSelectedImage(src);
    };

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='about-custom-style'>
            <Header
                subtitle="A few words"
                title="About Us"
                backgroundImage={bgImage}
            />

            <div className="mt-5 row gap-3 custom-width">
                <div className="col-lg">
                    <p className='title-section color-brown mb-3'>We Bake with Love</p>
                    <div className="accordion">
                        <AccordionItem
                            title="Our Story"
                            isOpen={openIndex === 0}
                            toggle={() => toggleAccordion(0)}
                        >
                            Chloezee began in 2020, born out of a passion for baking and a desire to bring joy to people’s lives through beautiful, custom-made cakes. What started as a one-person operation in a home kitchen has grown into a beloved cake shop, known for its dedication to quality, creativity, and customer satisfaction.
                        </AccordionItem>
                        <AccordionItem
                            title="Our Values"
                            isOpen={openIndex === 1}
                            toggle={() => toggleAccordion(1)}
                        >
                            At Chloezee, every cake is handcrafted with love and care. We use only the finest ingredients, ensuring that each creation not only looks stunning but tastes incredible too. My mission is simple: to make your special moments even sweeter, without breaking the bank.
                        </AccordionItem>
                        <AccordionItem
                            title="Why Choose Us?"
                            isOpen={openIndex === 2}
                            toggle={() => toggleAccordion(2)}
                        >
                            Chloezee is your go-to cake shop for all occasions. As a solo baker, I take pride in every detail, from custom designs to the flavors you love. Your satisfaction is my top priority, and I’m committed to bringing your cake vision to life.
                        </AccordionItem>
                    </div>
                </div>
                <div className="col-lg">
                    <div className="image-gallery">
                        <div className="main-image">
                            <img src={selectedImage} alt="Selected" className="img-fluid" />
                        </div>
                        <div className="thumbnails d-flex justify-content-center mt-3">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.src}
                                    alt={image.alt}
                                    className={`thumbnail img-thumbnail ${selectedImage === image.src ? 'active' : ''}`}
                                    onClick={() => handleThumbnailClick(image.src)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 baker">
                <div className="content color-brown">
                    <p className='title-section mb-5'>Meet the Baker</p>
                    <p className='fs text-center content-description'><strong>Gina</strong> is the heart and hands behind Chloezee. Her journey into baking began with a deep love for creating beautiful and delicious treats for friends and family. In 2020, she decided to turn that passion into a business, and Chloezee was born. Since then, Gina has been dedicated to crafting custom cakes and cupcakes that bring joy to every celebration.</p>
                </div>
            </div>

            <div className="stats">
                <div className="content">
                    <div className="d-flex flex-column flex-md-row gap-5 justify-content-center align-items-center color-brown">
                        <div className='stats-item text-center'>
                            <p className='stats-number'><AnimatedNumber n={4} /></p>
                            <div className="stats-line"></div>
                            <p>Years of Baking Excellence</p>
                        </div>
                        <div className='stats-item text-center'>
                            <p className='stats-number'><AnimatedNumber n={97} /></p>
                            <div className="stats-line"></div>
                            <p>Unique Cake Designs Created</p>
                        </div>
                        <div className='stats-item text-center'>
                            <p className='stats-number'><AnimatedNumber n={306} /></p>
                            <div className="stats-line"></div>
                            <p>Cakes Crafted with Love</p>
                        </div>
                        <div className='stats-item text-center'>
                            <p className='stats-number'><AnimatedNumber n={245} /></p>
                            <div className="stats-line"></div>
                            <p>Happy Customers Served</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default AboutUs