import React from 'react';

const BlogPostCard = ({ post }) => {
    return (
        <div className="post-card">
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
    );
};

export default BlogPostCard;