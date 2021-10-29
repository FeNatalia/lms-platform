export default function CourseItem( {item} ) {
    const { description, title } = item;
    return (
        <section>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>View course</p>
        </section>
    )
}