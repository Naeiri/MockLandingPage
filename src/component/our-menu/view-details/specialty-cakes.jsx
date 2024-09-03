import React from 'react';
import bgImage from '../../../assets/images/our-menu/background-menu.png';
import Img from '../../../assets/images/our-menu/view-details/img3.png';
import CakeDetails from '../../shared-component/cakedetails/cakedetails';
import Footer from '../../shared-component/footer/footer';
import Header from '../../shared-component/header/header';

const SpecialtyCakes = () => {
    return (
        <div>
            <Header
                subtitle="Have a look at"
                title="Our Menu"
                backgroundImage={bgImage}
            />

            <CakeDetails
                cakeImage={Img}
                cakeTitle='Specialty Cakes'
                cakeDescription='Adorable & Delicious Bento Cakes'
                flavors='Chocolate | Vanilla | Matcha | Red Velvet | Ube | Mango'
                priceList='Specialty Cake Price List'
                inch1={4}
                inch2={5}
                inch3={6}
                priceText='Bento Cake (Basic Design)'
                price1={600}
                price2={800}
                price3={1000}
                includesthirdBullet={true}
                thirdText='Birthdays | Gifts | Special Occasions | Personal Treats | Small Gatherings | Holiday Celebration'
                includessecondBullet={false}
            />

            <Footer />
        </div>
    )
}

export default SpecialtyCakes