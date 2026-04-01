import Card from "./Card";

export default function CardContainer() {
    return (
        <div className="card-container">
            <h1>Cards</h1>
            <div className="cards">
                <Card />
                <Card />
            </div>
        </div>
    )
}