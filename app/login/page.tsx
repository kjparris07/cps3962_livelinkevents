import Link from "next/link";
import "../../styles/login.css";

export default function LoginPage() {
  return (
    <main className="login-page">
      <div className="login-container">
        <div className="top-bar">
<Link href="/">
  <div className="logo">LiveLink Events</div>
</Link>        

</div>

        <div className="login-title">LOG IN</div>
        <div className="required-note">* Indicates required field</div>

        <div className="input-group">
          <label className="input-label" htmlFor="username">
            Username*
          </label>
          <input id="username" type="text" className="input-box" />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="password">
            Password*
          </label>
          <input id="password" type="password" className="input-box" />
        </div>

        <div className="cta">
          <button className="cta-btn">Log In</button>
        </div>

        <div className="footer-text">
          Or
          <br />
          <Link href="/signup">
            <span>Sign Up</span>
          </Link>{" "}
          to create an account
        </div>
      </div>
    </main>
  );
}