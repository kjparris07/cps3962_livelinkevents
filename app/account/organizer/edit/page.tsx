"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../../../../styles/main.css";
import "../../../../styles/signin.css";

export default function EditOrganizer() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [organizationType, setOrganizationType] = useState("Artist / Organizer");
  const [website, setWebsite] = useState("");
  const [instagramHandle, setInstagramHandle] = useState("");
  const [artistGenre, setArtistGenre] = useState("");
  const [marketingEmails, setMarketingEmails] = useState(true);
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
      setOrganizationType(parsedUser.organizationType || "Artist / Organizer");
      setWebsite(parsedUser.website || "");
      setInstagramHandle(parsedUser.instagramHandle || "");
      setArtistGenre(parsedUser.artistGenre || "");
      setMarketingEmails(
        parsedUser.marketingEmails !== undefined ? parsedUser.marketingEmails : true
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
      organizationType,
      website,
      instagramHandle,
      artistGenre,
      marketingEmails,
      twoFactorEnabled,
    };

    localStorage.setItem("livelinkUser", JSON.stringify(updatedUser));
    localStorage.setItem("loggedInUsername", username);
    localStorage.setItem("loggedInEmail", email);
    localStorage.setItem("loggedInRole", "organizer");

    setMessage("Organizer profile updated successfully.");

    setTimeout(() => {
      router.push("/account/organizer");
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
        <h1 className="signin-title">EDIT ORGANIZER PROFILE</h1>
        <p className="required-note">
          Update your organizer information, artist profile, and contact details
        </p>

        <div className="input-group">
          <label className="input-label" htmlFor="fullName">
            Organizer / Artist Name
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
            Business Email
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
            Business Phone Number
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
          <label className="input-label" htmlFor="organizationType">
            Organizer Type
          </label>
          <select
            id="organizationType"
            className="input-box"
            value={organizationType}
            onChange={(e) => setOrganizationType(e.target.value)}
          >
            <option value="Artist / Organizer">Artist / Organizer</option>
            <option value="Event Company">Event Company</option>
            <option value="Venue Partner">Venue Partner</option>
            <option value="Promoter">Promoter</option>
            <option value="Management Team">Management Team</option>
          </select>
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="website">
            Website
          </label>
          <input
            id="website"
            className="input-box"
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="instagramHandle">
            Instagram Handle
          </label>
          <input
            id="instagramHandle"
            className="input-box"
            type="text"
            value={instagramHandle}
            onChange={(e) => setInstagramHandle(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="artistGenre">
            Primary Genre
          </label>
          <input
            id="artistGenre"
            className="input-box"
            type="text"
            value={artistGenre}
            onChange={(e) => setArtistGenre(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label className="input-label">
            <input
              type="checkbox"
              checked={marketingEmails}
              onChange={(e) => setMarketingEmails(e.target.checked)}
              style={{ marginRight: "10px" }}
            />
            Receive LiveLink organizer emails
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
            onClick={() => router.push("/account/organizer")}
          >
            Back to Account
          </button>
        </div>
      </div>
    </main>
  );
}