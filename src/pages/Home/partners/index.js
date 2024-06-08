import React from "react";
import Slider from "react-slick";
import partner1 from "../../../assets/images/partner1.png";
import partner2 from "../../../assets/images/partner2.png";
import partner3 from "../../../assets/images/partner3.png";
import './style.css';

export default function Partners() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="stats-section">
            <Slider {...settings}>
                <div>
                    <img src={partner1} alt="Partner 1" />
                </div>
                <div>
                    <img src={partner2} alt="Partner 2" />
                </div>
                <div>
                    <img src={partner3} alt="Partner 3" />
                </div>
            </Slider>
        </div>
    );
}