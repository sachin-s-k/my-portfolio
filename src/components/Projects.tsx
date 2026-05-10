import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
    const projects = [
        {
            title: "Shopping-Cart API",
            description: "Scalable e-commerce backend supporting products, carts, orders, and payments. Implemented secure authentication with Spring Security & JWT.",
            tech: ["Java", "Spring Boot", "PostgreSQL", "Stripe"],
            links: { github: "#", live: "#" }
        },
        {
            title: "LIT Onboarding Platform",
            description: "Backend for multi-role onboarding and fee management. Integrated Razorpay & eNACH. Engineered a scheduling system (Cal.LIT).",
            tech: ["Node.js", "AWS", "MongoDB", "Redis"],
            links: { github: "#", live: "#" }
        },
        {
            title: "Managerial Software (BMS)",
            description: "Microservices-based system with event-driven Kafka communication. Containerized with Docker and orchestrated with Kubernetes.",
            tech: ["Microservices", "Docker", "Kubernetes", "Kafka"],
            links: { github: "#", live: "#" }
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section id="projects" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A selection of my recent work in web development and cloud engineering.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-gray-600 transition-colors duration-300 flex flex-col group"
                        >
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-4 flex-grow text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-2 py-1 bg-black text-gray-400 text-xs rounded border border-gray-800 font-medium"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    <a href={project.links.github} className="flex items-center gap-1 text-sm text-gray-500 hover:text-white font-medium transition-colors">
                                        <Github className="w-4 h-4" />
                                        Code
                                    </a>
                                    <a href={project.links.live} className="flex items-center gap-1 text-sm text-gray-500 hover:text-white font-medium transition-colors">
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
