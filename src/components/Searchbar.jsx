import { useState } from "react";
import "../styles/SearchBar.css";

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(username.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="search-box">
      <input
    
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <small>Example: torvalds, gaearon, octocat</small>

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;