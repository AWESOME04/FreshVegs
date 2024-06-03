import React from "react";
import Cust1 from "../../assets/images/Rob.png";
import Cust2 from "../../assets/images/Dianne.png";
import Cust3 from "../../assets/images/Pena.png";

export default function clientTestimonials(){
    return (
        <section className="testimonials-section">
        <h2>Client Testimonial</h2>
        <div className="testimonials-content">
        <div className="testimonial">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <div className="client-info">
                <img src={Cust1} alt="Client" />
                <div>
                    <p>Robert Fox</p>
                    <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="testimonial">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <div className="client-info">
                <img src={Cust2} alt="Client" />
                <div>
                    <p>Dianne Russell</p>
                    <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="testimonial">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <div className="client-info">
                <img src={Cust3} alt="Client" />
                <div>
                    <p>Eleanor Pena</p>
                    <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}