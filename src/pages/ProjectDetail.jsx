import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const { id } = useParams();

 const projects = {
  
  mindsync: {
    title: "MindSync",

    description:
      "An AI-powered student support and learning platform designed to simplify concept learning with smart assistance and educational resources.",

    problem:
  "Many students struggle to learn concepts effectively because educational resources are often scattered across multiple platforms, making the learning process confusing and unstructured. Beginners especially face difficulties understanding topics from scratch due to lack of personalized guidance, interactive support, and organized study workflows. Traditional learning systems also fail to provide instant doubt clarification and adaptive assistance, which reduces student engagement and productivity over time.",
    solution:
  "Developed a structured and scalable learning platform that integrates AI-powered assistance, organized educational resources, smart notes management, and mock-test workflows into a single ecosystem. The platform was designed to simplify concept learning by providing students with guided study paths, instant AI-based doubt clarification, and categorized learning materials. Implemented modular frontend architecture and optimized user flows to ensure smooth navigation between notes, tests, and resources. Added productivity-focused features to improve engagement, reduce confusion caused by scattered study content, and create a more interactive and efficient learning experience for students.",
    tech: "React, JavaScript, Node.js, AI APIs",

    role:
  "Worked as a Fullstack Developer & AI Integrator, responsible for designing the platform architecture, integrating AI-powered assistance features, managing frontend and backend workflows, and building productivity-focused learning systems for students.",

features: [
  "AI-Powered Assistant for instant doubt clarification",
  "Concept-Based Learning System",
  "Organized Resource & Notes Management",
  "Interactive Mock-Test Workflows",
  "Student Productivity & Learning Tools",
  "Structured Learning Experience",
  "Scalable Frontend & Backend Integration",
],

    image: "/images/mindsync.png",
  },

  algoarena: {
    title: "AlgoArena",

    description:
  "AlgoArena is a gamified Data Structures & Algorithms learning platform designed to make technical learning more engaging, interactive, and motivating for students. The platform combines quizzes, XP-based progression systems, analytics dashboards, and interactive coding workflows to create a competitive yet productive learning environment. Built with a strong focus on user experience and visual interaction, AlgoArena transforms traditional DSA practice into an immersive learning journey by integrating progress tracking, performance visualization, instant feedback systems, and structured learning modules. The project aims to improve consistency, problem-solving skills, and student engagement through gamification and modern frontend experiences.",
    problem:
  "Most traditional DSA learning platforms focus heavily on theory and repetitive problem-solving, which often makes the learning experience monotonous and discouraging for students. Many learners struggle to stay consistent because existing platforms lack interactive engagement, real-time progress tracking, motivation systems, and visually appealing learning environments. Beginners especially find it difficult to maintain interest while practicing complex algorithms and problem-solving patterns in static interfaces that provide little feedback, personalization, or sense of achievement throughout the learning journey.",
    solution:
  "Designed and developed a visually interactive DSA learning platform focused on making problem-solving more engaging, structured, and motivating for students. Implemented gamification systems such as XP progression, achievement-based learning, and performance tracking to improve consistency and user engagement. Integrated chart-based analytics dashboards using Chart.js to provide real-time progress visualization and learning insights. Built interactive quiz workflows and instant feedback mechanisms to help users identify mistakes quickly and improve problem-solving efficiency. Optimized the frontend experience with responsive UI design, modular JavaScript architecture, and smooth navigation flows to create an immersive and modern learning environment for aspiring programmers.",
   tech:
  "JavaScript, Chart.js, HTML5, CSS3, Responsive UI Design, Interactive Data Visualization, Gamification Systems",

role:
  "Worked as a Frontend Developer & Product Designer, responsible for designing the user experience, developing interactive UI components, implementing gamification systems, and creating visually engaging workflows to improve student engagement and learning efficiency.",
    features: [
        "XP-Based Progress Tracking System",
  "Interactive DSA Quizzes & Challenges",
  "Real-Time Analytics Dashboard",
  "Gamified Learning Experience",
  "Progress Visualization & Performance Insights",
  "Instant Feedback Mechanisms",
  "Responsive & Interactive UI Design",
    ],

    image: "/images/algoarena.png",
  },

  freejunx: {
    title: "FREEJUNX",

    description:
      "A premium gourmet food business website developed with agency-level UI/UX quality and responsive design principles.",

    problem:
      "The client required a modern and visually engaging brand presence within a limited project budget.",

    solution:
      "Designed a clean and conversion-focused interface with custom animations, responsive layouts, and polished branding.",

    tech: "HTML, CSS, JavaScript",

    role: "Frontend Developer & UI/UX Designer",

    features: [
      "Modern UI/UX",
      "Responsive Design",
      "Custom Animations",
      "Brand-Focused Layout",
      "Interactive Components",
    ],

    image: "/images/freejunx.png",
  },

  bel: {
    title: "BEL Internship",

    description:
      "An enterprise-oriented ML-powered text summarization system developed during internship experience.",

    problem:
      "Large enterprise documents were difficult to process and summarize efficiently.",

    solution:
      "Implemented preprocessing pipelines and machine learning-based summarization workflows for efficient document handling.",

    tech: "Python, Flask, Machine Learning",

    role: "ML Intern & Python Developer",

    features: [
      "Text Summarization",
      "ML Pipelines",
      "Document Processing",
      "Flask Integration",
      "Enterprise Workflow",
    ],

    image: "/images/bel.png",
  },

  radiantbites: {
    title: "Radiant-Bites",

    description:
      "A modern restaurant and food ordering interface focused on premium visual design and user engagement.",

    problem:
      "Food platforms often lacked immersive visuals and smooth ordering experiences.",

    solution:
      "Created a stylish and conversion-focused interface with elegant layouts and responsive interactions.",

    tech: "React, Tailwind CSS",

    role: "Frontend Developer",

    features: [
      "Modern Food UI",
      "Responsive Layout",
      "Interactive Sections",
      "Premium Branding",
      "Clean Navigation",
    ],

    image: "/images/radiant-bites.png",
  },

  carmania: {
    title: "Carmania",

    description:
      "An automotive showcase platform designed to deliver immersive browsing experiences for premium vehicles.",

    problem:
      "Traditional automotive websites lacked visual engagement and modern UI experiences.",

    solution:
      "Built a sleek showcase platform with immersive layouts, strong visual hierarchy, and interactive sections.",

    tech: "React, CSS",

    role: "Frontend Developer & UI Designer",

    features: [
      "Premium Car Showcase",
      "Interactive UI",
      "Modern Layouts",
      "Responsive Experience",
      "Visual Storytelling",
    ],

    image: "/images/carmania.png",
  },

  foodhub: {
    title: "FoodHub",

    description:
      "A responsive food delivery interface with intuitive navigation and modern ordering interactions.",

    problem:
      "Users needed a simple and efficient food ordering experience across devices.",

    solution:
      "Developed a responsive frontend with streamlined navigation and user-focused interaction patterns.",

    tech: "JavaScript, Tailwind CSS",

    role: "Frontend Developer",

    features: [
      "Food Ordering UI",
      "Responsive Design",
      "Interactive Navigation",
      "Modern Layout",
      "Smooth User Experience",
    ],

    image: "/images/FoodHub.png",
  },
  intellihire: {
  title: "IntelliHire",

  description:
    "An AI-powered placement preparation platform that helps students practice aptitude, coding, interviews, resume analysis, and career planning in one unified system.",

  problem:
    "Students often rely on multiple disconnected platforms for placement preparation, making it difficult to track progress and receive personalized guidance.",

  solution:
    "Built a centralized platform that combines AI mentorship, mock interviews, coding practice, aptitude assessments, resume analysis, and progress tracking to streamline placement preparation.",

  tech: "React.js, Tailwind CSS, FastAPI, Python, MongoDB, Gemini AI, JWT",

  role: "Full Stack Developer",

  features: [
    "AI Career Mentor",
    "AI Mock Interviews",
    "Resume Analyzer",
    "Coding Practice Platform",
    "Aptitude Assessment System",
    "Personalized Learning Roadmaps",
    "Leaderboard & Progress Tracking",
    "Authentication & User Management",
  ],

  image: "/images/IntelliHire.png",
},
};

  const project = projects[id];

  if (!project) return <h1>Project not found</h1>;

  return (
    <motion.div
      className="pt-28 px-6 md:px-20 bg-[#f8fafc] min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h1 className="text-5xl font-bold mb-6">{project.title}</h1>

        {/* IMAGE */}
        <img
          src={project.image}
          className="rounded-xl mb-10 shadow-lg"
        />

        {/* DESCRIPTION */}
        <p className="text-lg text-gray-700 mb-6">
          {project.description}
        </p>

        {/* SECTIONS */}
       <div className="space-y-8">

  {/* PROBLEM */}
  <div>
    <h2 className="text-2xl font-semibold">Problem</h2>

    <p className="text-gray-600 mt-2 leading-relaxed">
      {project.problem}
    </p>
  </div>

  {/* SOLUTION */}
  <div>
    <h2 className="text-2xl font-semibold">Solution</h2>

    <p className="text-gray-600 mt-2 leading-relaxed">
      {project.solution}
    </p>
  </div>

  {/* TECH STACK */}
  <div>
    <h2 className="text-2xl font-semibold">
      Tech Stack
    </h2>

    <p className="text-gray-600 mt-2">
      {project.tech}
    </p>
  </div>

  {/* ROLE */}
  <div>
    <h2 className="text-2xl font-semibold">
      Role & Contribution
    </h2>

    <p className="text-gray-600 mt-2 leading-relaxed">
      {project.role}
    </p>
  </div>

  {/* FEATURES */}
  <div>
    <h2 className="text-2xl font-semibold">
      Key Features
    </h2>

    <div className="flex flex-wrap gap-3 mt-4">
      {project.features.map((feature, index) => (
        <span
          key={index}
          className="
            px-4 py-2 rounded-full
            bg-black/5
            border border-black/10
            text-sm text-gray-700
          "
        >
          {feature}
        </span>
      ))}
    </div>
  </div>

</div>
      </div>
    </motion.div>
  );
}
