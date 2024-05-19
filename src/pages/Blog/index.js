import React from 'react';
import './style.css';
import blog_img1 from "../../assets/images/blog/Image.png";
import blog_img2 from "../../assets/images/blog/Image-1.png";
import blog_img3 from "../../assets/images/blog/Image-2.png";
import blog_img4 from "../../assets/images/blog/Image-3.png";
import blog_img5 from "../../assets/images/blog/Image-4.png";
import blog_img6 from "../../assets/images/blog/Image-5.png";


const blogPosts = [
    {
        id: 1,
        date: "18 Nov",
        title: "Curabitur porttitor orci eget neque accumsan venenatis.",
        description: "Nunc fermentum.",
        image: "../../assets/images/blog/Image-1.png",
        category: "Food",
        author: "Admin",
        comments: 6,
    },
    {
        id: 2,
        date: "18 Nov",
        title: "Curabitur porttitor orci eget neque accumsan venenatis.",
        description: "Nunc fermentum.",
        image: "path-to-your-images/blog2.jpg",
        category: "Food",
        author: "Admin",
        comments: 6,
    },
];

const Blog = () => {
    return (
        <div className="blog-section">
            <div className="container">
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
                <div className="blog-posts">
                    <div className="sort-bar">
                        <div className="sort-options">
                            <label htmlFor="sort">Sort by:</label>
                            <select id="sort" name="sort">
                                <option value="latest">Latest</option>
                                <option value="popular">Most Popular</option>
                                <option value="comments">Most Comments</option>
                            </select>
                        </div>
                        <span>52 Results Found</span>
                    </div>
                    <div className="posts-grid">
                        {blogPosts.map(post => (
                            <div key={post.id} className="post-card">
                                <img src={post.image} alt={post.title} />
                                <div className="post-info">
                                    <span className="date">{post.date}</span>
                                    <h3>{post.title}</h3>
                                    <p>{post.description}</p>
                                    <div className="post-meta">
                                        <span className="category">{post.category}</span>
                                        <span className="author">By {post.author}</span>
                                        <span className="comments">{post.comments} Comments</span>
                                    </div>
                                    <a href="#" className="read-more">Read More</a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="pagination">
                        <a href="#">&laquo;</a>
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">&raquo;</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
