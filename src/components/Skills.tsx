import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Database, Cloud, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <Layout className="w-6 h-6" />,
            skills: ["Java", "JavaScript", "TypeScript"]
        },
        {
            title: "Backend",
            icon: <Server className="w-6 h-6" />,
            skills: ["Spring Boot", "REST APIs", "Microservices", "Clean Architecture", "Node.js"]
        },
        {
            title: "Database & Caching",
            icon: <Database className="w-6 h-6" />,
            skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis"]
        },
        {
            title: "Testing & Tools",
            icon: <Wrench className="w-6 h-6" />,
            skills: ["JUnit", "Mockito", "Swagger", "Postman", "JWT"]
        },
        {
            title: "Cloud & DevOps",
            icon: <Cloud className="w-6 h-6" />,
            skills: ["AWS", "Docker", "Kubernetes", "Kafka", "GitHub Actions"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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
        <section id="skills" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Skills & Expertise</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolkit for building robust and scalable applications.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.3)" }}
                            className="p-6 bg-gray-900 rounded-xl border border-gray-800 transition-colors duration-300"
                        >
                            <div className="flex items-center gap-3 mb-4 text-white">
                                {category.icon}
                                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-black border border-gray-800 rounded-full text-sm text-gray-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
