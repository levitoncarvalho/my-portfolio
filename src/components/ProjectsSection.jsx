import { ArrowRight } from "lucide-react"
import { Github } from "lucide-react"
import { ExternalLink } from "lucide-react"

const projects = [
    {
        id: 5,
        title: "CRM - Client Management",
        description: "Full-stack CRM built with Django/Python to efficiently manage client data and interactions.",
        image: "/projects/project5.jpeg",
        tags: ["fullstack", "django", "python"],
        demoUrl: "#",
        githubUrl: "https://github.com/levitoncarvalho/CRM-Gestao-de-Clientes",
    },
    {
        id: 6,
        title: "CarvalhoLevis Host",
        description: "A clean, static hosting service landing page built purely with semantic HTML and CSS.",
        image: "/projects/project6.jpeg",
        tags: ["frontend", "html", "css"],
        demoUrl: "#",
        githubUrl: "https://github.com/levitoncarvalho/CarvalhoLevis-Host",
    },
    {
        id: 7,
        title: "Naturalis Store",
        description: "Modern e-commerce landing page built with Angular 15 and TypeScript using component architecture.",
        image: "/projects/project7.jpeg",
        tags: ["frontend", "angular", "typescript"],
        demoUrl: "#",
        githubUrl: "https://github.com/levitoncarvalho/angular-naturalis2",
    },
    {
        id: 8,
        title: "Stellar Portfolio",
        description: "Professional portfolio built with React, Tailwind CSS, and EmailJS for serverless contact.",
        image: "/projects/project8.jpeg",
        tags: ["react", "tailwind", "emailjs", "frontend"],
        demoUrl: "https://leviscarvalho-portfolio.vercel.app/",
        githubUrl: "https://github.com/levitoncarvalho/my-portfolio.git",
    },
    {
        id: 9,
        title: "Vehicles Dashboard",
        description: "Interactive web dashboard for exploring car sales advertisement data.",
        image: "/projects/project9.jpeg",
        tags: ["python", "streamlit", "pandas", "plotly", "jupyter notebook"],
        demoUrl: "https://vehicles-dashboard-fdn3.onrender.com/",
        githubUrl: "https://github.com/levitoncarvalho/vehicles-dashboard.git",
    }, {
        id: 10,
        title: "Ice Store Analytics",
        description: "Data-driven campaign planning for a global video game retailer.",
        image: "/projects/project10.jpeg",
        tags: ["python", "pandas", "numpy", "streamlit"],
        demoUrl: "https://ice-store-analytics-levitoncarvalho.streamlit.app/",
        githubUrl: "https://github.com/levitoncarvalho/ice-store-analytics.git",
    }, {
        id: 11,
        title: "Megaline Mobile Plan Recommendation",
        description: "Turning subscriber behavior into smarter plan choices.",
        image: "/projects/project11.jpeg",
        tags: ["pythobn", "pandas", "scikit-learn", "streamlit"],
        demoUrl: "https://megaline-mobile-plan-recommendation-levitoncarvalho.streamlit.app/",
        githubUrl: "https://github.com/levitoncarvalho/megaline-mobile-plan-recommendation.git",
    }, {
        id: 12,
        title: "Beta Bank Churn Prediction",
        description: "Turning behavioral data into intelligent customer retention.",
        image: "/projects/project12.jpeg",
        tags: ["python", "pandas", "scikit-learn", "streamlit"],
        demoUrl: "https://beta-bank-churn-prediction-carvalholevis.streamlit.app/",
        githubUrl: "https://github.com/levitoncarvalho/beta-bank-churn-prediction.git",
    },
    {
        id: 13,
        title: "OilyGiant Blackgold Bootstrap",
        description: "Finding the most profitable oil region through machine learning & risk simulation",
        image: "/projects/project13.jpeg",
        tags: ["python", "pandas", "scikit-learn", "streamlit", "numpy"],
        demoUrl: "https://oilygiant-blackgold-bootstrap-levitoncarvalho.streamlit.app/",
        githubUrl: "https://github.com/levitoncarvalho/OilyGiant-blackgold-bootstrap.git",
    },
];


export const ProjectSection = () => {

    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                From the warm roots of Bahia to the complex logic of the web, I view software development as an Infinite Puzzle. Every line of code is a piece that fits into the bigger picture of solving real-world problems. Here is a collection of the solutions I've pieced together so far.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.slice().sort((a, b) => b.id - a.id).map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary border">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 mx-1 line-clamp-3">
                                {project.description}
                            </p>
                            <div className="flex justify-end items-center">
                                <div className="flex space-x-3">
                                    <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                        <Github />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="https://github.com/levitoncarvalho" className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank">
                    Take a look at my Github <ArrowRight size={16} />
                </a>

            </div>

        </div>


    </section>
}