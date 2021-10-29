export default function CourseItem( {item} ) {
    const { description, title, imageURL } = item;
    return (
        <section className="course-item">
            <img id="course-image" src={imageURL} alt="Category thumbnail" />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </section>
    )
}