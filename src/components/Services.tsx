import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Server, CloudLightning } from 'lucide-react';

const Services: React.FC = () => {
    const services = [
        {
            title: "API Development",
            description: "Designing and developing robust, scalable RESTful APIs and microservices using Java and Spring Boot.",
            icon: <Globe className="w-10 h-10 text-white" />
        },
        {
            title: "Backend Engineering",
            description: "Implementing complex business logic, optimizing database architectures, and ensuring clean, maintainable code.",
            icon: <Server className="w-10 h-10 text-white" />
        },
        {
            title: "Cloud & DevOps",
            description: "Containerizing applications with Docker, orchestrating with Kubernetes, and setting up CI/CD pipelines on AWS.",
            icon: <CloudLightning className="w-10 h-10 text-white" />
        }
    ];

    return (
        <section id="services" className="py-20 bg-zinc-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">My Services</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Providing specialized solutions tailored to your business needs.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-black p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors group"
                        >
                            <div className="bg-gray-900 w-16 h-16 rounded-lg flex items-center justify-center mb-6 border border-gray-800 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
