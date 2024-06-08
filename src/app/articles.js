import React from "react";
import "./introStyle.css"

const Article = ({ date, title, paragraph }) => {
    return (
        <div className="lg:mt-16 grid grid-cols-1 md:grid-cols-2 justify-start">
            <div className="date">
                {date}
                <div className="title">{title}</div>
                <div className="paragraph">{paragraph}</div>
                <a href="#" className="read-article">
                    Read article
                    <img src="Chevron-right-micro" alt="Chevron Icon" className="chevron-icon" />
                </a>
            </div>
        </div>
    );
};

export default Article;
