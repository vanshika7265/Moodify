import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import Playlist from "./pages/Playlist";
import MoodHistory from "./pages/MoodHistory";

function AnimatedRoutes() {
  const location = useLocation();

  const pageAnimation = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.2 },
    transition: { duration: 1.2, ease: "easeInOut" } // slow-motion
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              {...pageAnimation}
              className="w-full min-h-screen flex justify-center items-start sm:items-center origin-center px-4 sm:px-0"
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/activities"
          element={
            <motion.div
              {...pageAnimation}
              className="w-full min-h-screen flex justify-center items-start sm:items-center origin-center px-4 sm:px-0"
            >
              <Activities />
            </motion.div>
          }
        />
        <Route
          path="/playlist"
          element={
            <motion.div
              {...pageAnimation}
              className="w-full min-h-screen flex justify-center items-start sm:items-center origin-center px-4 sm:px-0"
            >
              <Playlist />
            </motion.div>
          }
        />
        <Route
          path="/history"
          element={
            <motion.div
              {...pageAnimation}
              className="w-full min-h-screen flex justify-center items-start sm:items-center origin-center px-4 sm:px-0"
            >
              <MoodHistory />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
