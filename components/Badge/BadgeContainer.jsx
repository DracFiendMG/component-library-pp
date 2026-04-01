import Badge from "./Badge";

export default function BadgeContainer() {
    // static values
    const colors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"]

    // derived values
    const squareBadges = colors.map(color => {
        return <Badge key={`square-${color}`} label="Badge" color={color} type="square" />
    })

    const pillBadges = colors.map(color => {
        return <Badge key={`pill-${color}`} label="Badge" color={color} type="pill" />
    })

    return (
        <div className="badge-container">
            <h1>Badges</h1>
            <div className="flex square">
                <p>SQUARE</p>
                <div className="badge-row">
                    { squareBadges }
                </div>
            </div>
            <div className="flex pill">
                <p>PILL</p>
                <div className="badge-row">
                    { pillBadges }
                </div>
            </div>
        </div>
    )
}