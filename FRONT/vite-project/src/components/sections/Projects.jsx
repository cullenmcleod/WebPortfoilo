import { RevealOnScroll } from '../RevealOnScroll';

export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center bg-emerald-600 text-white relative">
    <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">Featured Projects</h2>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className=" border-t-25 border-blue-600 bg-gray-400 bg-opacity-80 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4">Project 1</h3>
                <p className="text-lg mb-4">Description of test project 1. It showcases my skills in web development and design.</p>
                <div>
                    {['HTML', 'CSS', 'JavaScript'].map((tech, key) => (
                        <span key={key} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                <a href="#" className="text-blue-600 hover:underline">View Project</a>

                </div>
            </div>
            <div className="border-t-25 border-blue-600 bg-gray-400 bg-opacity-80 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4">Project 2</h3>
                <p className="text-lg mb-4">Description of test project 2. It highlights my expertise in front-end design.</p>
                <div>
                    {['react', 'tailwindcss', 'jsx', 'figma'].map((tech, key) => (
                        <span key={key} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                <a href="#" className="text-blue-600 hover:underline">View Project</a>

                </div>
            </div>
            <div className="border-t-25 border-blue-600 bg-gray-400 bg-opacity-80 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4">Project 3</h3>
                <p className="text-lg mb-4">Description of test project 3. It highlights my expertise in front-end design.</p>
                <div>
                    {['react', 'tailwindcss', 'jsx', 'figma'].map((tech, key) => (
                        <span key={key} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                <a href="#" className="text-blue-600 hover:underline">View Project</a>

                </div>
            </div>
            <div className="border-t-25 border-blue-600 bg-gray-400 bg-opacity-80 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4">Project 4</h3>
                <p className="text-lg mb-4">Description of test project 4. It highlights my expertise in front-end design.</p>
                <div>
                    {['react', 'tailwindcss', 'jsx', 'figma'].map((tech, key) => (
                        <span key={key} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                <a href="#" className="text-blue-600 hover:underline">View Project</a>

                </div>
            </div>
            {/* Add more projects as needed */}
        </div>
    </div>
    </section>
};
export default Projects;