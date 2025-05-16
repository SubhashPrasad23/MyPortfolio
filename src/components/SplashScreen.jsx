import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"

const SplashScreen=()=> {
    const [progress, setProgress] = useState(0)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval)
                    setTimeout(() => {
                        setLoading(true)
                        navigate("/portfolio")
                    }, 500) 
                    return 100
                }
                return prevProgress + Math.floor(Math.random() * 10) + 5 
            })
        }, 200)

        return () => clearInterval(interval)
    }, [])

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold mb-6  bg-gradient-to-r from-teal-700 via-teal-500 to-teal-200  bg-clip-text text-transparent"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Portfolio
                        </motion.h1>

                        <div className="w-64 md:w-80 h-5 rounded-md bg-white/10  overflow-hidden mb-4 shadow-[1px_1px_3px_white]">
                            <motion.div
                                className="h-full bg-gradient-to-r from-teal-200 via-teal-500 to-teal-700"
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.2 }}
                            />
                        </div>

                        <div className="flex items-center text-center justify-center"><p className="text-gray-400 font-bold tracking-wider">LOADING ...</p></div>
                    </motion.div>


                </motion.div>
            )}
        </AnimatePresence>
    )
}
export default SplashScreen