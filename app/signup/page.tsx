import Link from "next/link";
import "../../styles/login.css";

export default function SignupPage() {
  return (
    <main className="login-page">
      <div className="login-container">
        <div className="top-bar">
<Link href="/" className="logo">
  LiveLink Events
</Link>

        </div>

        <div className="login-title">SIGN UP</div>
        <div className="required-note">* Indicates required field</div>

        <div className="input-group">
          <label className="input-label" htmlFor="fullname">
            Full Name*
          </label>
          <input id="fullname" type="text" className="input-box" />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="email">
            Email*
          </label>
          <input id="email" type="email" className="input-box" />
        </div>

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

        <div className="input-group">
          <label className="input-label" htmlFor="confirmPassword">
            Confirm Password*
          </label>
          <input id="confirmPassword" type="password" className="input-box" />
        </div>

        <div className="cta">
          <button className="cta-btn">Create Account</button>
        </div>

        <div className="footer-text">
          Already have an account?
          <br />
          <Link href="/login">
            <span>Log In</span>
          </Link>
        </div>
      </div>
    </main>
  );
}