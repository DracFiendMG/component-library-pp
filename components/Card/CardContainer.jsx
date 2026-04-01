import Card from "./Card";

export default function CardContainer() {
    return (
        <div className="card-container">
            <h1>Cards</h1>
            <div className="cards">
                <Card />
                <p className="card-hover">Hover</p>
                <Card />
            </div>
        </div>
    )
}