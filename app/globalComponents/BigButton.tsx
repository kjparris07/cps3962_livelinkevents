export default function Button({ content, link }) {
  return (
    <a href={link} className="membership-btn">
      {content}
    </a>
  );
}