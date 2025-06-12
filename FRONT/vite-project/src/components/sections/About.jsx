import image from '../assets/Aboutimg.jpg';
import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

export const About = () => {
    const frontendSkills = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'vite',
        'Tailwind CSS',
        'Responsive Design',
        
    ];
    const designSkills = [
        'Ui/Ux',
        'Figma',
        'creative Design',
        'Photoshop',
        

    ];

    return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-emerald-600 text-white relative">
        <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">About Me</h2>
            <div className="flex border-t-25 border-blue-600 bg-gray-400 bg-opacity-80 p-6 shadow-lg">
                <img src={image} alt="img" className='h-90 mr-5' />
                <div>
            <p className="text-lg md:text-xl mb-8">
                Hello, my name is Cullen Mcleod, and I am a software developer with a passion for web design focusing on front end design as well as devleopment.
            </p>
            <div className='grid grid-col-1 md:grid-cols-2 gap-6'>
                <div className='p-6 hover:translate-y-1 transition-all'>
                    <h3 className="text-2xl font-semibold mb-4">Front End</h3>
                    <div className='flex flex-wrap gap-2'>
                      {frontendSkills.map((tech, key) => (
                        <span key={key} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                            {tech}
                        </span>
                    ))}
                    </div>
                </div>
                <div className='p-6 hover:translate-y-1 transition-all'>
                    <h3 className="text-2xl font-semibold mb-4">Design</h3>
                    <div className='flex flex-wrap gap-2'>
                      {designSkills.map((tech, key) => (
                        <span key={key} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                            {tech}
                        </span>
                    ))}
                    </div>
                </div>
            </div>
            <p className="text-lg md:text-xl">
                Outside of programming I enjoy playing video games, archery which im heavily involed in through coaching, judging and competing in tournaments");
                , and spending time with my family and friends.
            </p> 

                </div>

            </div>

        </div>
        </RevealOnScroll>
    </section>
    );
};
export default About;