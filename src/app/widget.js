import React from "react";
import "./widegetStyle.css"
const Widget = () => {
    return (
        <div className="widget-container">
            {/* Title */}
            <div className="title">
                <span className="email-icon">✉️</span> {/* Email icon */}
                <span className="title-text">Stay Up to Date</span> {/* Title text */}
            </div>
            {/* Body */}
            <div className="body">
                <p>This is the body of the widget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            {/* Form */}
            <div className="form">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
        </div>
    );
};

export default Widget;
