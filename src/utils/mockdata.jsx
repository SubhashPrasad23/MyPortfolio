import inventory from "../assets/image/inventory.png"
import goHealthy from "../assets/image/goHealthy.png"
import movieBooking from "../assets/image/movieBooking.png"
import rasoiWallah from "../assets/image/rasoiWallah.png"
import devtinder from "../assets/image/devtinder.jpg"
import musicPlayer from "../assets/image/musicPlayer.jpg"
import aiTrip from "../assets/image/aiTrip.png"
import healthBell from "../assets/image/healthBell.jpeg"

import { Mail, MapPin, Monitor, Phone, Server, Wrench } from "lucide-react"

export const projects = [
    {
        id: 1,
        title: "HealthBell - a medicine reminder App (android)",
        description:
            "HealthBell is an Android app that helps users manage medications for multiple patients. Users can add patients, assign medicines with detailed schedules, and receive timely notifications as medication reminders. It also allows users to search for detailed information about any medicine directly within the app.",
        image: healthBell,
        tags: ["React", "Node.js", "MongoDB", "Express", "Redux toolkit", "Tailwind CSS", "CapacitorJs", "Framer motion", "Gemini AI"],
        githubUrl: "https://github.com/SubhashPrasad23/heathbell",
        category: "fullstack",
        liveUrl:"https://drive.google.com/file/d/1SqG6a0-ytfxZgc1-THNWGCeeVVY15WJz/view?usp=drive_linkhttps://drive.google.com/file/d/1SqG6a0-ytfxZgc1-THNWGCeeVVY15WJz/view?usp=drive_link"
    },
    {
        id: 2,
        title: "DevTinder",
        description:
            "DeviTinder is a developer-focused social platform where users can send connection requests, accept or reject them, update profiles with images, and chat with connected users.",
        image: devtinder,
        tags: ["React", "Node.js", "MongoDB", "Express", "Redux toolkit", "Tailwind CSS","Framer motion","Multer","Socket.IO"],
        githubUrl: "https://github.com/SubhashPrasad23/devtinderFrontend",
        liveUrl: "https://devtinderfrontend-kdi9.onrender.com",
        category: "fullstack",
    },
    {
        id: 3,
        title: "AI Trip Planner",
        description: " Generate itineraries based on dates, destination, interests, and transport mode.Source Code Utilizes Gemini AI to provide intelligent suggestions and streamline trip planning for an enhanced user experience.",
        image: aiTrip,
        tags: ["React", "Tailwind CSS", "Gemini AI", "Framer motion"],
        githubUrl: "https://github.com/SubhashPrasad23/AItripPlanner",
        liveUrl: "https://a-itrip-planner.vercel.app/",
        category: "frontend",
    },
    {
        id: 4,
        title: "RasoiWallah",
        description: "Rasoiwallah is a food-ordering website where users can browse a list of restaurants, view their menus, and use search and star-based filters to find preferred options. Users can add items to the cart, adjust quantities.",
        image: rasoiWallah,
        tags: ["React", "Tailwind CSS", "Redux Toolkit", "Local storage", "swiggy API"],
        githubUrl: "https://github.com/SubhashPrasad23/RasoiWallah-",
        liveUrl: "https://rasoiwallah.netlify.app/",
        category: "frontend",
    },
 
    {
        id: 5,
        title: "TicketTube - (A Movie Booking and Youtube Video Search platform )",
        description: "TicketTube is a movie booking platform integrated with YouTube video search. It offers functionalities like viewing now-playing movies, searching films, displaying movie details, selecting date and time, and booking seats.",
        image: movieBooking,
        tags: ["React.js","Tailwind CSS","Youtube API", "TMDB API"],
        githubUrl: "https://github.com/SubhashPrasad23/ticketTube",
        liveUrl: "https://ticket-tube.vercel.app/",
        category: "frontend",
    },
    {
        id: 6,
        title: "Go Healthy (juice Shop Menu)",
        description: "Go Healthy Juice Shop offers a diverse menu of fresh juices, shakes, and snacks. The platform includes a convenient filter function, allowing customers to easily browse options based on snacks, shakes, or juices.",
        image: goHealthy,
        tags: ["React", "Tailwind CSS"],
        githubUrl: "https://github.com/SubhashPrasad23/juices-shop",
        liveUrl: "https://juices-shop.vercel.app/",
        category: "frontend",
    },
   
    {
        id: 7,
        title: "Inventory Management",
        description: "Inventory Management allows users to add stock, view stock lists, track sales data, and generate billing options. It also displays details on total sales, expenses, and income for efficient management.",
        image: inventory,
        tags: ["React", "Tailwind CSS", "Local storage"],
        githubUrl: "https://github.com/SubhashPrasad23/inventory_management",
        liveUrl: "https://inventorybysubhash.vercel.app/",
        category: "frontend",
    },
     {
        id: 8,
        title: "Music Player",
         description: "A  music player that allows users to listen to music, add tracks via drag-and-drop, control volume, and use playback features like play/pause, skip, and rewind.",
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