
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="hero" className="min-h-screen flex items-center bg-black pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Hi, I'm <span className="text-gray-400">Sachin K Siby</span>
                            <br />
                            Backend Engineer
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-lg text-gray-400 mb-8 leading-relaxed">
                            I build scalable backend APIs and microservices using Clean Architecture.
                            Specialized in Java, Spring Boot, Node.js, and cloud-native deployments.
                            Passionate about turning complex problems into simple, elegant solutions.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
                            <a
                                href="#projects"
                                className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
                            >
                                View Projects
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href="#contact"
                                className="border-2 border-gray-700 text-gray-300 px-8 py-3 rounded-lg font-medium hover:border-white hover:text-white transition-colors"
                            >
                                Contact Me
                            </a>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex gap-6">
                            <a href="https://github.com/sachin-s-k" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://linkedin.com/in/sachin-k-siby" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="mailto:sachinksiby@gmail.com" className="text-gray-500 hover:text-white transition-colors">
                                <Mail className="w-6 h-6" />
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        className="hidden md:block"
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full aspect-square flex items-center justify-center"
                        >
                            <img
                                src="https://github.com/sachin-s-k.png"
                                alt="Sachin K Siby"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-full border-4 border-gray-800 shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
