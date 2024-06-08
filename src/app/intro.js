import React from "react";
import Article from "./articles.js";
import Widget from "./widget.js"


const Intro = () => {
    return (
        <div className="flex flex-col py-12 bg-white pl-4 ml-60">
            {/* Image */}
            <img
                src="./tima.jpeg" // Replace with your image URL
                alt="Profile"
                className="rounded-full h-24 w-24 mb-4"
            />

            {/* Content */}
            <h1 className="text-4xl font-bold text-gray-800 mb-1 max-w-lg">
                Software Engineer, father, and believer
            </h1>
            <p className="text-gray-700 md:my-12 max-w-3xl">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in
                hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
                ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...
            </p>
            <div className="flex space-x-4">
                <a
                    href="https://github.com/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                >
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 3a4.48 4.48 0 00-4.49 4.49c0 .35.04.69.1 1.02A12.94 12.94 0 013 4.53a4.48 4.48 0 00-.61 2.27A4.48 4.48 0 004.48 11a4.48 4.48 0 01-2.03-.56v.06a4.48 4.48 0 003.59 4.41 4.52 4.52 0 01-2.02.08 4.48 4.48 0 004.19 3.11 9.05 9.05 0 01-6.66 1.85A12.8 12.8 0 007 21c8.29 0 12.83-6.87 12.83-12.83 0-.2-.01-.39-.02-.59A9.19 9.19 0 0023 3z" />
                    </svg>
                </a>
                <a
                    href="https://twitter.com/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-500"
                >
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.18 6.84 9.5.5.09.66-.22.66-.49 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.67-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.03A9.55 9.55 0 0112 6.81c.85.004 1.71.115 2.51.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.66.64.69 1.03 1.58 1.03 2.67 0 3.83-2.34 4.68-4.57 4.92.36.31.68.93.68 1.87 0 1.35-.01 2.44-.01 2.77 0 .27.17.59.67.49A10.004 10.004 0 0022 12c0-5.52-4.48-10-10-10z" />
                    </svg>
                </a>
                <a
                    href="https://linkedin.com/in/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-800"
                >
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 00-6 6v5h-4v-5a6 6 0 1112 0v5h-4v-5a6 6 0 00-6-6zM2 9a2 2 0 114 0 2 2 0 01-4 0zM4 13h4v8H4v-8z" />
                    </svg>
                </a>

            </div>

            {/* Articles */}
            <Article
                date="December 25, 2023"
                title="Lorem ipsum dolor sit amet"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue..."
            />
            <Article
                date="December 25, 2023"
                title="Lorem ipsum dolor sit amet"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue..."
            />
            <Article
                date="December 25, 2023"
                title="Lorem ipsum dolor sit amet"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue..."
            />

            <Widget />
        </div>

    );
};

export default Intro;
