import { useState } from "react"
import { motion } from "framer-motion"
import { contactInfo } from "../utils/mockdata"
import { Send } from "lucide-react"

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000))

            alert("Message sent! Thank you for your message. I'll get back to you soon.")

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            })
        } catch {
            alert("There was an error sending your message. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="py-20 relative w-full overflow-hidden">
            <div className="w-full px-5 sm:w-4/6  mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wider">
                        GET IN TOUCH
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-teal-700 mb-6"></div>
                    <p className="text-gray-400 max-w-3xl">
                        Feel free to reach out to me using the form below or through
                        my contact information.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full"
                    >
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="bg-gray-800/50 backdrop-blur-md shadow-inner shadow-gray-700/50 rounded-xl p-4 md:p-6 border-b border-gray-600"
                                >
                                    <div className="flex items-start gap-3 md:gap-4">
                                        <div className="bg-teal-800/80 backdrop-blur-md rounded-full p-2 md:p-3 flex-shrink-0">
                                            {info.icon}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="font-medium text-base md:text-lg text-white truncate">
                                                {info.title}
                                            </h3>
                                            <span className="text-gray-400 text-sm md:text-base block break-words">
                                                {info.value}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full"
                    >
                        <div className="bg-gray-800/50 rounded-xl p-4 md:p-6 shadow-inner shadow-gray-700/50 border-b border-gray-600">
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                                    <div className="space-y-1 md:space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-300">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            required
                                            className="w-full px-3 py-2 text-sm md:text-base text-white rounded-lg border border-gray-700 focus:border-teal-500 outline-none"
                                        />
                                    </div>
                                    <div className="space-y-1 md:space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-300">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your email"
                                            required
                                            className="w-full px-3 py-2 text-sm md:text-base text-white rounded-lg border border-gray-700 focus:border-teal-500 outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1 md:space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                                        Subject
                                    </label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Subject"
                                        required
                                        className="w-full px-3 py-2 text-sm md:text-base text-white rounded-lg border border-gray-700 focus:border-teal-500 outline-none"
                                    />
                                </div>
                                <div className="space-y-1 md:space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your message"
                                        rows={3}
                                        required
                                        className="w-full px-3 py-2 text-sm md:text-base text-white rounded-lg border border-gray-700 focus:border-teal-500 outline-none resize-none"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className="px-4 md:px-6 py-2 md:py-3 gap-2 cursor-pointer bg-teal-800/80 text-white font-medium rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {isSubmitting ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            <Send className="h-4 w-4 md:h-5 md:w-5" />
                                            <span className="ml-1">Send</span>
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact