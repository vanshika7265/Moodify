import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedBackground from "../components/AnimatedBackground";
import moods from "../data/moods.json";

function Home() {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState("");

  const handleSelectMood = (mood) => {
    setSelectedMood(mood);

    const history = JSON.parse(localStorage.getItem("moodHistory") || "[]");
    history.push({ mood, date: new Date().toLocaleString() });
    localStorage.setItem("moodHistory", JSON.stringify(history));
    localStorage.setItem("lastMood", mood);

    setTimeout(() => navigate("/activities", { state: { mood } }), 500);
  };

  const getEmoji = (mood) => {
    switch (mood) {
      case "Happy": return "😄";
      case "Sad": return "😢";
      case "Relaxed": return "🧘‍♀️";
      case "Energetic": return "⚡";
      default: return "";
    }
  };

  const getQuote = (mood) => {
    switch (mood) {
      case "Happy": return "Keep smiling, the world looks brighter! 🌞";
      case "Sad": return "Every storm runs out of rain. 🌧️";
      case "Relaxed": return "Take a deep breath and enjoy the moment. 🌿";
      case "Energetic": return "Time to shine and conquer the day! 💪";
      default: return "";
    }
  };

  const getActivity = (mood) => {
    switch (mood) {
      case "Happy": return "Listen to upbeat music or call a friend!";
      case "Sad": return "Take a short walk or write in a journal.";
      case "Relaxed": return "Meditate or enjoy your favorite tea.";
      case "Energetic": return "Do a quick workout or dance a bit!";
      default: return "";
    }
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen pt-24 space-y-10 px-4 sm:px-0">
      {/* Animated Background */}
      <AnimatedBackground page="home" moodColor={selectedMood ? moods[selectedMood].color : null} />

      {/* Header */}
      <header className="text-center space-y-4 max-w-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-black">Select Your Mood</h1>
        <p className="text-gray-700 text-sm sm:text-base">
          Feeling happy, sad, relaxed, or energetic? Select your mood and let Moodify create a personalized playlist just for you! 🎵
        </p>
      </header>

      {/* Mood Cards */}
      <section className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 w-full">
        {Object.keys(moods).map((mood) => (
          <div
            key={mood}
            onClick={() => handleSelectMood(mood)}
            className="p-4 sm:p-6 rounded-2xl cursor-pointer text-white font-bold text-base sm:text-xl transition-transform duration-300 hover:scale-110 hover:shadow-lg flex flex-col items-center w-full sm:w-auto"
            style={{ backgroundColor: moods[mood].color }}
          >
            <div className="text-xl sm:text-2xl">{getEmoji(mood)} {mood}</div>
            <div className="text-xs sm:text-sm mt-2 text-black text-center max-w-xs">
              {moods[mood].description}
            </div>
          </div>
        ))}
      </section>

      {/* Mood Details */}
      {selectedMood && (
        <section className="mt-6 sm:mt-8 flex flex-col items-center space-y-3 max-w-md text-center">
          <div className="text-sm sm:text-lg italic text-gray-800">"{getQuote(selectedMood)}"</div>
          <div className="bg-white/20 p-2 sm:p-4 rounded-xl text-gray-700 font-medium text-xs sm:text-sm">
            {getActivity(selectedMood)}
          </div>
        </section>
      )}
    </div>
  );
}

export default Home;
