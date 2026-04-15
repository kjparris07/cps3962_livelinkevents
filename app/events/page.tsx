import Link from "next/link";
import { Results } from "../globalComponents/Results";

import "@/styles/main.css";
import "@/styles/events.css";

export default async function Events() {
  let results = await Results("all", new FormData);
  return (
    <main>
      <div className="top-bar">
        <Link href="/" className="logo">
          LiveLink Events
        </Link>

        <Link href="/login" className="avatar-hover" aria-label="Sign Up / Log In">
          <span className="avatar-circle">👤</span>
          <span className="avatar-label">Sign Up / Log In</span>
        </Link>
      </div>

      <div className="container">
        <h1 className="title">ALL EVENTS</h1>
        {results}
      </div>
    </main>
  );
}