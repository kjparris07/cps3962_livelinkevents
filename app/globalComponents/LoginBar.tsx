"use client";

import Link from "next/link";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

export default function LoginBar() {
  const [cookies, , removeCookie] = useCookies(["email"]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(loggedIn);
    }
  }, []);

  const hasAccountAccess = Boolean(cookies.email) && isLoggedIn;

  const submitLogout = () => {
    removeCookie("email", { path: "/" });
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUsername");
    localStorage.removeItem("loggedInEmail");
    window.location.href = "/signin";
  };

  return (
    <div className="top-bar">
      <Link href="/" className="logo">
        LiveLink Events
      </Link>

      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Link
          href={hasAccountAccess ? "/account/customer" : "/signin"}
          className="avatar-hover"
        >
          <span className="avatar-circle">👤</span>
          <span className="avatar-label">
            {hasAccountAccess ? "Account" : "Sign Up / Sign In"}
          </span>
        </Link>

        {hasAccountAccess && (
          <button type="button" className="auth-btn" onClick={submitLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
}