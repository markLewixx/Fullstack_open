const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part, i) => (
                <p key={part.id}>
                    {part.name} {part.exercises}
                </p>
            ))}
        </div>
    )
}
export default Content 