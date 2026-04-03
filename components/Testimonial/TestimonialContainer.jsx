import Testimonial from "./Testimonial";

export default function TestimonialContainer() {
    return (
        <div className="testimonial-container">
            <h1>Testimonials</h1>
            <div className="testimonial-row">
                <h2>With Pic</h2>
                <Testimonial display="testimonial-web with-pic"/>
                <Testimonial display="testimonial-mobile with-pic" />
            </div>
            <div className="testimonial-row">
                <h2>No Pic</h2>
                <Testimonial display="testimonial-web no-pic"/>
                <Testimonial display="testimonial-mobile no-pic" />
            </div>
        </div>
    )
}