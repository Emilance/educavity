import "../styles/_ourServices.scss" 
import image1 from "../assets/services/Frame 60.png"
import image2 from "../assets/services/Frame 61.png"
import image3 from "../assets/services/Frame 62.png"



const OurService = () => {

    return (
        <div className="ourServices">
            <h2>OUR SERVICE</h2>
          <p>{'We provide a one-stop service for you.We understand the nuances of operating in your region and we’ll ensure the nature of our services fit your box perfectly.'}</p>
      
     
          <div className="serviceCardCon">
             <div className="serviceCard">
                 <div className="ServiceImg">
                   <img src={image1}  alt="Seth Service"/>
                </div>
                <h2>Assess</h2>
                <p>We will set the criteria and assess over 20 partners and ensure the best matches for your Initiative are chosen.</p>
             </div>

             <div className="serviceCard">
                 <div className="ServiceImg">
                   <img src={image2}  alt="Seth Service"/>
                </div>
                <h2>Logistics</h2>
                <p>We will employ the chosen partnerships directly and handle all contractual logistics.</p>
             </div>


             <div className="serviceCard">
                 <div className="ServiceImg">
                   <img src={image3}  alt="Seth Service"/>
                </div>
                <h2>Deploy</h2>
                <p>We will manage the complete deployment of marketing, registration and training online.</p>
             </div>
          </div>


        </div>
    )
}


export default OurService