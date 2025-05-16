import { motion } from "framer-motion"

const About=()=> {


    return (
        <section id="about" className="py-20 relative w-full">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="w-4/5 mx-auto ">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wider">ABOUT ME</h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-teal-700 mb-6"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-xl p-8 h-full">
                            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
                                My Story
                            </h3>

                            <div className="space-y-6 text-gray-300">
                                <p>
                                    MERN Stack Developer with frontend development experience, having built  admin dashboard as a freelance. Skilled in React, Tailwind CSS, Redux Toolkit, JavaScript, HTML, and CSS. Familiar with backend technologies like Node.js and Express.js. Passionate about creating responsive, user-friendly web applications and continuously growing as a MERN stack developer.
                                </p>

                                <p>
                                    My journey in web development began with a curiosity about how websites work. This curiosity evolved
                                    into a passion for creating digital experiences that are not only functional but also beautiful and
                                    intuitive.
                                </p>

                                <p>
                                    I believe in writing clean, maintainable code and following best practices. I'm committed to
                                    continuous learning and staying up-to-date with the latest technologies and trends in web development.
                                </p>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {["Problem Solver", "Team Player", "Fast Learner", "Detail-Oriented"].map((trait, index) => (
                                    <span key={index} className="px-4 py-2 bg-gray-700/50 text-teal-400 rounded-full text-sm font-medium">
                                        {trait}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-xl p-8 h-full">
                            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
                                Freelance
                            </h3>

                            <div className="mb-8">
                                <div className="relative border-l-2 border-teal-500/30 pl-6 pb-6">
                                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-teal-500"></div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="mb-6"
                                    >
                                        <h4 className="text-xl font-bold text-white mb-2">Admin Dashboard</h4>
                                        <p className="text-gray-400 mb-3">Frontend Developer</p>
                                        <div className="bg-gray-700/30 rounded-lg p-4 text-gray-300">
                                            <p className="">
                                                Designed and developed a responsive admin dashboard for a freelance client.
                                                The dashboard includes the following features:
                                            </p>
                                            <ul>
                                                <li> Admin can add, edit, delete, and image upload functionality using Firebase. </li>
                                                <li>  A customizable interface for easy layout adjustments. </li>
                                                <li>A user interest listing system to view and manage users who expressed interest.</li>
                                            </ul>
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {["React", "Tailwind CSS", "Firebase"].map((tech, i) => (
                                                    <span key={i} className="px-2 py-1 bg-gray-800/70 text-teal-400 rounded text-xs">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>

                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About 