export default function Banner({ title, content, icon, color }) {
    const styles = {
        backgroundColor: `var(--${color})`,
        color: `var(--font-${color})`
    }

    const iconStyle = {
        color: `var(--icon-${icon})`
    }

    return (
        <div className="banner" style={styles}>
            <i className={`fa-solid fa-${icon}`} style={iconStyle}></i>
            <div>
                <p>{title}</p>
                <p>{content}</p>
            </div>
        </div>
    )
}