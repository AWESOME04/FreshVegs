import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="contact-page">
            <div className="contact-info">
                <div className="address">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <p>2715 Ash Dr, San Jose, South Dakota 83475</p>
                </div>
                <div className="email">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>proxy@gmail.com</p>
                    <p>help.proxy@gmail.com</p>
                </div>
                <div className="phone">
                    <FontAwesomeIcon icon={faPhone} />
                    <p>(219) 555-0114</p>
                    <p>(605) 335-0487</p>
                </div>
            </div>

            <div className="contact-form">
                <h2>Just Say Hello!</h2>
                <p>
                    Do you fancy saying hi to me or you want to get started with your project area you need any help? Feel free to
                    contact me.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
            <textarea
                name="message"
                rows="5"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                        Send Message
                    </button>
                </form>
            </div>

            <div className="map">
                {/* You can embed a map component here, e.g., Google Maps, Leaflet, etc. */}
                <iframe
                    src="https://maps.google.com/maps?q=2715%20Ash%20Dr%2C%20San%20Jose%2C%20South%20Dakota%2083475&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    title="Company Location"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default ContactPage;