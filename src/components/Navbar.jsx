import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { navbarItems } from "../utils/mockdata"

const  Navbar=()=> {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }

            const sections = ["home", "about", "skills", "projects", "contact"]
            const scrollPosition = window.scrollY + 200

            sections.forEach(section => {
                const element = document.getElementById(section)
                if (element) {
                    const elementTop = element.offsetTop
                    const elementHeight = element.offsetHeight
                    if (scrollPosition >= elementTop && scrollPosition < elementTop + elementHeight) {
                        setActiveSection(section)
                    }
                }
            })
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80, 
                behavior: "smooth"
            })
        }
        setIsMobileMenuOpen(false)
    }

    return (
        <header
            className={`fixed py-4 top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-gray-900/20 backdrop-blur-md shadow-md border-b-2 border-teal-300"
                : "bg-transparent"
                }`}
        >
            <div className=" md:w-4/5 px-4 mx-auto  text-gray-300">
                <div className="flex items-center justify-between">
                    <motion.h1
                        className="text-xl sm:text-2xl font-bold text-emerald-300 tracking-widest uppercase cursor-pointer  "
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        onClick={() => scrollToSection("home")}
                    >
                        &lt;<span className="text-white">SUBHASH</span> /&gt;
                    </motion.h1>
                    <nav className="hidden md:flex items-center space-x-8">
                        {navbarItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                                className={`cursor-pointer relative ${activeSection === item.id ? "text-teal-400" : "hover:text-teal-400"
                                    }`}
                                onClick={() => scrollToSection(item.id)}
                            >
                                {item.name}
                                {activeSection === item.id && (
                                    <motion.div
                                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-400"
                                        layoutId="activeSection"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </nav>

                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-md bg-white/20 dark:bg-gray-800/30 backdrop-blur-md border border-white/20 dark:border-gray-800/30 text-gray-800 dark:text-white hover:bg-white/30 dark:hover:bg-gray-800/40 transition-all duration-300"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden backdrop-blur-md border-b border-white/20 dark:border-gray-800/30"
                >
                    <div className="px-4 py-4">
                        <nav className="flex flex-col space-y-4">
                            {navbarItems.map((item) => (
                                <div
                                    key={item.id}
                                    className={`py-2 ${activeSection === item.id
                                        ? "text-teal-400"
                                        : "text-gray-200 hover:text-teal-400"
                                        } transition-colors cursor-pointer`}
                                    onClick={() => scrollToSection(item.id)}
                                >
                                    {item.name}
                                </div>
                            ))}
                        </nav>
                    </div>
                </motion.div>
            )}
        </header>
    )
}

export default Navbar