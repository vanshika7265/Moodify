import { useLocation, useNavigate } from "react-router-dom";
import AnimatedBackground from "../components/AnimatedBackground";
import moods from "../data/moods.json";

function Activities() {
  const location = useLocation();
  const navigate = useNavigate();
  const mood = location.state?.mood || localStorage.getItem("lastMood") || "Happy";

  return (
    <div className="relative flex flex-col items-center min-h-screen pt-24 px-4 sm:px-6 md:px-8 space-y-6">
      {/* Animated Background */}
      <AnimatedBackground page="activities" moodColor={moods[mood].color} />

      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
        {mood} Activities
      </h1>

      {/* Activities List */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full max-w-4xl mt-6">
        {moods[mood].activities.map((act, i) => (
          <div
            key={i}
            className="w-full sm:w-80 p-4 bg-white rounded-xl font-semibold cursor-pointer hover:scale-105 transition-transform text-center shadow-md"
          >
            {act}
          </div>
        ))}
      </div>

      {/* Go to Playlist Button */}
      <button
        className="mt-8 px-6 py-2 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition text-sm sm:text-base"
        onClick={() => navigate("/playlist", { state: { mood } })}
      >
        Go to Playlist
      </button>
    </div>
  );
}

export default Activities;
