import React, { useEffect, useRef } from "react";
import { init } from "ityped";

export default function About() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            strings: ["Software Developer."],
            backDelay: 2000
        })
    }, []);

    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg: flex-grow md: w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Joe!
                        <br className="hidden lg:inline-block" /><span ref={textRef} className="text-blue-400"></span>
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        After completing my undergrad in Business Administration, I spent 4 years in the service industry, bartending and waiting tables. 
                        A conversation with a mentor about switching career industries sparked some enthusiasm within me, and I decided to give programming a shot. What started as a curiosity
                        and a passive, fun activity to help build some technical skills, ended as a full-fledged passion and borderline obession with the world of
                        information technology. I fell in love with creating projects, solving dynamic problems, and spent countless hours reading documentation, following tutorials,
                        and grinding out algorithms. I found myself enrolling in a bootcamp where I was able to strengthen my expertise and learn industry demanding skills and 
                        technologies. After a year and a half of building credentials and facilitating my title as a developer, I'm ready to take my abilities
                        into the professional world. Check out the rest of my site!
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See my past work!
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img 
                        className="object-cover object-center h-96 w-96 rounded-full"
                        alt="hero"
                        src="./profile_img.jpg"
                    />
                </div>
            </div>
        </section>
    );
}