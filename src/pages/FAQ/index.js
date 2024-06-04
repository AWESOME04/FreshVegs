import React from 'react';
import './style.css';
import FarmerFAQ from '../../assets/images/freshvegs-farmer.png';
import Blog1 from '../../assets/images/blog/blog1.png';

const FAQData = [
    {
        question: "In eaermentum est a orke sodales socils.",
        answer: 'Lorem porittor fguia in erose,suspe. Rsusr cati rae, lometert ut temper arc. Curae aug uepat get pmateg sre rac frang sos plekr arc. Maternmus et plande et turpuis blangt. Vestbum effictri cartarued lidstr, ac commode kkoi csrsuay anfo.'
    },
    {
        question: 'Htom subjrts mosea eu nibh tempor alifermentum.',
        answer: 'In eaermentum est a orke sodales socils.'
    },
    {
        question: 'Aenean quis quam nec loctis semper dignissin.',
        answer: 'In eaermentum est a orke sodales socils.'
    },
    {
        question: 'Nulla tincldunt ansa id tempus accumsan.',
        answer: 'In eaermentum est a orke sodales socils.'
    }
];

const FAQSection = () => {
    return (
        <div className="faq-section">
            <div className="faq-header-container">
                <img
                    src={FarmerFAQ}
                    alt="FAQ Image"
                    className="faq-header-image"
                />
                <div className="faq-header-content">
                    <h2 className="faq-header">Welcome, Let's Talk About Our FreshVegs</h2>
                    {FAQData.map((item, index) => (
                        <div className="faq-item" key={index}>
                            <h3 className="faq-question">{item.question}</h3>
                            <p className="faq-answer">{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="latest-news">
                <div className="news-item">
                    <img src={Blog1} alt="News Item 1" className="news-image" />
                    <div className="news-details">
                        <span className="news-date">23</span>
                        <p className="news-description">Curubitur porttitor ard egrt neque accumsan venenatis.</p>
                        <a href="#" className="read-more">Read More</a>
                    </div>
                </div>
                <div className="news-item">
                    <img src={Blog1}  alt="News Item 2" className="news-image" />
                    <div className="news-details">
                        <span className="news-date">23</span>
                        <p className="news-description">Curubitur porttitor ard egrt neque accumsan venenatis.</p>
                        <a href="#" className="read-more">Read More</a>
                    </div>
                </div>
                <div className="news-item">
                    <img src={Blog1}  alt="News Item 3" className="news-image" />
                    <div className="news-details">
                        <span className="news-date">23</span>
                        <p className="news-description">Curubitur porttitor ard egrt neque accumsan venenatis.</p>
                        <a href="#" className="read-more">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;