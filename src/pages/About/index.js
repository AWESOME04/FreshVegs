import React from 'react';
import './style.css';
import Team1 from "../../assets/images/1.png";
import Team2 from "../../assets/images/2.png";
import Farmer from "../../assets/images/fresh.png";
import Farmer2 from "../../assets/images/fresh2.png";
import Farmer3 from "../../assets/images/Farmer3.png";
import vector1 from "../../assets/vectors/Icon.png";
import vector2 from "../../assets/vectors/Icon-1.png";
import vector3 from "../../assets/vectors/Icon-2.png";
import vector4 from "../../assets/vectors/leaf 2.png";
import ClientTestimonials from "../../components/clientTestimonials/index";

const AboutUs = () => {
    return (
        <div className="about-us">
            <section className="intro-section">
                <div className="intro-content">
                    <h1>100% Trusted Organic Veggies Store</h1>
                    <p>Freshvegs is a Ghanaian agriculture start-up that offers an online marketplace for consumers to shop fresh and quality vegetables and have it delivered at your doorstep or at your preferred location within the shortest possible time. We make sure your favourite vegetables are delivered to you right on time for that special recipe that gives you the best nutritional value and satisfaction.</p>
                    <p>We provide a wide range of fresh, quality vegetables at very affordable prices compared to the open market. We save you the hassle of commuting from home to marketplaces and the stress of moving from one vendor to other just to find affordable fresh quality vegetables.</p>
                </div>
                <div className="intro-image">
                    <img src={Farmer} alt="Farmer" />
                </div>
            </section>

            <section className="story-section">
                <h2>Experience Our Story...</h2>
                <div className="story-content">
                    <div className="story-image">
                        <img src={Farmer2} alt="Story" />
                    </div>
                    <div className="story-text">
                        <p>At Freshvegs, we value where we started from, what we have done so far. Our journey is essential to what we want to achieve and where we want to be.</p>
                        <p>Idea Conception &gt;&gt;&gt; Product Development &gt;&gt;&gt; Incorporation &gt;&gt;&gt; Team Building &gt;&gt;&gt; Operations I &gt;&gt;&gt; Product Enhancement &gt;&gt;&gt; Operations II &gt;&gt;&gt; Team Expansion</p>
                        <ul>
                            <li>100% Organic food <img src={vector1} alt="vector1" className="vector-icon"/> </li>
                            <li>Great Support 24/7 <img src={vector2} alt="vector1" className="vector-icon"/></li>
                            <li>Customer Feedback <img src={vector3} alt="vector1" className="vector-icon"/></li>
                            <li>100% Secure Payment <img src={vector4} alt="vector1" className="vector-icon"/></li>
                            <li>Free Shipping <img src={vector1} alt="vector1" className="vector-icon"/></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="vision-mission-section">
                <h2>Our Vision & Mission</h2>
                <div className="vision-mission-content">
                    <div className="vision">
                        <h3>Vision</h3>
                        <p>Establish a sustainable food system with the help of technology to contribute to zero post-harvest losses, enhance productivity, improve food security as well as improve economic wellbeing of smallholder farmers.</p>
                    </div>
                    <div className="mission">
                        <h3>Mission</h3>
                        <p>FreshVegs aims to use technology to become the leading agriculture supply chain platform for vegetables in Africa, by transforming the means fresh vegetables are sourced from producers, transported, handled and sold to consumers.</p>
                    </div>
                    <div className="mission-image">
                        <img src={Farmer3} alt="Mission" />
                    </div>
                </div>
            </section>

            <section className="team-section">
                <h2>Our Awesome Team</h2>
                <div className="team-content">
                    <div className="team-member">
                        <img src={Team1} alt="Team Member" />
                        <h3>Anthony K.S Wortsem</h3>
                        <p>Founder & CEO</p>
                    </div>
                    <div className="team-member">
                        <img src={Team2} alt="Team Member" />
                        <h3>Sherifatu Alhassan</h3>
                        <p>Chief Operations Officer</p>
                    </div>
                    <div className="team-member">
                        <img src={Team2} alt="Team Member" />
                        <h3>Nancy Amegah</h3>
                        <p>Chief Marketing Officer</p>
                    </div>
                    <div className="team-member">
                        <img src={Team2} alt="Team Member" />
                        <h3>Ernest Donkor</h3>
                        <p>Lead, Finance</p>
                    </div>
                </div>
            </section>
            <ClientTestimonials/>
        </div>
    );
}

export default AboutUs;