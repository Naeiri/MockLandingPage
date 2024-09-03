import React from 'react'
import { BsCalendar2CheckFill } from "react-icons/bs"
import { GiCakeSlice, GiCupcake } from "react-icons/gi"
import { MdCake } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import icon from '../../assets/icon/icon.png'
import bgImage from '../../assets/images/our-menu/background-menu.png'
import Cupcakes from '../../assets/images/our-menu/cupcakes.png'
import CustomCakes from '../../assets/images/our-menu/custom-cakes.png'
import Sale1 from '../../assets/images/our-menu/sale1.png'
import Sale2 from '../../assets/images/our-menu/sale2.png'
import SpecialtyCakes from '../../assets/images/our-menu/specialty-cakes.png'
import Footer from '../shared-component/footer/footer'
import Header from '../shared-component/header/header'
import ScrollToTop from '../shared-component/scrolltotop/scrolltotop'
import './our-menu.scss'

const OurMenu = () => {
    const navigate = useNavigate();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <div className="menu-custom-style">
                <Header
                    subtitle="Have a look at"
                    title="Our Menu"
                    backgroundImage={bgImage}
                />

                <div className="sale custom-width my-5">
                    <div className="d-flex flex-column flex-lg-row gap-3 mx-5 px-5">
                        <div><img src={Sale1} alt="Big Sale 1" className='img-sale' /></div>
                        <div><img src={Sale2} alt="Big Sale 2" className='img-sale' /></div>
                    </div>
                </div>

                <div className="mb-5 first-section color-brown custom-width">
                    <p className='mt-5 mb-4 fs text-center text-description'>All cakes and cupcakes are handcrafted with love, using only the finest ingredients to ensure both taste and beauty.</p>
                    <img src={icon} alt="ChloeeZee Icon Logo" className='icon-logo mx-auto d-block' />
                    <div className="type-cakes d-block mx-auto border-brown">
                        <div className="row content-cakes">
                            <div className="col-lg px-0 custom-cakes border-brown">
                                <img src={CustomCakes} alt="Custom Cakes" className='img-cakes' />
                                <div className='p-3 bg-primary-light rounded-bottom-custom'>
                                    <h4 className='fw-bold'>Custom Cakes</h4>
                                    <p className="fst-italic">Designed for Your Special Moments</p>
                                    <button onClick={() => { scrollToTop(); navigate('/menu/custom-cakes') }} className='mt-4 fw-bold btn btn-view-details'>View Details</button>
                                </div>
                            </div>
                            <div className="col-lg px-0 mx-5 cupcakes border-brown">
                                <img src={Cupcakes} alt="Cupcakes" className='img-cakes' />
                                <div className='p-3 bg-primary-light rounded-bottom-custom'>
                                    <h4 className='fw-bold'>Cupcakes</h4>
                                    <p className="fst-italic">Perfect Bite-Sized Sweetness</p>
                                    <button onClick={() => { scrollToTop(); navigate('/menu/cupcakes') }} className='mt-4 fw-bold btn btn-view-details'>View Details</button>
                                </div>
                            </div>
                            <div className="col-lg px-0 specialty-cakes border-brown">
                                <img src={SpecialtyCakes} alt="Specialty Cakes" className='img-cakes' />
                                <div className='p-3 bg-primary-light rounded-bottom-custom'>
                                    <h4 className='fw-bold'>Specialty Cakes</h4>
                                    <p className="fst-italic">Adorable & Delicious Bento Cakes</p>
                                    <button onClick={() => { scrollToTop(); navigate('/menu/specialty-cakes') }} className='mt-4 fw-bold btn btn-view-details'>View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='second-section custom-width'>
                    <p className="title-section text-center my-5 color-brown">Pricing & Ordering</p>
                    <div className="position-relative">
                        <div className="timeline-line position-absolute start-50 top-0 bottom-0"></div>
                        <div className="row">
                            <div className="col-md-6 mb-5 pe-5 justify-content-end d-flex">
                                <div className="d-flex align-items-center">
                                    <div className="timeline-content me-2 p-3 rounded">
                                        <h3 className="fs-5 mb-2">Custom Cakes</h3>
                                        <p>Starting Price is at PHP <span>800</span> - PHP <span>1,500</span></p>
                                    </div>
                                    <div className="timeline-dash me-2"></div>
                                    <div className="timeline-icon">
                                        <MdCake size={24} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ps-5 mb-5 offset-md-6">
                                <div className="d-flex align-items-center">
                                    <div className="timeline-icon ms-4 me-2">
                                        <GiCupcake size={24} />
                                    </div>
                                    <div className="timeline-dash me-2"></div>
                                    <div className="timeline-content p-3 rounded">
                                        <h3 className="fs-5 mb-2">Cupcakes (per dozen)</h3>
                                        <p>Starting Price is at PHP <span>600</span> - PHP <span>900</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-5 pe-5 justify-content-end d-flex">
                                <div className="d-flex align-items-center">
                                    <div className="timeline-content me-2 p-3 rounded">
                                        <h3 className="fs-5 mb-2">Specialty Cakes</h3>
                                        <p>Starting Price is at PHP <span>600</span> - PHP <span>800</span></p>
                                    </div>
                                    <div className="timeline-dash me-2"></div>
                                    <div className="timeline-icon">
                                        <GiCakeSlice size={24} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ps-5 offset-md-6">
                                <div className="d-flex align-items-center">
                                    <div className="timeline-icon ms-4 me-2">
                                        <BsCalendar2CheckFill size={18} />
                                    </div>
                                    <div className="timeline-dash me-2"></div>
                                    <div className="timeline-content p-3 rounded">
                                        <h3 className="fs-5 mb-2">Lead Time</h3>
                                        <p>Please order <span>3</span> - <span>7</span> days in advance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                <ScrollToTop />
            </div>
        </>
    )
}

export default OurMenu