import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import Loader from "./components/Loader";
import "./styles/App.css";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const fetchUser = async (username) => {
    if (!username) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const res = await axios.get(`https://api.github.com/users/${username}`);
      setUser(res.data);
    } catch (err) {
      setError("GitHub user not found!");
    }

    setLoading(false);
  };

  return (
    <div className="app">
      
      <h1>GitHub Insight</h1>

      <SearchBar onSearch={fetchUser} />

      {loading && <Loader />}

      {
  error && (
    <div className="error-card">
      ❌ User not found. Please check the username.
    </div>
  )
}

      {user && <ProfileCard user={user} />}
      <footer
  style={{
    marginTop: "40px",
    color: "#666",
    fontSize: "14px",
  }}
>
  Built with React.js • GitHub REST API • Axios
</footer>
    </div>
  );
}

export default App;