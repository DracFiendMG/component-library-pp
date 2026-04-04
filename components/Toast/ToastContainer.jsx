import Toast from "./Toast";
import { popups } from "../../data/popups";

export default function ToastContainer() {
    const popupsEl = popups.map(popup => {
        return (
            <Toast label={popup.label} content={popup.content} icon={popup.icon} image={popup.image} color={popup.color} />
        )
    })

    return (
        <div className="toast-container">
            <h1>TOAST POPUPS</h1>
            <div className="toasts">
                { popupsEl }
            </div>
        </div>
    )
}