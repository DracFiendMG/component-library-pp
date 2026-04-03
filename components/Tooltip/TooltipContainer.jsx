import Tooltip from "./Tooltip";
import TooltipRow from "./TooltipRow";

export default function TooltipContainer() {
    const colors = ["black", "blue", "pink", "green"]

    const tooltipRows = colors.map(color => {
        return (
            <TooltipRow>
                <Tooltip theme={color} />
                <Tooltip />
            </TooltipRow>
        )
    })
    return (
        <div className="tooltip-container">
            <h1 className="tooltip-header">TOOLTIP <span className="gray">TWO STYLES, BOLD AND LIGHT</span></h1>
            <div className="tooltips">
                { tooltipRows }
            </div>
        </div>
    )
}