import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import GCash from '../../../assets/logo/payment/gcash.png';
import MasterCard from '../../../assets/logo/payment/mastercard.png';
import Paymaya from '../../../assets/logo/payment/paymaya.png';
import Paypal from '../../../assets/logo/payment/paypal.png';
import Visa from '../../../assets/logo/payment/visa.png';
import './footer.scss';

const Footer = () => {
    return (
        <>
            <div className="pb-5 footer">
                <div className="custom-width">
                    <div className="mb-5 text-center">
                        <p className='mt-5 title-section color-brown'>Stay Sweetly Informed!</p>
                        <p className="mb-5 subtitle fst-italic">Join the Chloezee family and be the first to know about exclusive deals, new cake designs, and baking tips delivered straight to your inbox!</p>
                        <div className="d-flex justify-content-center">
                            <input type="text" placeholder='Your email address...' className='form-control rounded me-3 mb-1' />
                            <button className='fw-bold btn button-primary-outline-custom rounded'>SUBSCRIBE</button>
                        </div>
                        <p className='subtitle-1'>We respect your privacy. No spam, just delicious updates.</p>
                    </div>

                    <div className="mx-3">
                        <div className="row justify-content-between info-container">
                            <div className="mb-4 col-lg-3 text-start">
                                <h6 className='mb-3 fw-bold'>Open hours</h6>
                                <p className='fs'>Mon to Fri: 8 AM - 5 PM</p>
                                <p className='fs'>Sat: 10 AM - 3 PM</p>
                            </div>
                            <div className="mb-4 col-lg-3 text-start">
                                <h6 className='mb-3 fw-bold'>Contact</h6>
                                <p className='fs align-items-center'><FaLocationDot size={20} className='me-3 icon-center' />San Mateo, Rizal, Philippines</p>
                                <p className='fs align-items-center'><MdEmail size={20} className='me-3 icon-center' />contact.chloezee@gmail.com</p>
                            </div>
                            <div className="mb-4 col-lg-3 text-start">
                                <h6 className='mb-3 fw-bold'>Follow us on</h6>
                                <FaFacebook className='me-2 p-1 icon-follow' size={30} />
                                <RiInstagramFill className='p-1 icon-follow' size={30} />
                            </div>
                        </div>

                        <div class="mt-5 row justify-content-between align-items-center row-reverse-order">
                            <div class="col">
                                <p>&copy; 2024 ChloeZee Cakes Shop, All rights reserved. <br />Designed and developed by Erin</p>
                            </div>
                            <div class="col">
                                <div className='accept-offer'>
                                    <p>We Accept:</p>
                                    <div className='ms-2'>
                                        <img src={Visa} alt="visa logo" className='logo-payment' />
                                        <img src={MasterCard} alt="mastercard logo" className='logo-payment' />
                                        <img src={GCash} alt="gcash logo" className='logo-payment' />
                                        <img src={Paypal} alt="paypal logo" className='logo-payment' />
                                        <img src={Paymaya} alt="paymaya logo" className='logo-payment' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer