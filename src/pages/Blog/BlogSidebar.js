import React from 'react';
import blog_img1 from "../../assets/images/blog/Image.png";
import blog_img2 from "../../assets/images/blog/Image-1.png";
import blog_img3 from "../../assets/images/blog/Image-2.png";
import blog_img4 from "../../assets/images/blog/Image-3.png";
import blog_img5 from "../../assets/images/blog/Image-4.png";
import blog_img6 from "../../assets/images/blog/Image-5.png";

const BlogSidebar = () => {
    return (
        <div className="sidebar">
            <div className="filter">
                <h2>Filter</h2>
                <div className="search-box">
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="categories">
                    <h3>Top Categories</h3>
                    <ul>
                        <li>Fresh Fruit (314)</li>
                        <li>Vegetables (254)</li>
                        <li>Cooking (185)</li>
                        <li>Snacks (312)</li>
                        <li>Beverages (98)</li>
                        <li>Beauty & Health (76)</li>
                        <li>Bread & Bakery (65)</li>
                    </ul>
                </div>
                <div className="popular-tags">
                    <h3>Popular Tags</h3>
                    <ul>
                        <li>Healthy</li>
                        <li>Low fat</li>
                        <li>Vegetarian</li>
                        <li>Bread</li>
                        <li>Kid foods</li>
                        <li>Vitamins</li>
                        <li>Snacks</li>
                        <li>Fruits</li>
                        <li>Meat</li>
                        <li>Lunch</li>
                        <li>Dinner</li>
                    </ul>
                </div>
                <div className="gallery">
                    <h3>Our Gallery</h3>
                    <div className="gallery-images">
                        <img src={blog_img1} alt="Gallery 1" />
                        <img src={blog_img2} alt="Gallery 2" />
                        <img src={blog_img3} alt="Gallery 3" />
                        <img src={blog_img4} alt="Gallery 4" />
                        <img src={blog_img5} alt="Gallery 5" />
                        <img src={blog_img6} alt="Gallery 6" />
                    </div>
                </div>
                <div className="recently-added">
                    <h3>Recently Added</h3>
                    <ul>
                        <li>
                            <img src={blog_img1} alt="Recent 1" />
                            <p>Curabitur porttitor orci eget neque accumsan.</p>
                            <span>Apr 29, 2021</span>
                        </li>
                        <li>
                            <img src={blog_img2} alt="Recent 2" />
                            <p>Donec mattis arcu faucibus suscipit viverra.</p>
                            <span>Apr 29, 2021</span>
                        </li>
                        <li>
                            <img src={blog_img3} alt="Recent 3" />
                            <p>Quisque posuere tempus rutrum. Integer vel ex.</p>
                            <span>Apr 29, 2021</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogSidebar;