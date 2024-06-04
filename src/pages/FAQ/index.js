import React from 'react';
import './style.css';

const FAQData = [
    {
        question: "Let's talk about fresh vegs.",
        answer: 'In eaermentum est a orke sodales socils. Lorem porittor fguia in erose,suspe. Rsusr cati rae, lometert ut temper arc. Curae aug uepat get pmateg sre rac frang sos plekr arc. Maternmus et plande et turpuis blangt. Vestbum effictri cartarued lidstr, ac commode kkoi csrsuay anfo.'
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
            <h2 className="faq-header">Welcome, Let's Talk About Our FreshVegs</h2>
            {FAQData.map((item, index) => (
                <div className="faq-item" key={index}>
                    <h3 className="faq-question">{item.question}</h3>
                    <p className="faq-answer">{item.answer}</p>
                </div>
            ))}
        </div>
    );
};

export default FAQSection;