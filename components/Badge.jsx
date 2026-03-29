export default function Badge({ label, color, type }) {
    const styles = {
        backgroundColor: `var(--${color})`,
        color: `var(--font-${color})`,
        borderRadius: `var(--${type})`
    }

    return (
        <div className="badge" style={styles}>
            { label }
        </div>
    )
}