import success from "../assets/success.png"
import warning from "../assets/warning.png"
import info from "../assets/information.png"
import error from "../assets/error.png"

const popups = [
    {
        label: "Success",
        content: "Your work has been saved",
        icon: "circle-check",
        color: "green",
        image: success
    },
    {
        label: "Warning",
        content: "A network error was detected",
        icon: "circle-exclamation",
        color: "yellow",
        image: warning
    },
    {
        label: "Information",
        content: "Please read updated information",
        icon: "circle-info",
        color: "blue",
        image: info
    },
    {
        label: "Error",
        content: "Please re-save your work again",
        icon: "circle-xmark",
        color: "red",
        image: error
    },
]

export { popups }