import React from 'react';
import { Carousel } from 'react-bootstrap';
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlinePayments } from "react-icons/md";
import { PiHandHeartBold } from "react-icons/pi";
import { RiMedalFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/icon/icon.png';
import Img01 from '../../assets/images/home/first-section/img01.png';
import Img02 from '../../assets/images/home/first-section/img02.png';
import Img03 from '../../assets/images/home/first-section/img03.png';
import Img04 from '../../assets/images/home/first-section/img04.png';
import ContentImage from '../../assets/images/home/third-section/content-image.png';
import ShapeImage from '../../assets/images/home/third-section/shape-image.png';
import CardSlider from '../shared-component/cardslider/cardslider';
import CarouselItems from '../shared-component/carousel-item/carousel-item';
import Footer from '../shared-component/footer/footer';
import ScrollToTop from '../shared-component/scrolltotop/scrolltotop';
import TestimonialSlider from '../shared-component/testimonialslider/testimonial-slider';
import './Home.scss';

const Home = () => {
    const navigate = useNavigate();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div className='home-custom-style'>
            <div className="carousel-container">
                <Carousel>
                    <Carousel.Item><CarouselItems imageSrc={Img01} altText="First slide" /></Carousel.Item>
                    <Carousel.Item><CarouselItems imageSrc={Img02} altText="Second slide" /></Carousel.Item>
                    <Carousel.Item><CarouselItems imageSrc={Img03} altText="Third slide" /></Carousel.Item>
                    <Carousel.Item><CarouselItems imageSrc={Img04} altText="Fourth slide" /></Carousel.Item>
                </Carousel>
                <div className="carousel-caption-custom">
                    <h1>Welcome to</h1>
                    <h5 className='pb-1 ps-3'>ChloeZee</h5>
                    <p>Your Home for Custom-Made Cakes & Cupcakes. Handcrafted for Every Special Occasion at Prices You'll Love.</p>
                    <button className='mt-5 btn button-primary-custom fw-bold'>ORDER NOW</button>
                </div>
            </div>

            <div className='second-section-style'>
                <div className='pt-5 text-center custom-width'>
                    <img src={Logo} alt="ChloeZee Icon" className='logo-custom' />
                    <p className='mb-5 title-section color-brown'>Our Customizable Offerings</p>
                    <CardSlider />
                </div>
            </div>

            <div className="third-section-style">
                <div className="shaped-image" style={{ '--mask-image': `url(${ShapeImage})` }}>
                    <img src={ContentImage} alt="Content" className="content-image" />
                    <div className='features rounded p-5 text-center'>
                        <div className='d-flex features-gap'>
                            <div className="feature-content">
                                <TbTruckDelivery size={60} className='icon-features' />
                                <h3 className='fw-bold'>Fast Delivery</h3>
                                <p className='fst-italic'>Cakes arrive quickly.</p>
                            </div>
                            <div className="feature-content">
                                <PiHandHeartBold size={60} className='icon-features' />
                                <h3 className='fw-bold'>Made with Love</h3>
                                <p className='fst-italic'>Crafted with care.</p>
                            </div>
                            <div className="feature-content">
                                <MdOutlinePayments size={60} className='icon-features' />
                                <h3 className='fw-bold'>Safety Payment</h3>
                                <p className='fst-italic'>Secure payment process.</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center features-gap-1'>
                            <div className="">
                                <RiMedalFill size={60} className='icon-features' />
                                <h3 className='fw-bold'>Exceptional Quality</h3>
                                <p className='fst-italic'>Premium ingredients guaranteed.</p>
                            </div>
                            <div className="">
                                <HiOutlineLightBulb size={60} className='icon-features' />
                                <h3 className='fw-bold'>Artistic Designs</h3>
                                <p className='fst-italic'>Unique, custom designs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fourth-section-style custom-width'>
                <div className='pt-5 text-center'>
                    <img src={Logo} alt="ChloeZee Icon" className='logo-custom' />
                    <p className='mb-5 title-section color-brown'>Cake Gallery</p>
                    <div className="cake-gallery-grid">
                        <img src="src/assets/images/home/fourth-section/img-1.png" alt="Cake 1" className="cake-img" />
                        <img src="src/assets/images/home/fourth-section/img-3.png" alt="Cake 3" className="cake-img grid-row-span-2" />
                        <img src="src/assets/images/home/fourth-section/img-4.png" alt="Cake 4" className="cake-img" />
                        <img src="src/assets/images/home/fourth-section/img-2.png" alt="Cake 2" className="cake-img" />
                        <img src="src/assets/images/home/fourth-section/img-5.png" alt="Cake 5" className="cake-img grid-row-span-2" />
                        <img src="src/assets/images/home/fourth-section/img-6.png" alt="Cake 6" className="cake-img grid-col-span-2" />
                    </div>
                </div>
            </div>

            <div className="fifth-section-style my-5">
                <div className="seasonal-sale p-5 rounded custom-width">
                    <p className='mb-3 title-section'>Seasonal Sale</p>
                    <p className='mb-5 seasonal-description fs fst-italic'>Enjoy exclusive discounts on our deliciously homemade, custom-made cakes & cupcakes. Perfect for every occasion this season—don’t miss out!</p>
                    <button onClick={() => { scrollToTop(); navigate('/menu') }} className='btn button-secondary-custom'>VIEW MENU</button>
                </div>
            </div>

            <div className='sixth-section-style custom-width'>
                <div className='pt-3 text-center'>
                    <img src={Logo} alt="ChloeZee Icon" className='logo-custom' />
                    <p className='mb-5 title-section color-brown'>Testimonials</p>
                    <div className='text-center'>
                        <TestimonialSlider />
                    </div>
                </div>
            </div>
            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default Home;
