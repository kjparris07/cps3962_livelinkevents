import LoginBar from "./LoginBar";

export default async function Layout() {
  return (
    <div className="top-bar">
      <span>
        <a href="/" className="logo">
          LiveLink Events
        </a>
      </span>
      <span>
        {await LoginBar()}
      </span>  
    </div>
  );
}
