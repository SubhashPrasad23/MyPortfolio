import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { projects } from "../utils/mockdata"
import { Github, Link } from "lucide-react"

const Projects = () => {
    const [filter, setFilter] = useState("all")
    const [hoveredProject, setHoveredProject] = useState(null)

    const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    }

    return (
        <section id="projects" className="py-20">
            <div className="mx-auto w-4/5">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className=" mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wider">
                        MY PROJECTS
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-teal-700  mb-6"></div>
                    <p className="text-gray-400 max-w-3xl">
                        Here are some of my recent projects. Each project represents a unique challenge and solution.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex justify-center flex-wrap gap-2 mb-12"
                >
                    {["all", "frontend", "fullstack"].map((category) => (
                        <motion.button
                            key={category}
                            className={`px-6 py-2 rounded-full transition-all duration-300 ${filter === category
                                ? "bg-gradient-to-r from-teal-700 to-teal-400 text-white"
                                : "bg-white/20 dark:bg-gray-800/30 backdrop-blur-md  dark:text-gray-300 hover:bg-white/30 dark:hover:bg-gray-800/40 cursor-pointer "
                                }`}
                            onClick={() => setFilter(category)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </motion.button>
                    ))}
                </motion.div>

                <motion.div
                    variants={containerVariants}


                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 },
                            }} initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onHoverStart={() => setHoveredProject(project.id)}
                            onHoverEnd={() => setHoveredProject(null)}
                            className="bg-gray-800/50 backdrop-blur-md border-b border-gray-600 shadow-inner shadow-gray-700/50 rounded-xl overflow-hidden transition-all duration-300 relative"
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}

                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex gap-2">
                                        <motion.a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                                            aria-label="View GitHub repository"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Github />
                                        </motion.a>
                                        <motion.a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                                            aria-label="View live project"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Link />
                                        </motion.a>


                                    </div>
                                </motion.div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <motion.span
                                            key={index}
                                            className="px-3 py-2 backdrop-blur-sm rounded-lg text-teal-500 text-xs font-medium  "
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            <motion.div
                                className="absolute inset-0 pointer-events-none"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="absolute inset-0 border-2 border-purple-500/0 dark:border-teal-500/0 rounded-xl"></div>
                                <motion.div
                                    className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-teal-500"
                                    animate={{
                                        scaleX: hoveredProject === project.id ? 1 : 0,
                                        opacity: hoveredProject === project.id ? 1 : 0,
                                    }}
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Projects