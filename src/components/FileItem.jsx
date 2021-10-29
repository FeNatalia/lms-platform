export default function FileItem({ item, to }) {
  const { title, linkURL } = item;

  return (
    <article className="dish-preview">
      <p>{title}</p>
      <a href={linkURL} target="_blank" rel="noreferrer">Visit Website</a>
    </article>
  );
}