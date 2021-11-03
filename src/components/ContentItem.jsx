export default function ContentItem({ item }) {
  // I do not know what ContentItem is, but sounds like fact1, fact2 and fact3 should be inside an array,
  // and then look over using a map function.
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
