import BadgeContainer from "./components/Badge/BadgeContainer";
import BannerContainer from "./components/Banner/BannerContainer";
import CardContainer from "./components/Card/CardContainer";
import Footer from "./components/Footer/Footer";
import TestimonialContainer from "./components/Testimonial/TestimonialContainer";
import ToastContainer from "./components/Toast/ToastContainer";
import TooltipContainer from "./components/Tooltip/TooltipContainer";


export default function App() {
    return (
        <>
            <BadgeContainer />
            <BannerContainer />
            <CardContainer />
            <TestimonialContainer />
            <TooltipContainer />
            <ToastContainer />
            <Footer />
        </>
    )
}