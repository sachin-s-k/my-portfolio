import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSc8fWLEQtrnga0R4WY8zqpGuFgspfXgmjTy4Vrg0eVcnQy0Qg/formResponse';
        const formData = new FormData();
        
        // Map our form fields to Google Form entry IDs
        formData.append('entry.577269734', formState.name);
        formData.append('entry.641192259', formState.email);
        formData.append('entry.183843791', formState.message);

        try {
            // mode: 'no-cors' is required to post to Google Forms from a browser
            await fetch(formUrl, {
                method: 'POST',
                mode: 'no-cors',
                body: formData
            });
            toast.success('Message sent successfully!');
            setFormState({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-20 bg-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Have a project in mind or want to discuss modern backend architectures?
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-gray-800 p-3 rounded-lg text-white">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Email Me</h4>
                                    <a href="mailto:sachinksiby@gmail.com" className="text-gray-400 hover:text-white">sachinksiby@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-gray-800 p-3 rounded-lg text-white">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Location</h4>
                                    <p className="text-gray-400">Bengaluru, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-black p-8 rounded-2xl border border-gray-800"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-white focus:border-transparent outline-none transition-all placeholder-gray-600"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-white focus:border-transparent outline-none transition-all placeholder-gray-600"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-white focus:border-transparent outline-none transition-all resize-none placeholder-gray-600"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-white text-black font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                {!isSubmitting && <Send className="w-4 h-4" />}
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
