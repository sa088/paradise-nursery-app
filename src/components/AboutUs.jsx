import React from "react";

// AboutUs holds all of Paradise Nursery's company details.
// It can render as a floating modal (pass onClose) or inline within
// a page section (used on the landing page's right-hand panel).
function AboutUs({ onClose, inline = false }) {
  const content = (
    <>
      <h2>Welcome to Paradise Nursery, where green meets serenity!</h2>
      <p>
        At Paradise Nursery, we are passionate about bringing nature closer to
        you. Our mission is to provide a wide range of high-quality plants that
        not only enhance the beauty of your surroundings but also contribute to
        a healthier and more sustainable lifestyle.
      </p>
      <p>
        Our team of experts is dedicated to ensuring that each plant meets our
        strict standards of quality and care. Whether you're a seasoned gardener
        or just starting your green journey, we're here to support you every
        step of the way.
      </p>
      <p>
        Join us in our mission to create a greener, healthier world. Visit
        Paradise Nursery today and experience the beauty of nature right at your
        doorstep.
      </p>
    </>
  );

  if (inline) {
    return <div className="about-us-inline">{content}</div>;
  }

  return (
    <div className="about-us-overlay">
      <div className="about-us-content">
        <button className="about-us-close" onClick={onClose}>
          Close
        </button>
        {content}
      </div>
    </div>
  );
}

export default AboutUs;
