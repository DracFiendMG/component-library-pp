export default function Toast({ label, content, icon, image, color }) {
    const labelStyles = {
        color: `var(--toast-title-${color})`
    }

    const contentStyles = {
        color: `var(--toast-content-${color})`
    }

    const iconStyles = {
        color: `var(--toast-icon-${color})`
    }

    return (
        <div className="toast">
            {/* <i className={`fa-regular fa-${icon}`} style={iconStyles}></i> */}
            <img src={image} />
            <div className="toast-content">
                <p style={labelStyles}>{label}</p>
                <p style={contentStyles}>{content}</p>
            </div>
        </div>
    )
}