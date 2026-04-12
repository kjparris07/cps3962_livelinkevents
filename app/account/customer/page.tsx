"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "../../../styles/main.css";
import "../../../styles/signin.css";
import "../../../styles/account.css";

type UserData = {
  fullName?: string;
  email?: string;
  username?: string;
  phoneNumber?: string;
  membershipPlan?: string;
  favoriteGenre?: string;
  favoriteArtist?: string;
  favoriteCity?: string;
  ticketAlerts?: boolean;
  marketingEmails?: boolean;
  profilePrivate?: boolean;
};

export default function CustomerAccountPage() {
  const [user, setUser] = useState<UserData>({
    fullName: "",
    email: "",
    username: "",
    phoneNumber: "",
    membershipPlan: "Basic Free Membership",
    favoriteGenre: "Pop",
    favoriteArtist: "None selected",
    favoriteCity: "New York, NY",
    ticketAlerts: true,
    marketingEmails: true,
    profilePrivate: false,
  });

  useEffect(() => {
    const savedUser = localStorage.getItem("livelinkUser");

    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser({
        fullName: parsedUser.fullName || "",
        email: parsedUser.email || "",
        username: parsedUser.username || "",
        phoneNumber: parsedUser.phoneNumber || "Not added",
        membershipPlan: parsedUser.membershipPlan || "Basic Free Membership",
        favoriteGenre: parsedUser.favoriteGenre || "Pop",
        favoriteArtist: parsedUser.favoriteArtist || "None selected",
        favoriteCity: parsedUser.favoriteCity || "New York, NY",
        ticketAlerts:
          parsedUser.ticketAlerts !== undefined ? parsedUser.ticketAlerts : true,
        marketingEmails:
          parsedUser.marketingEmails !== undefined
            ? parsedUser.marketingEmails
            : true,
        profilePrivate:
          parsedUser.profilePrivate !== undefined
            ? parsedUser.profilePrivate
            : false,
      });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUsername");
    localStorage.removeItem("loggedInEmail");
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
          <p className="account-subheading">My Account</p>
          <h1 className="account-title-main">
            Welcome back{user.username ? `, ${user.username}` : ""}!
          </h1>
          <p className="account-description">
            Manage your profile, tickets, membership, and preferences all in one
            place.
          </p>
        </div>

        <div className="account-grid">
          <div className="account-card">
            <h2>Profile Information</h2>
            <p>
              <strong>Full Name:</strong> {user.fullName || "Not added"}
            </p>
            <p>
              <strong>Email:</strong> {user.email || "Not added"}
            </p>
            <p>
              <strong>Username:</strong> {user.username || "Not added"}
            </p>
            <p>
              <strong>Phone Number:</strong> {user.phoneNumber || "Not added"}
            </p>

            <div className="account-card-actions">
              <Link href="/account/customer/edit" className="account-primary-btn">
                Edit Profile
              </Link>
            </div>
          </div>

          <div className="account-card">
            <h2>Membership</h2>
            <p>
              <strong>Current Plan:</strong> {user.membershipPlan}
            </p>
            <p>
              Enjoy early access opportunities, event alerts, and account tools
              based on your plan.
            </p>

            <div className="account-card-actions">
              <Link href="/membership" className="account-primary-btn">
                Manage Membership
              </Link>
            </div>
          </div>

          <div className="account-card">
            <h2>Upcoming Tickets</h2>
            <p>
              <strong>Next Event:</strong> Summer Lights Festival
            </p>
            <p>
              <strong>Date:</strong> August 17, 2026
            </p>
            <p>
              <strong>Location:</strong> Newark, NJ
            </p>
            <p>
              <strong>Status:</strong> Ticket Confirmed
            </p>

            <div className="account-card-actions">
              <Link href="/events" className="account-primary-btn">
                View Events
              </Link>
            </div>
          </div>

          <div className="account-card">
            <h2>Saved Preferences</h2>
            <p>
              <strong>Favorite Genre:</strong> {user.favoriteGenre}
            </p>
            <p>
              <strong>Favorite Artist:</strong> {user.favoriteArtist}
            </p>
            <p>
              <strong>Preferred City:</strong> {user.favoriteCity}
            </p>

            <div className="account-card-actions">
              <Link href="/account/customer/edit" className="account-primary-btn">
                Update Preferences
              </Link>
            </div>
          </div>

          <div className="account-card">
            <h2>Notifications & Privacy</h2>
            <p>
              <strong>Ticket Alerts:</strong>{" "}
              {user.ticketAlerts ? "Enabled" : "Disabled"}
            </p>
            <p>
              <strong>Marketing Emails:</strong>{" "}
              {user.marketingEmails ? "Enabled" : "Disabled"}
            </p>
            <p>
              <strong>Profile Visibility:</strong>{" "}
              {user.profilePrivate ? "Private" : "Public"}
            </p>

            <div className="account-card-actions">
              <Link href="/account/customer/edit" className="account-primary-btn">
                Edit Settings
              </Link>
            </div>
          </div>

          <div className="account-card">
            <h2>Account Actions</h2>
            <p>Need to update your information or remove your account?</p>

            <div className="account-card-actions stacked-actions">
              <Link href="/account/customer/edit" className="account-primary-btn">
                Edit Account
              </Link>

              <Link
                href="/account/customer/delete"
                className="account-secondary-btn"
              >
                Delete Account
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