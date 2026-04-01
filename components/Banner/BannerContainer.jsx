import { banners } from "../../data/banners";
import Banner from "./Banner";
import BannerRows from "./BannerRows";

export default function BannerContainer() {
    const bannerRows = banners.map(banner => {
        return (
            <BannerRows>
                <p>{ banner.label }</p>
                <Banner title={ banner.title } content={ banner.content } icon={ banner.icon } color={ banner.color } />
                <Banner title={ banner.title } icon={ banner.icon } color={ banner.color } />
            </BannerRows>
        )
    })

    return (
        <div className="banners-container">
            <h1>Banners</h1>
            <div className="banner-header">
                <p>MULTI LINE</p>
                <p>SINGLE LINE</p>
            </div>
            <div className="banners">
                { bannerRows }
            </div>
        </div>
    )
}