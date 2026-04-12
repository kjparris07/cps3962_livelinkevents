"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { logIn } from "../actions";

import "../../styles/signin.css";

type SignInFormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();
  const [, setCookie] = useCookies(["email"]);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<SignInFormData>();

  const onSubmit = async (data: SignInFormData) => {
    setLoading(true);

    const fd = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      fd.append(key, value);
    });

    const result = await logIn(fd);

    if (result?.success) {
      setCookie("email", data.email);
      router.push("/account/organizer");
    }

    setLoading(false);
  };

  return (
    <main className="signin-page">
      <div className="signin-container">
        <div className="top-bar">
          <Link href="/" className="logo">
            LiveLink Events
          </Link>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="signin-title">LOG IN</div>
          <div className="required-note">* Indicates required field</div>

          <div className="input-group">
            <label className="input-label" htmlFor="email">
              Email*
            </label>
            <input
              id="email"
              type="email"
              className="input-box"
              {...register("email", { required: true })}
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
              {...register("password", { required: true })}
            />
          </div>

          <div className="cta">
            <button type="submit" className="cta-btn" disabled={loading}>
              {loading ? "Logging In..." : "Log In"}
            </button>
          </div>

          <div className="footer-text">
            Or
            <br />
            <Link href="/signup">
              <span>Sign Up</span>
            </Link>{" "}
            to create an account
          </div>
        </form>
      </div>
    </main>
  );
}