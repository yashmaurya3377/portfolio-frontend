import React from 'react';
import { FiExternalLink, FiGithub, FiStar, FiCode } from 'react-icons/fi';

const Projects = () => {
const projectList = [
  {
    title: "Full-Service Grocery E-Commerce Platform",
    description: "A mobile-optimized online grocery marketplace utilizing React Context API for centralized state management.",
    features: [
      "Dynamic product display with responsive grid layout",
      "State-managed shopping cart implementation",
      "Advanced product filtering capabilities",
      "Intuitive category-based navigation",
      "Cross-device responsive interface"
    ],
    tools: ["HTML", "CSS", "Tailwind CSS", "React", "JavaScript"],
    img: " https://fully-functional-estore.vercel.app/",
    demo: " https://fully-functional-estore.vercel.app/",
    code: "https://github.com/yashmaurya3377/fullyFunctional-Estore",
    status: "Live",
    date: "July 2025",
    challenges: "Designing scalable state architecture with Context API while maintaining data security",
    lessons: "Developed expertise in optimized state management patterns for e-commerce applications"
  },
  {
    title: "Food Delivery Platform",
    description: "A mobile-first online food ordering system leveraging Context API for seamless state management.",
    features: [
      "Responsive product catalog display",
      "Persistent cart functionality with Context API",
      "Comprehensive product filtering system",
      "Streamlined category navigation",
      "Device-agnostic responsive design"
    ],
    tools: ["HTML", "CSS", "Tailwind CSS", "React", "JavaScript"],
    img: "food-delivery-hub-ten.vercel.app ",
    demo: " food-delivery-hub-ten.vercel.app",
    code: "https://github.com/yashmaurya3377/food-delivery",
    status: "Live",
    date: "June 2025",
    challenges: "Implementing complex state logic while ensuring data integrity",
    lessons: "Mastered state management techniques for real-time applications"
  },
  {
    title: "Enterprise E-Commerce Solution",
    description: "Comprehensive online retail platform featuring administrative dashboard and secure payment processing.",
    features: [
      "Searchable product catalog with advanced filtering",
      "JWT-based user authentication system",
      "Persistent shopping cart implementation",
      "Integrated Stripe payment processing",
      "Order tracking with automated invoicing"
    ],
    tools: ["React", "Redux", "Tailwind CSS", "Node.js"],
    img: "https://ecommerce-react-tau-seven.vercel.app/",
    demo: "https://ecommerce-react-tau-seven.vercel.app/",
    code: "https://github.com/yashmaurya3377/Ecommerce",
    status: "Live Production",
    date: "March 2025",
    challenges: "Implementing real-time inventory synchronization and checkout optimization",
    lessons: "Gained comprehensive knowledge of payment systems integration"
  },
  {
    title: "Collaborative Task Management System",
    description: "Team productivity platform featuring real-time synchronization and workflow analytics.",
    features: [
      "Interactive Kanban-style task board",
      "Team-based workspace collaboration",
      "Priority-driven task scheduling",
      "Visual productivity metrics dashboard",
      "Customizable interface themes"
    ],
    tools: ["React", "Tailwind CSS", "React Query", "Firebase"],
    img: "https://product-list-theta-five.vercel.app/",
    demo: "https://product-list-theta-five.vercel.app/",
    code: "https://github.com/yashmaurya3377/ProductList",
    status: "Beta Version",
    date: "March 2023",
    challenges: "Implementing real-time data synchronization across multiple users",
    lessons: "Developed expertise in Firebase realtime database architecture"
  },
  {
    title: "Modern E-Commerce Storefront",
    description: "Performance-optimized online retail platform with emphasis on user experience.",
    features: [
      "Adaptive product display grids",
      "Personalized wishlist functionality",
      "Product rating and review system",
      "Search-engine optimized architecture",
      "Progressive Web App capabilities"
    ],
    tools: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    img: "https://e-com-yashs-projects-f90fd0f3.vercel.app/",
    demo: "https://e-com-yashs-projects-f90fd0f3.vercel.app/",
    code: "https://github.com/yashmaurya3377/E.COM",
    status: "Live",
    date: "January 2025",
    challenges: "Developing performant animations using vanilla JavaScript",
    lessons: "Enhanced DOM manipulation expertise without framework dependencies"
  },
  {
    title: "Grocery E-Commerce Platform",
    description: "Context API-powered online grocery store with optimized state management.",
    features: [
      "Responsive product grid layout",
      "Centralized state-managed shopping cart",
      "Advanced product filtering system",
      "Hierarchical category navigation",
      "Cross-platform responsive design"
    ],
    tools: ["HTML", "CSS", "Tailwind CSS", "React", "JavaScript"],
    img: "https://e-com-using-context-api.vercel.app/",
    demo: "https://e-com-using-context-api.vercel.app/",
    code: "https://github.com/yashmaurya3377/e-com-using-contextApi/tree/main/src",
    status: "Live",
    date: "May 2025",
    challenges: "Architecting efficient state management with Context API",
    lessons: "Developed scalable state patterns for complex applications"
  },
  {
    title: "Premium Hotel Booking Platform",
    description: "Luxury accommodation reservation system with availability management.",
    features: [
      "Interactive room showcase gallery",
      "Intuitive date selection interface",
      "Amenity-based property filtering",
      "Verified guest testimonials",
      "Validated contact management system"
    ],
    tools: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    img: "https://hotel-website-lac-gamma.vercel.app/",
    demo: "https://hotel-website-lac-gamma.vercel.app/",
    code: "https://github.com/yashmaurya3377/hotelWebsite",
    status: "Live",
    date: "November 2022",
    challenges: "Implementing conflict-free reservation scheduling",
    lessons: "Mastered temporal data management techniques"
  }
];
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here's a collection of my recent work, each solving unique challenges and showcasing different technical skills.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-200 dark:border-gray-700"
            >
              <div className="relative h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                <iframe
                  src={project.img}
                  title={project.title}
                  className="w-full h-full object-cover"
                  allowFullScreen
                  loading="lazy"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium shadow ${
                  project.status === "Live Production" ? "bg-green-100 text-green-800" : 
                  project.status === "Beta Version" ? "bg-yellow-100 text-yellow-800" : 
                  "bg-blue-100 text-blue-800"
                }`}>
                  {project.status}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{project.date}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">{project.description}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2 flex items-center text-sm">
                    <FiStar className="mr-2 text-blue-500" /> Key Features
                  </h4>
                  <ul className="space-y-1 text-sm">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-600 dark:text-gray-400">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-xs text-gray-500 dark:text-gray-400">
                        +{project.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mt-auto">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2 flex items-center text-sm">
                      <FiCode className="mr-2 text-blue-500" /> Built With
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tools.slice(0, 4).map((tool, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-full">
                          +{project.tools.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-2 mt-4">
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm flex-1"
                      >
                        <FiExternalLink className="mr-1" /> Demo
                      </a>
                    )}
                    {project.code && (
                      <a 
                        href={project.code} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition text-sm flex-1"
                      >
                        <FiGithub className="mr-1" /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/yashmaurya3377"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            <FiGithub className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;