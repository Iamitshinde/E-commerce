import React from 'react';
import Layout from '../components/Layout/Layout.js';

const Policy = () => {
  return (
    <Layout title={"policy"}>
      <div className="container my-5">
        <div className="row align-items-center">
          
          {/* Left Section - Image */}
          <div className="col-md-6">
            <img
              src="/image/eCommerce-data-privacy.jpg"
              alt="Privacy Policy"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>

          {/* Right Section - Text */}
          <div className="col-md-6">
            <h1 className="bg-dark text-white text-center p-2 rounded">PRIVACY POLICY</h1>
            <p className="mt-3" style={{ textAlign: "justify", lineHeight: "1.8" }}>
              At <strong>Digital Nexus</strong>, we value your privacy and are committed to
              protecting your personal information. This Privacy Policy outlines how we collect,
              use, and safeguard your data when you interact with our website.
            </p>
            <p style={{ textAlign: "justify", lineHeight: "1.8" }}>
              We collect information such as your name, email, and purchase details to improve your
              experience and provide better services. We never sell or share your personal data
              with third parties without your consent, except as required by law.
            </p>
            <p style={{ textAlign: "justify", lineHeight: "1.8" }}>
              By using our website, you agree to the terms of this Privacy Policy. We may update
              this policy periodically, and any changes will be reflected on this page. We encourage
              you to review this section regularly.
            </p>
            <p style={{ fontStyle: "italic", color: "#666" }}>
              For any privacy-related concerns, feel free to contact our support team anytime.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
