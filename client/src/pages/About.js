import React from 'react';
import Layout from '../components/Layout/Layout.js';

const About = () => {
  return (
    <Layout>
      <div className="container my-5">
        <div className="row align-items-center">
          
          {/* Left Section - Image */}
          <div className="col-md-6">
            <img
              src="/image/about.jpeg"
              alt="About us"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>

          {/* Right Section - Text */}
          <div className="col-md-6">
            <h1 className="bg-dark text-white text-center p-2 rounded">ABOUT US</h1>
            <p className="mt-3" style={{ textAlign: "justify", lineHeight: "1.8" }}>
              Welcome to <strong>Digital Nexus</strong> — your one-stop destination for all your
              digital product needs. We aim to deliver top-quality tech products with seamless user
              experiences. Our mission is to bring innovation and convenience to your fingertips.
            </p>
            <p style={{ textAlign: "justify", lineHeight: "1.8" }}>
              Our team constantly works on improving our platform, ensuring transparency,
              reliability, and fast delivery. Whether you're looking for gadgets, software, or tech
              accessories, we’re committed to providing the best at competitive prices.
            </p>
            <p style={{ fontStyle: "italic", color: "#666" }}>
              “Technology is best when it brings people together.” – Matt Mullenweg
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
