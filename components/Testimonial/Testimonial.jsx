import profile from "../../assets/profile.jpg"
import logo from "../../assets/logo.png"

export default function Testimonial({ display }) {
    const imageSrc = display.includes('no-pic') ? logo : profile
    let imageClass = 'profile'
    if (imageSrc === logo) {
        imageClass = 'logo'
    }

    return (
        <div className={`${display}`}>
            {/* { !display.includes('no-pic') && <img src={profile} alt="profile" /> } */}
            <img className={imageClass} src={imageSrc} alt="profile" />
            <div className="testimonial-content">
                { !display.includes('no-pic') && <i class="fa-solid fa-quote-right"></i> }
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </p>
                <span className="name">May Andersons</span>
                <span>Workcation, CTO</span>
            </div>
        </div>
    )
}