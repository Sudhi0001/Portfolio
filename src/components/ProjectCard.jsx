import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({
  title,
  year,
  img,
  big,
  live,
  github,
}){
  const navigate = useNavigate();

  return (
   <motion.div
  onClick={() => navigate(`/project/${title.toLowerCase()}`)}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.04, y: -8 }}
  transition={{ type: "spring", stiffness: 200, damping: 15 }}
  className={`group relative overflow-hidden rounded-2xl cursor-pointer 
  ${big ? "col-span-2 row-span-2" : ""}
  shadow-[0_30px_80px_rgba(0,0,0,0.15)]`}
>
      {/* IMAGE */}
      <img
        src={img}
        alt={title}
className="w-full h-full object-cover transition duration-500 group-hover:scale-105"      />

      {/* GRADIENT OVERLAY */}
{/* GRADIENT OVERLAY */}
<div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-95 transition duration-500"></div>      {/* TEXT */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition duration-500">
        <h2 className="text-xl font-semibold tracking-wide capitalize">
          {title}
        </h2>
        <p className="text-sm opacity-80">{year}</p>
      </div>
      {/* ACTION BUTTONS */}
<div
  className="
    absolute bottom-6 right-6
    flex gap-3

    opacity-0
    group-hover:opacity-100

    transition duration-500
  "
>

  <a
    href={live}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    className="
      px-4 py-2 rounded-full
      bg-white text-black
      text-sm font-medium

      hover:scale-105
      transition
    "
  >
    Live
  </a>

  <a
    href={github}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    className="
      px-4 py-2 rounded-full
      border border-white/20
      text-white
      text-sm font-medium

      hover:bg-white hover:text-black
      transition
    "
  >
    GitHub
  </a>

</div>

      {/* ACCENT */}
      <div className="absolute top-5 right-5 w-3 h-3 bg-yellow-400"></div>
    </motion.div>
  );
}