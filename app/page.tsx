import Link from "next/link";
import "../styles/main.css";

export default function Home() {
  return (
    <main>
      <div className="top-bar">
        <Link href="/" className="logo">
          LiveLink Events
        </Link>

        <Link href="/login" className="avatar-hover" aria-label="Sign Up / Log In">
          <span className="avatar-circle">👤</span>
          <span className="avatar-label">Sign Up / Log In</span>
        </Link>
      </div>

      <h1 id="tagline">
        YOUR NEXT CONCERT EXPERIENCE
        <br />
        STARTS HERE...
      </h1>

      <h2 id="search">Search by:</h2>

      <div className="container">
        <div className="search-card">
          <label htmlFor="location">
            <h3>Location</h3>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter City or Zipcode"
          />
          <Link href="/events" className="babyButton">
            &gt;
          </Link>
        </div>

        <div className="search-card">
          <label htmlFor="date">
            <h3>Date</h3>
          </label>
          <input type="date" id="date" name="date" />
          <Link href="/events" className="babyButton">
            &gt;
          </Link>
        </div>

        <div className="search-card">
          <label htmlFor="artist">
            <h3>Artist</h3>
          </label>
          <input
            type="text"
            id="artist"
            name="artist"
            placeholder="Artist"
          />
          <Link href="/events" className="babyButton">
            &gt;
          </Link>
        </div>
      </div>

      <div className="action-row">
        <Link href="/events" className="view-events-btn">
          View All Events
        </Link>

        <Link href="/signup" className="premium-box">
          Unlock Premium Access
        </Link>
      </div>
    </main>
  );
}