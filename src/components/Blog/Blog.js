import React from 'react';
import { Container } from 'react-bootstrap';
import img1 from '../../images/blog1.png';
import img2 from '../../images/blog2.png';
import img3 from '../../images/blog3.png';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blog = () => {
    const blogData = [
        {
            title: 'Fast Delivery',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            img: img1
        },
        {
            title: 'A Good healthy food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            img: img2
        },
        {
            title: 'Home delivery',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            img: img3
        },
    ]
    return (
        <Container>
            <div className="top-text py-4">
                <h2>Why you should choose us</h2>
                <p>We are the best food delivery store for your home. Always get testy and healthy foods from us at reasonable cost.</p>
            </div>
            <div className="row">
                {
                    blogData.map((blog, index) => <SingleBlog key = {index*10} blog={blog}></SingleBlog> )
                }
            </div>
        </Container>
    );
};

export default Blog;