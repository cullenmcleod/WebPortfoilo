import React from 'react';
import image from '../assets/Aboutimg.jpg';
import { RevealOnScroll } from '../RevealOnScroll';

export const About = () => {
    const frontendSkills = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Vite',
        'Tailwind CSS',
        'Responsive Design',
    ];

    const designSkills = [
        'UI/UX',
        'Figma',
        'Creative Design',
        'Photoshop',
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-emerald-600 text-white py-12 px-4">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto w-full">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">About Me</h2>
                    <div className="border-t-25 border-blue-600 flex flex-col md:flex-row bg-gray-400 bg-opacity-80 p-6 shadow-lg ">
                        
                        <img
                            src={image}
                            alt="About"
                            className="w-full md:w-1/3 h-auto object-cover rounded-lg mb-6 md:mb-0 md:mr-6"
                        />

                        <div className="flex-1">
                            <p className="text-lg md:text-xl mb-6">
                                Hello, my name is Cullen Mcleod, and I am a software developer with a passion for web design, focusing on front-end design as well as development.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="p-4 bg-gray-400 bg-opacity-60 rounded-lg transition-transform hover:translate-y-1">
                                    <h3 className="text-2xl font-semibold mb-4">Front End</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {frontendSkills.map((tech, key) => (
                                            <span key={key} className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-4 bg-gray-400 bg-opacity-60 rounded-lg transition-transform hover:translate-y-1">
                                    <h3 className="text-2xl font-semibold mb-4">Design</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {designSkills.map((tech, key) => (
                                            <span key={key} className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <p className="text-lg md:text-xl">
                                Outside of programming, I enjoy playing video games, archery — which I’m heavily involved in through coaching, judging, and competing in tournaments — and spending time with my family and friends.
                            </p>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default About;