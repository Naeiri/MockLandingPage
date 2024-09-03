import React from 'react';
import bgImage from '../../../assets/images/our-menu/background-menu.png';
import Img from '../../../assets/images/our-menu/view-details/img1.png';
import CakeDetails from '../../shared-component/cakedetails/cakedetails';
import Footer from '../../shared-component/footer/footer';
import Header from '../../shared-component/header/header';

const CustomCakes = () => {

    return (
        <div>
            <Header
                subtitle="Have a look at"
                title="Our Menu"
                backgroundImage={bgImage}
            />

            <CakeDetails
                cakeImage={Img}
                cakeTitle='Custom Cakes'
                cakeDescription='Designed for Your Special Moments'
                flavors='Chocolate | Vanilla | Red Velvet | Mocha | Ube | Mango'
                priceList='Custom Cake Price List'
                inch1={6}
                inch2={8}
                inch3={10}
                priceText='Round Cake (Basic Design)'
                price1={800}
                price2={1500}
                price3={2500}
                includesthirdBullet={true}
                thirdText='Birthdays | Weddings | Anniversaries'
                includessecondBullet={false}
            />

            <Footer />
        </div>
    )
}

export default CustomCakes