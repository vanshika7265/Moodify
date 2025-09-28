import { useState, useEffect } from "react";
import AnimatedBackground from "../components/AnimatedBackground";

function MoodHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("moodHistory") || "[]");
    setHistory(data.reverse()); // latest first
  }, []);

  return (
    <div className="relative flex flex-col items-center min-h-screen pt-24 px-4 sm:px-6 md:px-8 space-y-6">
      {/* Animated Background */}
      <AnimatedBackground page="history" />

      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
        Mood History
      </h1>

      {/* History List */}
      <div className="flex flex-col gap-4 mt-6 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        {history.length === 0 ? (
          <div className="p-4 bg-white rounded-xl text-center font-semibold">
            No moods recorded yet
          </div>
        ) : (
          history.map((entry, i) => (
            <div
              key={i}
              className="p-4 bg-white rounded-xl text-center font-semibold flex flex-col sm:flex-row justify-between items-center"
            >
              <span>{entry.mood}</span>
              <span className="text-gray-500 text-sm mt-1 sm:mt-0">{entry.date}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MoodHistory;
