import MoodCard from "./MoodCard";
import moods from "../data/moods.json";

function MoodSelector({ onSelect }) {
  return (
    <div className="grid grid-cols-2 gap-6 mt-8 w-full max-w-md">
      {Object.keys(moods).map((mood) => (
        <MoodCard
          key={mood}
          mood={mood}
          color={moods[mood].color}
          onClick={() => onSelect(mood)}
        />
      ))}
    </div>
  );
}

export default MoodSelector;
