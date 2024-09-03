import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import icon from '../../../assets/icon/icon.png';
import '../../our-menu/our-menu.scss';

/**
 * CakeDetails is a reusable component.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {string} props.cakeTitle
 * @param {string} props.cakeDescription
 * @param {string} props.cakeImage
 * @param {string} props.flavors
 * @param {string} props.priceList
 * @param {boolean} props.includesthirdBullet
 * @param {string} props.thirdText
 * @param {number} props.inch1
 * @param {number} props.inch2
 * @param {number} props.inch3
 * @param {string} props.priceText
 * @param {number} props.price1
 * @param {number} props.price2
 * @param {number} props.price3
 * @param {boolean} props.includessecondBullet
 * @param {string} props.cupcakeText1
 * @param {string} props.cupcakeText2
 * @param {string} props.cupcakeText3
 * @param {string} props.cupcakeBullet1
 * @param {string} props.cupcakeBullet2
 * @param {string} props.cupcakeBullet3

 *
 * @example
 * <CakeDetails
 *   cakeTitle="Sample Subtitle"
 *   cakeDescription="Sample Title"
 *   cakeImage="/path/to/your/image.png"
 *   ...
 * />
 */

const CakeDetails = ({
    cakeImage,
    cakeTitle,
    cakeDescription,
    flavors,
    priceList,
    includesthirdBullet,
    thirdText,
    inch1,
    inch2,
    inch3,
    priceText,
    price1,
    price2,
    price3,
    includessecondBullet,
    cupcakeText1,
    cupcakeText2,
    cupcakeText3,
    cupcakeBullet1,
    cupcakeBullet2,
    cupcakeBullet3
}) => {
    const navigate = useNavigate();

    return (
        <div className='menu-custom-style'>
            <div className="first-section color-brown custom-width">
                <p className='mt-5 mb-4 fs text-center text-description'>All cakes and cupcakes are handcrafted with love, using only the finest ingredients to ensure both taste and beauty.</p>
                <button onClick={() => navigate('/menu')} className='btn button-primary-outline-custom'><IoIosArrowBack /></button>
                <img src={icon} alt="ChloeeZee Icon Logo" className='icon-logo mx-auto d-block' />
                <div className="type-cakes-details px-5 d-block mx-auto border-brown">
                    <div className="row content-cakes">
                        <div className="col-md-5">
                            <img src={cakeImage} alt="Custom Cakes" className='img-cakes' />
                            <h4 className='pt-3 fw-bold'>{cakeTitle}</h4>
                            <p className="fs fst-italic">{cakeDescription}</p>
                        </div>
                        <div className="col-md-7 d-flex flex-column justify-content-between">
                            <h6 className='pt-3 fw-bold'>Available Flavors</h6>
                            <ul><li><p>{flavors}</p></li></ul>
                            <h6 className='fw-bold'>{priceList}</h6>
                            <ul>{includesthirdBullet && (<li><p><span>{inch1}</span>-inch {priceText}</p></li>)}
                                {includessecondBullet && (<li><p>{cupcakeBullet1}</p></li>)}
                                <ul><li><p>Starting at: PHP <span>{price1}</span>{includessecondBullet && (<> per dozen</>)}</p></li></ul>
                                {includessecondBullet && (
                                    <ul><li><p className='fst-italic'>{cupcakeText1}</p></li></ul>
                                )}
                                {includesthirdBullet && (<li><p><span>{inch2}</span>-inch {priceText}</p></li>)}
                                {includessecondBullet && (<li><p>{cupcakeBullet2}</p></li>)}
                                <ul><li><p>Starting at: PHP <span>{price2}</span>{includessecondBullet && (<> per dozen</>)}</p></li></ul>
                                {includessecondBullet && (
                                    <ul><li><p className='fst-italic'>{cupcakeText2}</p></li></ul>
                                )}
                                {includesthirdBullet && (<li><p><span>{inch3}</span>-inch {priceText}</p></li>)}
                                {includessecondBullet && (<li><p>{cupcakeBullet3}</p></li>)}
                                <ul><li><p>Starting at: PHP <span>{price3}</span>{includessecondBullet && (<> per dozen</>)}</p></li></ul>
                                {includessecondBullet && (
                                    <ul><li><p className='fst-italic'>{cupcakeText3}</p></li></ul>
                                )}
                            </ul>
                            {includesthirdBullet && (
                                <>
                                    <h6 className='fw-bold'>Perfect for</h6>
                                    <ul><li><p>{thirdText}</p></li></ul>
                                </>
                            )}
                            <div className='d-flex justify-content-end'>
                                <button className='btn btn-request-order fw-bold'>Request Order Inquiry</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CakeDetails