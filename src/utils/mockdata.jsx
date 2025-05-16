import inventory from "../assets/image/inventory.png"
import goHealthy from "../assets/image/goHealthy.png"
import movieBooking from "../assets/image/movieBooking.png"
import rasoiWallah from "../assets/image/rasoiWallah.png"
import devtinder from "../assets/image/devtinder.jpg"
import musicPlayer from "../assets/image/musicPlayer.jpg"
import aiTrip from "../assets/image/aiTrip.png"
import { Mail, MapPin, Monitor, Phone, Server, Wrench } from "lucide-react"

export const projects = [
    {
        id: 1,
        title: "HealthBell - a medicine reminder App (android)",
        description:
            "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["React", "Node.js", "MongoDB", "Express", "Redux toolkit", "Tailwind CSS", "CapacitorJs", "Framer motion", "Gemini AI"],
        githubUrl: "https://github.com/SubhashPrasad23/heathbell",
        category: "fullstack",
        liveUrl:"https://drive.google.com/file/d/1SqG6a0-ytfxZgc1-THNWGCeeVVY15WJz/view?usp=drive_linkhttps://drive.google.com/file/d/1SqG6a0-ytfxZgc1-THNWGCeeVVY15WJz/view?usp=drive_link"
    },
    {
        id: 2,
        title: "DevTinder",
        description:
            "A collaborative task management application with real-time updates and team collaboration features.",
        image: devtinder,
        tags: ["React", "Node.js", "MongoDB", "Express", "Redux toolkit", "Tailwind CSS","Framer motion","Multer","Socket.IO"],
        githubUrl: "https://github.com/SubhashPrasad23/devtinderFrontend",
        liveUrl: "https://devtinderfrontend-kdi9.onrender.com",
        category: "fullstack",
    },
    {
        id: 3,
        title: "AI Trip Planner",
        description: "A content management system for creating and managing blog posts with markdown support.",
        image: aiTrip,
        tags: ["React", "Tailwind CSS", "Gemini AI", "Framer motion"],
        githubUrl: "https://github.com/SubhashPrasad23/AItripPlanner",
        liveUrl: "https://a-itrip-planner.vercel.app/",
        category: "frontend",
    },
    {
        id: 4,
        title: "RasoiWallah",
        description: "A real-time chat application with private messaging and group chat functionality.",
        image: rasoiWallah,
        tags: ["React", "Tailwind CSS", "Redux Toolkit", "Local storage", "swiggy API"],
        githubUrl: "https://github.com/SubhashPrasad23/RasoiWallah-",
        liveUrl: "https://rasoiwallah.netlify.app/",
        category: "frontend",
    },
 
    {
        id: 5,
        title: "TicketTube - (A Movie Booking and Youtube Video Search platform )",
        description: "A robust RESTful API service for managing user data and authentication.",
        image: movieBooking,
        tags: ["React.js","Tailwind CSS","Youtube API", "TMDB API"],
        githubUrl: "https://github.com/SubhashPrasad23/ticketTube",
        liveUrl: "https://ticket-tube.vercel.app/",
        category: "frontend",
    },
    {
        id: 6,
        title: "Go Healthy (juice Shop Menu)",
        description: "A real-time chat application with private messaging and group chat functionality.",
        image: goHealthy,
        tags: ["React", "Tailwind CSS"],
        githubUrl: "https://github.com/SubhashPrasad23/juices-shop",
        liveUrl: "https://juices-shop.vercel.app/",
        category: "frontend",
    },
   
    {
        id: 7,
        title: "Inventory Management",
        description: "A real-time chat application with private messaging and group chat functionality.",
        image: inventory,
        tags: ["React", "Tailwind CSS", "Local storage"],
        githubUrl: "https://github.com/SubhashPrasad23/inventory_management",
        liveUrl: "https://inventorybysubhash.vercel.app/",
        category: "frontend",
    },
     {
        id: 8,
        title: "Music Player",
        description: "A weather application that displays current and forecasted weather data for any location.",
         image: musicPlayer,
        tags: ["React", "Tailwind CSS", "react-dropzone", "Framer motion"],
        githubUrl: "https://github.com/SubhashPrasad23/musicPlayer",
        liveUrl: "https://music-player-flame-nine.vercel.app/",
        category: "frontend",
    },
]


export const navbarItems = [{ name: "About", id: "about" },
{ name: "Skills", id: "skills" },
{ name: "Projects", id: "projects" },
{ name: "Contact", id: "contact" }]


export const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML", level: 90 },
            { name: "CSS", level: 80 },
            { name: "JavaScript", level: 90 },
            { name: "React", level: 85 },
            { name: "Tailwind CSS", level: 85 },
            { name: "Redux Toolkit", level: 70 },

        ],
        icon: <Monitor/>,
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", level: 85 },
            { name: "Express", level: 80 },
            { name: "MongoDB", level: 75 },
            { name: "REST API", level: 85 },
            { name: "Socket.IO", level: 50 },
            { name: "Multer", level: 45 },


        ],
        icon: <Server/>,
    },
    {
        title: "Tools & Others",
        skills: [
            { name: "Git & Github", level: 85 },
            { name: "Postman", level: 70 },
        ],
        icon: <Wrench/>,
    },
]

export const contactInfo = [
    {
        icon: <Mail className="text-teal-500" />,
        title: "Email",
        value: "subhashprasad027@gmail.com",
        link: "mailto:subhashprasad027@gmail.com",
    },
    {
        icon: <Phone className="text-teal-500" />,
        title: "Phone",
        value: "+91 6002895770",
    },
    {
        icon: <MapPin className="text-teal-500"/>,
        title: "Location",
        value: "Bongaigaon, Assam",
    },
]