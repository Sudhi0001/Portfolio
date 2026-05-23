import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        
        <h1 className="font-bold text-xl">Sudheendra G K</h1>

       <div className="flex gap-8 text-sm font-medium">

  <a
    href="#home"
    className="hover:text-black transition duration-300"
  >
    Home
  </a>

  <a
    href="#projects"
    className="hover:text-black transition duration-300"
  >
    Projects
  </a>

  <a
    href="#home"
    className="hover:text-black transition duration-300"
  >
    About
  </a>

  <a
    href="#contact"
    className="hover:text-black transition duration-300"
  >
    Contact
  </a>

</div>

      </div>
    </motion.nav>
  );
}