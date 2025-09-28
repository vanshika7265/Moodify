import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const pageGradients = {
  home: ["linear-gradient(135deg, #fddb92, #d1fdff)"],
  activities: ["linear-gradient(135deg, #43e97b, #38f9d7)"],
  playlist: ["linear-gradient(135deg, #fbc2eb, #a6c1ee)"],
  history: ["linear-gradient(135deg, #fceabb, #f8b500)"]
};

function AnimatedBackground({ page, moodColor }) {
  const controls = useAnimation();
  const bg = moodColor || pageGradients[page][0];

  useEffect(() => {
    // Start with center small circle animation expanding to full screen
    controls.start({
      scale: [0, 1],
      opacity: [0, 1],
      transition: { duration: 1.5, ease: "easeInOut" }
    });
  }, [controls, bg]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen -z-20 origin-center"
      style={{ background: bg }}
      animate={controls}
    />
  );
}

export default AnimatedBackground;
