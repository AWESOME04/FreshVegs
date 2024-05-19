import React from 'react';
import './style.css';
import Team1 from "../../assets/images/1.png";
import Team2 from "../../assets/images/2.png";
import Cust1 from "../../assets/images/Rob.png";
import Cust2 from "../../assets/images/Dianne.png";
import Cust3 from "../../assets/images/Pena.png";
import Farmer from "../../assets/images/fresh.png";


const AboutUs = () => {
    return (
        <div className="about-us">
            <section className="intro-section">
                <h1>100% Trusted Organic Veggies Store</h1>
                <p>Freshvegs is a Ghanaian agriculture start-up that offers an online marketplace for consumers to shop fresh and quality vegetables and have it delivered at your doorstep or at your preferred location within the shortest possible time. We make sure your favourite vegetables are delivered to you right on time for that special recipe that gives you the best nutritional value and satisfaction.</p>
                <p>We provide a wide range of fresh, quality vegetables at very affordable prices compared to the open market. We save you the hassle of commuting from home to marketplaces and the stress of moving from one vendor to other just to find affordable fresh quality vegetables.</p>
            </section>
            <section className="story-section">
                <h2>Experience Our Story...</h2>
                <div className="story-content">
                    <img src={Farmer} alt="Story" />
                    <div className="story-text">
                        <p>At Freshvegs, we value where we started from, what we have done so far. Our journey is essential to what we want to achieve and where we want to be.</p>
                        <p>Idea Conception &gt;&gt;&gt; Product Development &gt;&gt;&gt; Incorporation &gt;&gt;&gt; Team Building &gt;&gt;&gt; Operations I &gt;&gt;&gt; Product Enhancement &gt;&gt;&gt; Operations II &gt;&gt;&gt; Team Expansion</p>
                        <ul>
                            <li>100% Organic food</li>
                            <li>Great Support 24/7</li>
                            <li>Customer Feedback</li>
                            <li>100% Secure Payment</li>
                            <li>Free Shipping</li>
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
                        <button className="shop-now">Shop Now</button>
                    </div>
                </div>
            </section>
            <section className="team-section">
                <h2>Our Awesome Team</h2>
                <div className="team-content">
                    <div className="team-member">
                        <img src={Team1} alt="Anthony K.S Wortsem" />
                        <h3>Anthony K.S Wortsem</h3>
                        <p>Founder & CEO</p>
                    </div>
                    <div className="team-member">
                        <img src={Team2} alt="Sherifatu Alhassan" />
                        <h3>Sherifatu Alhassan</h3>
                        <p>Chief Operations Officer</p>
                    </div>
                    <div className="team-member">
                        <img src={Team2} alt="Nancy Amegah" />
                        <h3>Nancy Amegah</h3>
                        <p>Chief Marketing Officer</p>
                    </div>
                    <div className="team-member">
                        <img src={Team2} alt="Ernest Donkor" />
                        <h3>Ernest Donkor</h3>
                        <p>Lead, Finance</p>
                    </div>
                </div>
            </section>
            <section className="testimonials-section">
                <h2>Client Testimonial</h2>
                <div className="testimonials-content">
                    <div className="testimonial">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                        <div className="client-info">
                            <img src={Cust1} alt="Robert Fox" />
                            <p>Robert Fox</p>
                        </div>
                    </div>
                    <div className="testimonial">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                        <div className="client-info">
                            <img src={Cust2} alt="Dianne Russell" />
                            <p>Dianne Russell</p>
                        </div>
                    </div>
                    <div className="testimonial">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                        <div className="client-info">
                            <img src={Cust3} alt="Eleanor Pena" />
                            <p>Eleanor Pena</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
