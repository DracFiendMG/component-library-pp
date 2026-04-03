import BadgeContainer from "./components/Badge/BadgeContainer";
import BannerContainer from "./components/Banner/BannerContainer";
import CardContainer from "./components/Card/CardContainer";
import Footer from "./components/Footer/Footer";
import TestimonialContainer from "./components/Testimonial/TestimonialContainer";
import TooltipContainer from "./components/Tooltip/TooltipContainer";


export default function App() {
    return (
        <>
            <TooltipContainer />
            <BadgeContainer />
            <BannerContainer />
            <CardContainer />
            <TestimonialContainer />
            <Footer />
        </>
    )
}