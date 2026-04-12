"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/signin.css";

export default function LoginPage() {
  const router = useRouter();

  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setError("");
    setLoading(true);

    const savedUser = localStorage.getItem("livelinkUser");

    if (!savedUser) {
      setError("No account found. Please sign up first.");
      setLoading(false);
      return;
    }

    const parsedUser = JSON.parse(savedUser);

    const matchesUser =
      emailOrUsername === parsedUser.email ||
      emailOrUsername === parsedUser.username;

    const matchesPassword = password === parsedUser.password;

    if (!matchesUser || !matchesPassword) {
      setError("Invalid email/username or password.");
      setLoading(false);
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInUsername", parsedUser.username);
    localStorage.setItem("loggedInEmail", parsedUser.email);
    localStorage.setItem("loggedInRole", parsedUser.accountType || "customer");

    setLoading(false);

    if (parsedUser.accountType === "organizer") {
      router.push("/account/organizer");
    } else {
      router.push("/account/customer");
    }
  };

  return (
    <main className="signin-page">
      <div className="signin-container">
        <div className="top-bar">
          <Link href="/" className="logo">
            LiveLink Events
          </Link>
        </div>

        <div className="signin-title">SIGN IN</div>
        <div className="required-note">* Indicates required field</div>

        <div className="input-group">
          <label className="input-label" htmlFor="emailOrUsername">
            Email or Username*
          </label>
          <input
            id="emailOrUsername"
            type="text"
            className="input-box"
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="password">
            Password*
          </label>
          <input
            id="password"
            type="password"
            className="input-box"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && (
          <p style={{ color: "red", marginBottom: "15px" }}>{error}</p>
        )}

        <div className="cta">
          <button
            type="button"
            className="cta-btn"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </div>

        <div className="footer-text">
          Don’t have an account?
          <br />
          <Link href="/signup">
            <span>Sign Up</span>
          </Link>
        </div>
      </div>
    </main>
  );
}