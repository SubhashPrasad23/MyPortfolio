import { Github } from "lucide-react"

const Footer=()=> {
    const currentYear = new Date().getFullYear()
    return (
        <footer className=" border-t  border-teal-300 py-12">
            <div className="w-4/5 mx-auto ">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="text-white mb-6 md:mb-0 font-bold uppercase">
                        
                        &lt; Subhash /&gt;

                    </div>

                    <div className="flex flex-col md:items-end">
                        <div className="flex space-x-4 mb-4">
                            <a
                                href="https://github.com/SubhashPrasad23"
                                className="p-2 bg-white/10 dark:bg-gray-800/30 backdrop-blur-md rounded-full text-gray-300 hover:text-teal-500 transition-colors"
                                aria-label="GitHub"
                            >
                                <Github/>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/subhashprasad23/"
                                className="p-2 bg-white/10 dark:bg-gray-800/30 backdrop-blur-md rounded-full text-gray-300 hover:text-teal-500 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                          
                          
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            &copy; {currentYear} Portfolio. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer