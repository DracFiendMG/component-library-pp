export default function Banner({ title, content, icon, color }) {
    const styles = {
        backgroundColor: `var(--green)`,
        color: `var(--font-green)`
    }

    return (
        <div className="banner" style={styles}>
            <i class={`fa-solid fa-${icon}`}></i>
            <div>
                <p>{title}</p>
                <p>{content}</p>
            </div>
        </div>
    )
}