import React from 'react';
import './style.css';
import BlogPostCard from './BlogPostCard';
import BlogSidebar from './BlogSidebar';

import blog1 from '../../assets/images/blog/blog1.png';
import blog2 from '../../assets/images/blog/blog2.png';
import blog3 from '../../assets/images/blog/Image-3.png';
import blog4 from '../../assets/images/blog/Image.png';
import blog5 from '../../assets/images/blog/Image-2.png';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            date: "18 Nov",
            title: "Curabitur porttitor orci eget neque accumsan venenatis.",
            description: "Nunc fermentum.",
            image: blog1,
            category: "Food",
            author: "Admin",
            comments: 6,
        },
        {
            id: 2,
            date: "18 Nov",
            title: "Curabitur porttitor orci eget neque accumsan venenatis.",
            description: "Nunc fermentum.",
            image: blog2,
            category: "Food",
            author: "Admin",
            comments: 6,
        },
        {
            id: 2,
            date: "18 Nov",
            title: "Curabitur porttitor orci eget neque accumsan venenatis.",
            description: "Nunc fermentum.",
            image: blog3,
            category: "Food",
            author: "Admin",
            comments: 6,
        },
        {
            id: 2,
            date: "18 Nov",
            title: "Curabitur porttitor orci eget neque accumsan venenatis.",
            description: "Nunc fermentum.",
            image: blog4,
            category: "Food",
            author: "Admin",
            comments: 6,
        },
        {
            id: 2,
            date: "18 Nov",
            title: "Curabitur porttitor orci eget neque accumsan venenatis.",
            description: "Nunc fermentum.",
            image: blog5,
            category: "Food",
            author: "Admin",
            comments: 6,
        },
        {
            id: 2,
            date: "18 Nov",
            title: "Curabitur porttitor orci eget neque accumsan venenatis.",
            description: "Nunc fermentum.",
            image: blog2,
            category: "Food",
            author: "Admin",
            comments: 6,
        },
        {
            id: 2,
            date: "18 Nov",
            title: "Curabitur porttitor orci eget neque accumsan venenatis.",
            description: "Nunc fermentum.",
            image: blog2,
            category: "Food",
            author: "Admin",
            comments: 6,
        },
        {
            id: 2,
            date: "18 Nov",
            title: "Curabitur porttitor orci eget neque accumsan venenatis.",
            description: "Nunc fermentum.",
            image: blog2,
            category: "Food",
            author: "Admin",
            comments: 6,
        },
        {
            id: 2,
            date: "18 Nov",
            title: "Curabitur porttitor orci eget neque accumsan venenatis.",
            description: "Nunc fermentum.",
            image: blog2,
            category: "Food",
            author: "Admin",
            comments: 6,
        }
    ];

    return (
        <div className="blog-section">
            <div className="container">
                <BlogSidebar />
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
                        <span>{blogPosts.length} Results Found</span>
                    </div>
                    <div className="posts-grid">
                        {blogPosts.map(post => (
                            <BlogPostCard key={post.id} post={post} />
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