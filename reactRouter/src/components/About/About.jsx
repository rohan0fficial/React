import React from "react";

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        React Development: A Comprehensive Guide
                        In the ever-evolving landscape of web development, 
                        React has emerged as a powerful library for building dynamic and interactive user interfaces. Developed by Facebook, React allows developers to create reusable UI components, making the development process more
                         efficient and the codebase more manageable. This article will delve into the essentials of React development, from setting up your environment to creating components and managing state.
                        </p>
                        <p className="mt-4 text-gray-600">
                        React has revolutionized the way developers build web applications by providing a robust and flexible framework for creating dynamic and reusable UI components. 
                        By mastering the basics of React development, including component creation, state management,
                         and routing, you can build sophisticated applications that are easy to maintain and scale
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}