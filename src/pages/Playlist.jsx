import { useLocation } from "react-router-dom";
import AnimatedBackground from "../components/AnimatedBackground";
import moods from "../data/moods.json";

function Playlist() {
  const location = useLocation();
  const mood = location.state?.mood || localStorage.getItem("lastMood") || "Happy";

  return (
    <div className="relative flex flex-col items-center min-h-screen pt-24 px-4 sm:px-6 md:px-8 space-y-6">
      {/* Animated Background */}
      <AnimatedBackground page="playlist" moodColor={moods[mood].color} />

      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
        {mood} Playlist
      </h1>

      {/* Playlist iframe */}
      <div className="mt-6 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <iframe
          className="w-full h-80 sm:h-96 md:h-[500px] rounded-xl shadow-lg"
          src={moods[mood].playlist}
          allow="encrypted-media"
          title={`${mood} playlist`}
        ></iframe>
      </div>
    </div>
  );
}

export default Playlist;
