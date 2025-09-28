import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full p-4 flex justify-between items-center text-white font-bold fixed top-0 z-50" style={{ background: "linear-gradient(135deg, #667eea, #764ba2)" }}>
      <div className="text-2xl">Moodify</div>
      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/playlist">Playlist</Link>
        <Link to="/history">History</Link>
      </div>
    </nav>
  );
}

export default Navbar;
