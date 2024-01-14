import { GoogleIcon, MicrosoftIcon, ShopifyIcon, SpotifyIcon, UberIcon } from "../assets/icon"
import "../styles/_hero.scss"


const OurPartner = () => {

    return(
        <div className="ourPartner">
            <h2>OUR PARTNERS</h2>
            <div className="iconsContainer">
                <div className="partnerIcon">
                <SpotifyIcon/>
                </div>
                <div className="partnerIcon">
                <GoogleIcon/>
                </div>
                <div className="partnerIcon">
                <UberIcon/>
                </div>
                <div className="partnerIcon">
                <MicrosoftIcon/>
                </div>
                <div className="partnerIcon">
                <ShopifyIcon/>
                </div>
            </div>
        </div>
    )
}


export default OurPartner