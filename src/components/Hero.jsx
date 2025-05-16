import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import bg from "../assets/image/bg.png"
import { ChevronsDown, Download } from "lucide-react";

const Hero=()=>{
    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[5px]"
                    style={{
                        backgroundImage: `url(${bg})`,
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-teal-900/20 to-gray-900/90"></div>
                </div>

            </div>

            <div className=" px-4 z-10 pt-20">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className=""
                    >
                        <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-teal-400 via-teal-300 to-teal-200 bg-clip-text text-transparent mb-4">
                            Subhash Prasad
                        </h1>

                        <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-gray-300 tracking-wider h-16">
                            <Typewriter
                                words={["Frontend Developer", "MERN Stack Developer", "Backend Developer"]}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-300 max-w-2xl mb-3 backdrop-blur-sm px-4 py-2 rounded-lg bg-gray-900/30"
                    >
                        I build modern web applications with the MERN stack, focusing on performance, accessibility, and exceptional
                        user experience.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="w-full flex gap-2 justify-center"
                    >
                        <button
                            type="button"
                            className="px-5 md:px-8 md:py-4 py-3 bg-gradient-to-r text-sm md:text-base from-teal-500 to-teal-700 text-white font-medium rounded-lg shadow-inner shadow-white/20 transform hover:-translate-y-1 transition-all duration-300"
                            onClick={() => {
                                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Get in Touch
                        </button>

                        <a
                            href="/Subhash_Prasad_MERN_Resume.pdf"
                            download
                            className="gap-2 px-5 md:px-8 md:py-4 py-3 bg-gray-800/70 backdrop-blur-sm border border-gray-700/30 text-white font-medium rounded-lg shadow-inner shadow-gray-500/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                        >
                            <Download/>
                            Download CV
                        </a>
                    </motion.div>


                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
            >
                <button
                    className="p-3 rounded-full bg-gray-800/70 backdrop-blur-sm border border-gray-700/30 text-teal-500 shadow-lg hover:shadow-teal-500/10 animate-bounce"
                    aria-label="Scroll down"
                    onClick={() => {
                        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    <ChevronsDown/>
                </button>
            </motion.div>
        </section>
    )
}


export default Hero