import { motion } from "framer-motion"
import { skillCategories } from "../utils/mockdata"

const Skills=()=> {

 
    return (
        <section id="skills" className="py-20 relative ">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="w-4/5 mx-auto ">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 "
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">MY SKILLS</h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-teal-700 mb-6"></div>
                    <p className="text-gray-400 max-w-3xl">
                        I've developed expertise in various technologies across the full stack, with a focus on the MERN ecosystem.
                    </p>
                </motion.div>

                <div className="">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            className="mb-12"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-gray-800/80 rounded-lg text-teal-500">{category.icon}</div>
                                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: skillIndex * 0.05 + categoryIndex * 0.1 }}
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-lg p-4 hover:border-teal-500/30 transition-all duration-300"
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                                            <span className="text-teal-400 font-medium">{skill.level}%</span>
                                        </div>

                                        <div className="relative h-3.5 bg-gray-700/50 rounded-md overflow-hidden shadow-[1px_1px_3px_white]">
                                            <motion.div
                                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-500 to-teal-700 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 1.2,
                                                    ease: "easeOut",
                                                    delay: skillIndex * 0.05 + categoryIndex * 0.1,
                                                }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            
            </div>
        </section>
    )
}

export default Skills