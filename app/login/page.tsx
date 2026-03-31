import "../../styles/signin.css";

export default function LoginPage() {
  return (
    <main className="login-page">
      <div className="login-container">
        <div className="top-bar">
          <div className="logo">LiveLink Events</div>
        </div>

        <div className="login-title">LOG IN</div>
        <div className="required-note">* Indicates required field</div>

        <div className="input-group">
          <div className="input-label">Username*</div>
          <input type="text" className="input-box" />
        </div>

        <div className="input-group">
          <div className="input-label">Password*</div>
          <input type="password" className="input-box" />
        </div>

        <div className="cta">
          <button className="cta-btn">Log In</button>
        </div>

        <div className="footer-text">
          Or
          <br />
          <a href="/signup" className="footer-link">
            Sign Up
          </a>{" "}
          to create an account
        </div>
      </div>
    </main>
  );
}