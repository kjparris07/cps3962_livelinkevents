"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "../../../styles/main.css";
import "../../../styles/signin.css";
import "../../../styles/account.css";

type OrganizerData = {
  fullName?: string;
  email?: string;
  username?: string;
  phoneNumber?: string;
  organizationType?: string;
  website?: string;
  instagramHandle?: string;
  artistGenre?: string;
  verifiedOrganizer?: boolean;
  eventsPublished?: number;
  monthlySales?: string;
  payoutMethod?: string;
  marketingEmails?: boolean;
  twoFactorEnabled?: boolean;
};

export default function OrganizerAccountPage() {
  const [organizer, setOrganizer] = useState<OrganizerData>({
    fullName: "",
    email: "",
    username: "",
    phoneNumber: "",
    organizationType: "Artist / Organizer",
    website: "Not added",
    instagramHandle: "Not added",
    artistGenre: "Not added",
    verifiedOrganizer: false,
    eventsPublished: 0,
    monthlySales: "$0.00",
    payoutMethod: "Not added",
    marketingEmails: true,
    twoFactorEnabled: false,
  });

  useEffect(() => {
    const savedUser = localStorage.getItem("livelinkUser");

    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setOrganizer({
        fullName: parsedUser.fullName || "",
        email: parsedUser.email || "",
        username: parsedUser.username || "",
        phoneNumber: parsedUser.phoneNumber || "Not added",
        organizationType: parsedUser.organizationType || "Artist / Organizer",
        website: parsedUser.website || "Not added",
        instagramHandle: parsedUser.instagramHandle || "Not added",
        artistGenre: parsedUser.artistGenre || "Not added",
        verifiedOrganizer:
          parsedUser.verifiedOrganizer !== undefined
            ? parsedUser.verifiedOrganizer
            : false,
        eventsPublished: parsedUser.eventsPublished || 0,
        monthlySales: parsedUser.monthlySales || "$0.00",
        payoutMethod: parsedUser.payoutMethod || "Not added",
        marketingEmails:
          parsedUser.marketingEmails !== undefined
            ? parsedUser.marketingEmails
            : true,
        twoFactorEnabled:
          parsedUser.twoFactorEnabled !== undefined
            ? parsedUser.twoFactorEnabled
            : false,
      });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUsername");
    localStorage.removeItem("loggedInEmail");
    localStorage.removeItem("loggedInRole");
    window.location.href = "/login";
  };

  return (
    <main className="account-page">
      <div className="top-bar">
        <Link href="/" className="logo">
          LiveLink Events
        </Link>
      </div>

      <section className="account-wrapper">
        <div className="account-header">
          <p className="account-subheading">Organizer Dashboard</p>
          <h1 className="account-title-main">
            Welcome back{organizer.username ? `, ${organizer.username}` : ""}!
          </h1>
          <p className="account-description">
            Manage your artist or company profile, event listings, media, sales,
            and organizer settings.
          </p>
        </div>

        <div className="account-grid">
          <div className="account-card">
            <h2>Organizer Profile</h2>
            <p>
              <strong>Name:</strong> {organizer.fullName || "Not added"}
            </p>
            <p>
              <strong>Email:</strong> {organizer.email || "Not added"}
            </p>
            <p>
              <strong>Username:</strong> {organizer.username || "Not added"}
            </p>
            <p>
              <strong>Business Phone:</strong> {organizer.phoneNumber || "Not added"}
            </p>
            <p>
              <strong>Role Type:</strong> {organizer.organizationType}
            </p>

            <div className="account-card-actions">
              <Link href="/account/organizer/edit" className="account-primary-btn">
                Edit Organizer Profile
              </Link>
            </div>
          </div>

          <div className="account-card">
            <h2>Organizer Status</h2>
            <p>
              <strong>Verification:</strong>{" "}
              {organizer.verifiedOrganizer ? "Verified" : "Pending Verification"}
            </p>
            <p>
              <strong>Payout Method:</strong> {organizer.payoutMethod}
            </p>
            <p>
              <strong>Monthly Sales:</strong> {organizer.monthlySales}
            </p>

            <div className="account-card-actions">
              <button className="account-primary-btn">Update Payout Info</button>
            </div>
          </div>

          <div className="account-card">
            <h2>Event Management</h2>
            <p>
              <strong>Published Events:</strong> {organizer.eventsPublished}
            </p>
            <p>
              Create, edit, and manage ticketed events listed through LiveLink.
            </p>

            <div className="account-card-actions stacked-actions">
              <button className="account-primary-btn">Create New Event</button>
              <button className="account-secondary-btn">Manage Events</button>
            </div>
          </div>

          <div className="account-card">
            <h2>Artist / Brand Media</h2>
            <p>
              <strong>Website:</strong> {organizer.website}
            </p>
            <p>
              <strong>Instagram:</strong> {organizer.instagramHandle}
            </p>
            <p>
              <strong>Primary Genre:</strong> {organizer.artistGenre}
            </p>

            <div className="account-card-actions stacked-actions">
              <button className="account-primary-btn">Upload Promo Media</button>
              <button className="account-secondary-btn">Edit Artist Info</button>
            </div>
          </div>

          <div className="account-card">
            <h2>Sales & Audience Insights</h2>
            <p>
              <strong>Tickets Sold This Month:</strong> 128
            </p>
            <p>
              <strong>Top Performing City:</strong> Newark, NJ
            </p>
            <p>
              <strong>Most Interested Audience Genre:</strong> Pop / R&B
            </p>

            <div className="account-card-actions">
              <button className="account-primary-btn">View Sales Details</button>
            </div>
          </div>

          <div className="account-card">
            <h2>Account Actions</h2>
            <p>
              Manage account security, organizer settings, or remove your organizer
              profile.
            </p>

            <div className="account-card-actions stacked-actions">
              <Link href="/account/organizer/edit" className="account-primary-btn">
                Edit Account
              </Link>

              <Link
                href="/account/organizer/delete"
                className="account-secondary-btn"
              >
                Delete Organizer Account
              </Link>

              <button
                type="button"
                className="account-primary-btn"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}