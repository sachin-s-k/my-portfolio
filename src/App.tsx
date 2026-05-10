
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />
            <Hero />
            <Skills />
            <Services />
            <Projects />
            <Contact />

            <footer className="bg-black text-white py-8 text-center border-t border-gray-800">
                <p className="text-gray-500">
                    &copy; {new Date().getFullYear()} Sachin K Siby. All rights reserved.
                </p>
            </footer>
        </div>
    );
}

export default App;
