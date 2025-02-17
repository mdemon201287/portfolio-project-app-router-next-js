// data/projects.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  githubLink: string; // Add the new property here
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Next.js and Stripe online store",
    fullDescription: "A fully responsive online store built with Next.js and Stripe integration.",
    image: "/images/project1.jpg",
    githubLink: "https://github.com/yourusername/ecommerce-platform" // Add the GitHub link here
  },
  {
    id: 2,
    title: "Task Management App",
    description: "React and Firebase productivity app",
    fullDescription: "A task management application built with React and Firebase for real-time updates.",
    image: "/images/project2.jpg",
    githubLink: "https://github.com/yourusername/task-management-app"
  },
  {
    id: 3,
    title: "Weather Forecast Dashboard",
    description: "OpenWeatherMap API and Chart.js",
    fullDescription: "A weather dashboard using OpenWeatherMap API and Chart.js for data visualization.",
    image: "/images/project3.jpg",
    githubLink: "https://github.com/yourusername/weather-forecast-dashboard"
  },
  {
    id: 4,
    title: "Social Media Analytics Tool",
    description: "Data visualization with D3.js",
    fullDescription: "A social media analytics tool with interactive visualizations using D3.js.",
    image: "/images/project4.jpg",
    githubLink: "https://github.com/yourusername/social-media-analytics-tool"
  },
  {
    id: 5,
    title: "Fitness Tracking Mobile App",
    description: "React Native and HealthKit integration",
    fullDescription: "A mobile app for fitness tracking built with React Native and integrated with HealthKit.",
    image: "/images/project5.jpg",
    githubLink: "https://github.com/yourusername/fitness-tracking-mobile-app"
  },
  {
    id: 6,
    title: "AI-powered Chatbot",
    description: "Natural language processing with TensorFlow",
    fullDescription: "An AI-powered chatbot using natural language processing with TensorFlow.",
    image: "/images/project6.jpg",
    githubLink: "https://github.com/yourusername/ai-powered-chatbot"
  },
  {
    id: 7,
    title: "Augmented Reality Art Gallery",
    description: "AR experience with Unity and Vuforia",
    fullDescription: "An augmented reality art gallery experience created with Unity and Vuforia.",
    image: "/images/project7.jpg",
    githubLink: "https://github.com/yourusername/ar-art-gallery"
  },
  {
    id: 8,
    title: "Cryptocurrency Portfolio Tracker",
    description: "Real-time data with WebSocket",
    fullDescription: "A cryptocurrency portfolio tracker with real-time updates using WebSocket connections.",
    image: "/images/project8.jpg",
    githubLink: "https://github.com/yourusername/cryptocurrency-portfolio-tracker"
  },
  {
    id: 9,
    title: "Smart Home Automation System",
    description: "IoT integration with Raspberry Pi",
    fullDescription: "A smart home automation system integrating various IoT devices with Raspberry Pi.",
    image: "/images/project9.jpg",
    githubLink: "https://github.com/yourusername/smart-home-automation"
  }
];
