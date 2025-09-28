import { motion } from "framer-motion";

function MoodCard({ mood, color, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, boxShadow: "0px 0px 25px rgba(255,255,255,0.6)" }}
      whileTap={{ scale: 0.95, rotate: [0, 5, -5, 0] }}
      onClick={onClick}
      className="p-6 rounded-2xl cursor-pointer text-white font-bold text-xl transition-all"
      style={{ background: color }}
    >
      {mood}
    </motion.div>
  );
}

export default MoodCard;
