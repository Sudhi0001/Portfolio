import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Home() {
  return (
    <motion.div
      className="min-h-screen pt-28 px-6 md:px-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* HERO SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20" id="home">
      


          {/* LEFT TEXT */}
          <div className="max-w-xl">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              Things I’ve Built
            </h1>

            <p className="text-gray-500 mt-5 text-lg leading-relaxed">
              I build scalable web applications, turn startup ideas into real products, and create user-focused solutions that solve real-world problems.
            </p>
            <div className="flex items-center gap-5 mt-8 text-2xl text-gray-600">

  <a
    href="https://github.com/Sudhi0001"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub className="hover:text-black transition duration-300" />
  </a>

  <a
    href="https://www.linkedin.com/in/sudheendra-g-k027/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin className="hover:text-blue-600 transition duration-300" />
  </a>

  <a
    href="https://www.instagram.com/sudheendra_a_1/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram className="hover:text-pink-500 transition duration-300" />
  </a>

</div>
<div className="flex gap-4 mt-8">

  <a
    href="/images/resume.pdf"
    target="_blank"
    className="
      px-6 py-3 rounded-full
      bg-black text-white
      text-sm font-medium

      hover:scale-105
      transition duration-300
    "
  >
    View Resume
  </a>

  <a
    href="/images/resume.pdf"
    download
    className="
      px-6 py-3 rounded-full
      border border-black/10
      text-sm font-medium

      hover:bg-black hover:text-white
      transition duration-300
    "
  >
    Download Resume
  </a>

</div>

            {/* DIVIDER */}
            <div className="w-20 h-1 bg-yellow-400 mt-6 rounded-full"></div>
          </div>

          {/* RIGHT IMAGE */}
         <a
  href="#home"
  target="_blank"
  rel="noopener noreferrer"
>
  <motion.img
    src="/images/profile.jpeg"
    alt="Sudhi"
    className="
      w-65 md:w-[320px]
      rounded-2xl
      cursor-pointer

      shadow-[0_30px_80px_rgba(0,0,0,0.2)]

      transition duration-500
      hover:scale-105
      hover:shadow-[0_40px_100px_rgba(0,0,0,0.35)]
    "
    initial={{ opacity: 0, x: 80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  />
</a>
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/10 mb-6">
  <div className="w-2 h-2 rounded-full bg-green-500"></div>

  <span className="text-sm text-gray-600">
    Available for Opportunities
  </span>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">

  <div className="p-6 rounded-2xl bg-black/5" id="about">
    <h2 className="text-3xl font-bold">7+</h2>
    <p className="text-gray-500 mt-2">Projects Built</p>
  </div>

  <div className="p-6 rounded-2xl bg-black/5">
    <h2 className="text-3xl font-bold">100+</h2>
    <p className="text-gray-500 mt-2">DSA Problems</p>
  </div>

  <div className="p-6 rounded-2xl bg-black/5">
    <h2 className="text-3xl font-bold">3</h2>
    <p className="text-gray-500 mt-2">Hackathons</p>
  </div>

  <div className="p-6 rounded-2xl bg-black/5">
    <h2 className="text-3xl font-bold">2</h2>
    <p className="text-gray-500 mt-2">Ideathons</p>
  </div>

</div>

        {/* GRID */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 auto-rows-[260px]" id="projects">
    <ProjectCard title="IntelliHire" year="202" img="/images/intellihire.png" big live="https://github.com/Sudhi0001/IntelliHire" github="https://github.com/Sudhi0001/IntelliHire" />
    <ProjectCard title="AlgoArena" year="2025" img="/images/algoarena.png"  live="https://sudhi0001.github.io/AlgoArena/" github="https://github.com/Sudhi0001/AlgoArena" />
  <ProjectCard title="MindSync" year="2025" img="/images/mindsync.png" live="https://github.com/Sudhi0001/MindSync" github="https://github.com/Sudhi0001/MindSync" />
  <ProjectCard title="FREEJUNX" year="2025" img="/images/freejunx.png" live="https://www.freejunx.in/" github="https://www.freejunx.in/" />


  <ProjectCard title="BEL Internship" year="2025" img="/images/bel.png" live="https://github.com/Sudhi0001/text_summarizer" github="https://github.com/Sudhi0001/text_summarizer" />
  <ProjectCard title="Radiant-Bites" year="2026" img="/images/radiant-bites.png" live="https://sudhi0001.github.io/radiant-fork/" github="https://github.com/Sudhi0001/radiant-fork" />
  <ProjectCard title="Carmania" year="2026" img="/images/carmania.png" live="https://carmania-omega.vercel.app/" github="https://github.com/Sudhi0001/carmania" />
  <ProjectCard title="Foodhub" year="2026" img="/images/FoodHub.png"  github="https://github.com/Sudhi0001/FoodHub" />

</div>
{/* CERTIFICATIONS */}
<section id="certifications" className="py-28">

  <div className="flex items-center justify-between mb-14">

    <div>
      <p className="text-sm uppercase tracking-[4px] text-gray-400 mb-3">
        Certifications
      </p>

      <h2 className="text-5xl font-bold">
        Learning & Achievements
      </h2>
    </div>

  </div>

  <div className="grid md:grid-cols-2 gap-8">

    {/* HACKERRANK */}
    <div
      className="
        p-7 rounded-3xl
        border border-black/10
        bg-black/5
        hover:bg-black hover:text-white
        transition duration-500
        group
      "
    >
      <p className="text-sm text-gray-500 group-hover:text-gray-300">
        HackerRank • 2026
      </p>

      <h3 className="text-2xl font-semibold mt-3">
        Problem Solving (Intermediate)
      </h3>

      <p className="mt-4 text-gray-500 group-hover:text-gray-300 leading-relaxed">
        Verified intermediate-level problem solving and algorithmic thinking certification from HackerRank.
      </p>

      <a
    href="/images/hr.png"
        target="_blank"
        className="inline-block mt-6 font-medium"
      >
        View Certificate →
      </a>
    </div>

    {/* BEL */}
    <div
      className="
        p-7 rounded-3xl
        border border-black/10
        bg-black/5
        hover:bg-black hover:text-white
        transition duration-500
        group
      "
    >
      <p className="text-sm text-gray-500 group-hover:text-gray-300">
        Bharat Electronics Limited • 2025
      </p>

      <h3 className="text-2xl font-semibold mt-3">
        BEL Internship Certification
      </h3>

      <p className="mt-4 text-gray-500 group-hover:text-gray-300 leading-relaxed">
        Internship experience focused on enterprise-level text summarization systems and software workflows.
      </p>

      <a
    href="/images/bel.jpg"
        target="_blank"
        className="inline-block mt-6 font-medium"
      >
        View Certificate →
      </a>
    </div>

    {/* BLOCKCHAIN */}
    <div
      className="
        p-7 rounded-3xl
        border border-black/10
        bg-black/5
        hover:bg-black hover:text-white
        transition duration-500
        group
      "
    >
      <p className="text-sm text-gray-500 group-hover:text-gray-300">
        Kerala Blockchain Academy • 2025
      </p>

      <h3 className="text-2xl font-semibold mt-3">
        Blockchain Foundation Program
      </h3>

      <p className="mt-4 text-gray-500 group-hover:text-gray-300 leading-relaxed">
        Completed foundational blockchain concepts, decentralized systems, and Web3 learning modules.
      </p>

      <a
    href="/images/kba.jpeg"
        target="_blank"
        className="inline-block mt-6 font-medium"
      >
        View Certificate →
      </a>
    </div>

    {/* PYTHON */}
    <div
      className="
        p-7 rounded-3xl
        border border-black/10
        bg-black/5
        hover:bg-black hover:text-white
        transition duration-500
        group
      "
    >
      <p className="text-sm text-gray-500 group-hover:text-gray-300">
        Scaler Topics • 2025
      </p>

      <h3 className="text-2xl font-semibold mt-3">
        Python Course for Beginners
      </h3>

      <p className="mt-4 text-gray-500 group-hover:text-gray-300 leading-relaxed">
        Learned Python fundamentals, modules, problem solving, and beginner-friendly programming workflows.
      </p>

      <a
    href="/images/python.jpg"
        target="_blank"
        className="inline-block mt-6 font-medium"
      >
        View Certificate →
      </a>
    </div>
    {/* DIGITAL FORENSICS */}
<div
  className="
    p-7 rounded-3xl
    border border-black/10
    bg-black/5
    hover:bg-black hover:text-white
    transition duration-500
    group
  "
>
  <p className="text-sm text-gray-500 group-hover:text-gray-300">
    Udemy • 2025
  </p>

  <h3 className="text-2xl font-semibold mt-3">
    Digital Forensics Masterclass
  </h3>

  <p className="mt-4 text-gray-500 group-hover:text-gray-300 leading-relaxed">
    Learned computer forensics, DFIR fundamentals, evidence analysis, and investigation workflows related to cybersecurity and digital systems.
  </p>

  <a
    href="/images/udemy.jpg"
    target="_blank"
    className="inline-block mt-6 font-medium"
  >
    View Certificate →
  </a>
</div>

  </div>

</section>
<section
  id="contact"
  className="py-28 flex flex-col items-center text-center"
>

  <p className="text-sm uppercase tracking-[4px] text-gray-400 mb-4">
    Contact
  </p>

  <h2 className="text-5xl md:text-6xl font-bold leading-tight">
    Let’s Build Something Great
  </h2>

  <p className="text-gray-500 mt-6 max-w-2xl text-lg leading-relaxed">
    I’m always open to collaborating on innovative projects,
    startup ideas, freelance opportunities, and impactful
    digital experiences.
  </p>

  {/* BUTTONS */}
  <div className="flex flex-wrap gap-5 mt-10">

    <a
      href="mailto:sudhig10@gmail.com"
      className="
        px-8 py-4 rounded-full
        bg-black text-white
        hover:scale-105
        transition duration-300
      "
    >
      Email Me
    </a>

    <a
      href="https://github.com/Sudhi0001"
      target="_blank"
      rel="noopener noreferrer"
      className="
        px-8 py-4 rounded-full
        border border-black/10
        hover:bg-black hover:text-white
        transition duration-300
      "
    >
      GitHub
    </a>

  </div>

</section>
<footer className="py-10 text-center text-gray-400 text-sm">

  <p>
    © 2026 Sudheendra G K
  </p>

  <p className="mt-2">
    Building digital products with passion & precision.
  </p>

</footer>


      </div>
    </motion.div>
  );
}
