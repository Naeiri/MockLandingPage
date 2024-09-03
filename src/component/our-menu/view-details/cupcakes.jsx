import React from 'react';
import bgImage from '../../../assets/images/our-menu/background-menu.png';
import Img from '../../../assets/images/our-menu/view-details/img2.png';
import CakeDetails from '../../shared-component/cakedetails/cakedetails';
import Footer from '../../shared-component/footer/footer';
import Header from '../../shared-component/header/header';

const Cupcakes = () => {
    return (
        <div>
            <Header
                subtitle="Have a look at"
                title="Our Menu"
                backgroundImage={bgImage}
            />

            <CakeDetails
                cakeImage={Img}
                cakeTitle='Cupcakes'
                cakeDescription='Perfect Bite-Sized Sweetness'
                flavors='Chocolate | Vanilla | Ube | Salted Caramel'
                priceList='Cupcake Price List (per dozen)'
                price1={600}
                price2={900}
                price3={1200}
                cupcakeBullet1='Basic Cupcakes'
                cupcakeBullet2='Themed or Decorated Cupcakes'
                cupcakeBullet3='Premium Flavors or Specialty Decorations'
                includesthirdBullet={false}
                includessecondBullet={true}
                cupcakeText1='Classic flavors with simple buttercream frosting.'
                cupcakeText2='Includes custom designs or themed decorations.'
                cupcakeText3='Features premium flavors like red velvet, mocha, or special fillings, along with intricate decorations.'
            />

            <Footer />
        </div>
    )
}

export default Cupcakes