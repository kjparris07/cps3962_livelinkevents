"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

import { searchArtists, searchStates, searchDates } from "@/app/actions";
import { Results } from "./globalComponents/Results";

import "../styles/main.css";

type ArtistFormData = {
  artist: string;
};

type StateFormData = {
  state: string;
};

type DateFormData = {
  date: string;
};

export default function Home() {
  const { register, handleSubmit } = useForm<any>();
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const onArtistSubmit: SubmitHandler<ArtistFormData> = async (data) => {
    setLoading(true);
    const fd = new FormData();
    fd.append("artist", data.artist);

    const events = await searchArtists(fd);
    setResults(events);
    setLoading(false);
  };

  const onStateSubmit: SubmitHandler<StateFormData> = async (data) => {
    setLoading(true);
    const fd = new FormData();
    fd.append("state", data.state);

    const events = await searchStates(fd);
    setResults(events);
    setLoading(false);
  };

  const onDateSubmit: SubmitHandler<DateFormData> = async (data) => {
    setLoading(true);
    const fd = new FormData();
    fd.append("date", data.date);

    const events = await searchDates(fd);
    setResults(events);
    setLoading(false);
  };

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

      <h1 id="tagline">
        YOUR NEXT CONCERT EXPERIENCE
        <br />
        STARTS HERE...
      </h1>

      <h2 id="search">Search by:</h2>

      <div className="container">
        <form onSubmit={handleSubmit(onStateSubmit)} className="search-card">
          <label htmlFor="state">
            <h3>Location</h3>
          </label>
          <select id="state" {...register("state")} className="input-box">
            <option value="">Select a state</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          <button className="babyButton" type="submit" disabled={loading}>
            {loading ? "..." : ">"}
          </button>
        </form>

        <form onSubmit={handleSubmit(onDateSubmit)} className="search-card">
          <label htmlFor="date">
            <h3>Date</h3>
          </label>
          <input id="date" type="date" {...register("date")} className="input-box" />
          <button className="babyButton" type="submit" disabled={loading}>
            {loading ? "..." : ">"}
          </button>
        </form>

        <form onSubmit={handleSubmit(onArtistSubmit)} className="search-card">
          <label htmlFor="artist">
            <h3>Artist</h3>
          </label>
          <input
            id="artist"
            type="text"
            placeholder="Search by artist name"
            {...register("artist")}
            className="input-box"
          />
          <button className="babyButton" type="submit" disabled={loading}>
            {loading ? "..." : ">"}
          </button>
        </form>
      </div>

      <div id="results">
        <Results results={results} />
      </div>

      <div className="action-row">
        <Link href="/events" className="view-events-btn">
          View All Events
        </Link>

        <Link href="/membership" className="premium-box">
          Unlock Premium Access
        </Link>
      </div>
    </main>
  );
}