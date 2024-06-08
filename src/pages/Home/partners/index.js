import React, { useState, useEffect } from 'react';
import partner1 from '../../../assets/images/partner-1.svg';
import partner2 from '../../../assets/images/partner-2.svg';
import partner3 from '../../../assets/images/partner-3.svg';
import partner4 from '../../../assets/images/partner-4.svg';
import partner5 from '../../../assets/images/partner-5.svg';
import './style.css';

const PartnerSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const partners = [partner1, partner2, partner3, partner4, partner5];
    const slideInterval = 5000; // Change the interval duration as desired (in milliseconds)

    const goToPrevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? partners.length - 1 : currentSlide - 1);
    };

    const goToNextSlide = () => {
        setCurrentSlide(currentSlide === partners.length - 1 ? 0 : currentSlide + 1);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            goToNextSlide();
        }, slideInterval);

        return () => clearInterval(intervalId);
    }, [currentSlide, slideInterval]);

    return (
        <div className="partner-slider">
            <div className="slider-container">
                <img src={partners[currentSlide]} alt="Partner" className="slider-image" />
            </div>
            <div className="slider-dots">
                {partners.map((_, index) => (
                    <span
                        key={index}
                        className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default PartnerSlider;