import { RevealOnScroll } from '../RevealOnScroll';
export default function Contact() {
  return <section id="contact" className="min-h-screen flex items-center justify-center bg-emerald-600 text-white relative">
    <RevealOnScroll>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">Contact Me</h2>
        <form className="border-t-25 border-blue-600 bg-gray-400 bg-opacity-80 p-6  shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input type="text" id="name" className="w-full p-2 border border-gray-300 " required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 " required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea id="message" rows="4" className="w-full p-2 border border-gray-300 " required></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4  hover:bg-blue-700 transition-colors">Send Message</button>
        </form>
      </div>
    </RevealOnScroll>
  </section>;
}
