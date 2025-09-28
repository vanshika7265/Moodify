import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="w-full p-4 mt-8 text-center text-white font-bold relative"
      animate={{ y: [10, 0, 10] }}
      transition={{ repeat: Infinity, duration: 4 }}
      style={{ background: "linear-gradient(135deg, #667eea, #764ba2)" }}
    >
      💙 Moodify - Lift Your Mood 🌈
    </motion.footer>
  );
}

export default Footer;
