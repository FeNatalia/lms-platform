export default function ContentItem({ item }) {
  const { title, photo, fact1, fact2, fact3 } = item;
  const photoObject = require(`assets/pictures/${photo}`);
  const photoURL = photoObject.default;

  return (
    <section className="content-item">
      <img src={photoURL} alt={photo} />
      <h3>{title}</h3>
      <p>{fact1}</p>
      <p>{fact2}</p>
      <p>{fact3}</p>
    </section>
  );
}