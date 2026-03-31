import { cookies } from "next/headers";

export default async function LoginBar() {
  const cookieStore = await cookies();
  const hasUsername = cookieStore.has("username");

  return (
    <button className="auth-btn">
      <a href={hasUsername ? "/account" : "/login"}>
        {hasUsername ? "Account" : "Sign Up / Log In"}
      </a>
    </button>
  );
}