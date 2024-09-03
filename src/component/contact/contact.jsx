import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { MdOutlineEmail, MdOutlineLocationOn, MdOutlineWbSunny } from 'react-icons/md';
import { TiSocialFacebookCircular } from 'react-icons/ti';
import { WiDayCloudy, WiDayCloudyGusts } from 'react-icons/wi';
import bgImage from '../../assets/images/contact/background-contact.png';
import Footer from '../shared-component/footer/footer';
import Header from '../shared-component/header/header';
import ScrollToTop from '../shared-component/scrolltotop/scrolltotop';
import './contact.scss';

const Contact = () => {
    return (
        <div className='contact-custom-style'>
            <Header
                subtitle="Get in touch"
                title="Contact Us"
                backgroundImage={bgImage}
            />

            <div className="row color-brown custom-width">
                <div className="mt-5 px-5 col-lg-6">
                    <p className='mb-3 font-lg text-center'>Opening Hours</p>
                    <div className='d-flex justify-content-between open-hours'>
                        <div className='mb-2'>
                            <p className='fw-bold font-mid'><WiDayCloudy size={28} /> Monday - Friday</p>
                            <p>8:00 AM - 5:00 PM</p>
                        </div>
                        <div className='mb-2'>
                            <p className='fw-bold font-mid'><WiDayCloudyGusts size={28} /> Saturday</p>
                            <p>10:00 AM - 3:00 PM</p>
                        </div>
                        <div>
                            <p className='fw-bold font-mid'><MdOutlineWbSunny size={20} /> Sunday</p>
                            <p>CLOSED</p>
                        </div>
                    </div>
                    <p className='mt-4 mb-3 font-lg text-center'>Our Contacts</p>
                    <div className="mb-2">
                        <p className='font-mid'><MdOutlineLocationOn size={25} className='pb-1 me-2' />San Mateo, Rizal, Philippines</p>
                        <p>Location Cake Shop</p>
                    </div>
                    <div className="mb-2">
                        <p className='font-mid'><MdOutlineEmail size={25} className='pb-1 me-2' />contact.chloezee@gmail.com</p>
                        <p>Email Address</p>
                    </div>
                    <div className="mb-2">
                        <p className='font-mid d-flex'><TiSocialFacebookCircular size={25} className='me-2' />facebook.com/ChloeZeeCakes</p>
                        <p>Facebook Group</p>
                    </div>
                    <div>
                        <p className='font-mid'><FaInstagram size={25} className='pb-1 me-2' />instagram.com/sofiachloezion/</p>
                        <p>Instagram Account</p>
                    </div>
                </div>
                <div className="mt-5 px-5 col-lg-6">
                    <p className='mb-3 contact-subtitle fw-bold text-center'>Drop us a line</p>
                    <form>
                        <div className="row mb-2 first-field">
                            <div className='col-sm'>
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder='Full Name'
                                />
                            </div>
                            <div className='col-sm'>
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder='Email Address'
                                    required
                                />
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className="col">
                                <label htmlFor="subject" className="form-label">Subject</label>
                                <select
                                    className="form-select"
                                    id="subject"
                                    name="subject"
                                    required
                                >
                                    <option value="">Choose a Subject</option>
                                    <option value="general">General Question</option>
                                    <option value="order">Order Inquiry</option>
                                    <option value="request">Custom Cake Request</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder='Your Message'
                                ></textarea>
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            <button type="submit" className='btn button-primary-outline-custom fw-bold rounded'>SEND MESSAGE</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className='mt-5'>
                <iframe
                    width="100%"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=14.648069,%20121.146960+(ChloeZee%20Cakes%20Shop)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    title="ChloeZee Cakes Shop Location">
                </iframe>
            </div>
            <Footer />
            <ScrollToTop />
        </div>
    );
}

export default Contact;
