import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-emerald-600 text-white relative"> 
    <RevealOnScroll>
    <div className="text-center z-5 px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4  leading-tight">
        Hi, im Cullen Mcleod 
      </h1>
      <p className="text-lg md:text-2xl mb-8 max-w-lg mx-auto" >
        A passionate software developer with a focus on web design.
      </p>
    <div className="flex justify-center space-x-4">
        <a href="#projects" className="border-t-7 border-blue-600 bg-gray-400 text-white py-3 px-6 font-medium transiton realitve overflow-hidden 
        hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 254)]">View Projects</a>
        <a href="#contact" className="border-t-7 border-blue-600 bg-gray-400 text-white py-3 px-6 font-medium transiton realitve overflow-hidden 
        hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 254)]">Contact me</a>
        
        

        
    </div>
    </div>
    </RevealOnScroll>
    </section>
  );
}
export default Home;