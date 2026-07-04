import "../styles/ProfileCard.css";

function ProfileCard({ user }) {
  return (
    <div className="profile-card">
      <img src={user.avatar_url} alt={user.login} />

      <h2>{user.name || user.login}</h2>

      <p>{user.bio || "No bio available"}</p>

      <div className="info">
        <p><strong>📍 Location:</strong> {user.location || "Not Available"}</p>

        <p><strong>🏢 Company:</strong> {user.company || "Not Available"}</p>

        <p><strong>📦 Public Repos:</strong> {user.public_repos}</p>

        <p><strong>👥 Followers:</strong> {user.followers}</p>

        <p><strong>➡ Following:</strong> {user.following}</p>
      </div>

      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
      >
        Visit GitHub Profile
      </a>
    </div>
  );
}

export default ProfileCard;