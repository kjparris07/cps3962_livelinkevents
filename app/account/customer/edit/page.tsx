"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../../../../styles/main.css";
import "../../../../styles/signin.css";

export default function EditCustomer() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [favoriteGenre, setFavoriteGenre] = useState("");
  const [favoriteArtist, setFavoriteArtist] = useState("");
  const [favoriteCity, setFavoriteCity] = useState("");
  const [profilePrivate, setProfilePrivate] = useState(false);
  const [marketingEmails, setMarketingEmails] = useState(true);
  const [ticketAlerts, setTicketAlerts] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("livelinkUser");

    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);

      setFullName(parsedUser.fullName || "");
      setEmail(parsedUser.email || "");
      setUsername(parsedUser.username || "");
      setPhoneNumber(parsedUser.phoneNumber || "");
      setFavoriteGenre(parsedUser.favoriteGenre || "");
      setFavoriteArtist(parsedUser.favoriteArtist || "");
      setFavoriteCity(parsedUser.favoriteCity || "");
      setProfilePrivate(parsedUser.profilePrivate || false);
      setMarketingEmails(
        parsedUser.marketingEmails !== undefined ? parsedUser.marketingEmails : true
      );
      setTicketAlerts(
        parsedUser.ticketAlerts !== undefined ? parsedUser.ticketAlerts : true
      );
      setTwoFactorEnabled(parsedUser.twoFactorEnabled || false);
    }
  }, []);

  const handleSave = () => {
    const existingUser = JSON.parse(localStorage.getItem("livelinkUser") || "{}");

    const updatedUser = {
      ...existingUser,
      fullName,
      email,
      username,
      phoneNumber,
      favoriteGenre,
      favoriteArtist,
      favoriteCity,
      profilePrivate,
      marketingEmails,
      ticketAlerts,
      twoFactorEnabled,
    };

    localStorage.setItem("livelinkUser", JSON.stringify(updatedUser));
    localStorage.setItem("loggedInUsername", username);
    localStorage.setItem("loggedInEmail", email);

    setMessage("Account changes saved successfully.");

    setTimeout(() => {
      router.push("/account/customer");
    }, 1000);
  };

  return (
    <main className="signin-page">
      <div className="top-bar">
        <Link href="/" className="logo">
          LiveLink Events
        </Link>
      </div>

      <div className="signin-container">
        <h1 className="signin-title">EDIT ACCOUNT</h1>
        <p className="required-note">
          Update your profile, contact details, preferences, and privacy settings
        </p>

        <div className="input-group">
          <label className="input-label" htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            className="input-box"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="input-box"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            className="input-box"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            className="input-box"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="favoriteGenre">
            Favorite Genre
          </label>
          <input
            id="favoriteGenre"
            className="input-box"
            type="text"
            value={favoriteGenre}
            onChange={(e) => setFavoriteGenre(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="favoriteArtist">
            Favorite Artist
          </label>
          <input
            id="favoriteArtist"
            className="input-box"
            type="text"
            value={favoriteArtist}
            onChange={(e) => setFavoriteArtist(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="favoriteCity">
            Preferred City
          </label>
          <input
            id="favoriteCity"
            className="input-box"
            type="text"
            value={favoriteCity}
            onChange={(e) => setFavoriteCity(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label className="input-label">
            <input
              type="checkbox"
              checked={profilePrivate}
              onChange={(e) => setProfilePrivate(e.target.checked)}
              style={{ marginRight: "10px" }}
            />
            Make profile private
          </label>
        </div>

        <div className="input-group">
          <label className="input-label">
            <input
              type="checkbox"
              checked={marketingEmails}
              onChange={(e) => setMarketingEmails(e.target.checked)}
              style={{ marginRight: "10px" }}
            />
            Receive marketing emails
          </label>
        </div>

        <div className="input-group">
          <label className="input-label">
            <input
              type="checkbox"
              checked={ticketAlerts}
              onChange={(e) => setTicketAlerts(e.target.checked)}
              style={{ marginRight: "10px" }}
            />
            Receive ticket alerts
          </label>
        </div>

        <div className="input-group">
          <label className="input-label">
            <input
              type="checkbox"
              checked={twoFactorEnabled}
              onChange={(e) => setTwoFactorEnabled(e.target.checked)}
              style={{ marginRight: "10px" }}
            />
            Enable two-factor authentication
          </label>
        </div>

        {message && (
          <p style={{ color: "green", marginBottom: "15px" }}>
            {message}
          </p>
        )}

        <div
          className="cta"
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button type="button" className="cta-btn" onClick={handleSave}>
            Save Changes
          </button>

          <button
            type="button"
            className="view-events-btn"
            onClick={() => router.push("/account/customer")}
          >
            Back to Account
          </button>
        </div>
      </div>
    </main>
  );
}