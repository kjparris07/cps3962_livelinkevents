import { query } from '@/lib/db';

export async function DBConnection() {
  const result = await query('SELECT * FROM users');
  const users = result.rows;
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.email}</li>
      ))}
    </ul>
  );
}

export default function Home() {

  return (
    <div className="homepage">
      <div className="page">

        <div className="hero-text">
          YOUR NEXT CONCERT EXPERIENCE <br /> STARTS HERE...
        </div>
        <div className="search-box">
          <div className="search-title">Search by:</div>

          <div className="search-fields">

            <div className="field">
              <div className="field-label">Location</div>
              <input
                className="field-input"
                type="text"
                placeholder="Enter City or Zip Code"
              />
            </div>

            <div className="field">
              <div className="field-label">Date</div>
              <input
                className="field-input"
                type="date"
                
              />
            </div>

            <div className="field">
              <div className="field-label">Artist</div>
              <input
                className="field-input"
                type="text"
                placeholder="Enter Artist Name"
              />
            </div>

          </div>
        </div>

        <div className="search">
          <button className="search button">
            Search
          </button>

          <a href="/events">
            <button className="search button">
              See All Events
            </button>
          </a>
        </div>

        <DBConnection />

        <div className="cta">
          <a href="/membership">
            <button className="cta-btn">
              Become a member today and don’t miss on discounts!
            </button>
          </a>
        </div>

      </div>
    </div>
  );
}