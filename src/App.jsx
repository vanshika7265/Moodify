import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedRoutes from "./AnimatedRoutes";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  return (
    <Router>
      {/* Fullscreen animated background */}
      <AnimatedBackground page="home" />

      {/* Navbar */}
      <Navbar />

      {/* Pages container */}
      <div className="relative w-full min-h-screen flex flex-col">
        <AnimatedRoutes />
      </div>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
