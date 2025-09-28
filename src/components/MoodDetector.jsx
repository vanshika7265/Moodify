import { motion } from "framer-motion";

const keywords = {
  Happy: ["happy", "joy", "excited", "good"],
  Sad: ["sad", "down", "blue", "unhappy"],
  Relaxed: ["relaxed", "calm", "tired", "sleepy"],
  Energetic: ["energetic", "active", "hyped", "ready"]
};

function MoodDetector({ onDetect }) {
  const detectMood = (text) => {
    const lower = text.toLowerCase();
    for (const mood in keywords) {
      if (keywords[mood].some((k) => lower.includes(k))) {
        onDetect(mood);
        return;
      }
    }
    onDetect("Happy");
  };

  return (
    <motion.input
      type="text"
      placeholder="Type how you feel..."
      className="p-4 w-80 rounded-xl shadow-md mt-8 focus:outline-none"
      whileFocus={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(0,0,0,0.2)" }}
      onBlur={(e) => detectMood(e.target.value)}
    />
  );
}

export default MoodDetector;
