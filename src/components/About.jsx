import "../styles/_about.scss"
import  image2 from  "../assets/Frame 75.png"
import { StarIcon } from "../assets/icon"





const AboutUs = ()=> {

    return (
        <div id="about" className="about">
           <div className="leftAbout">
             <img src={image2}  alt="About Seth"/>
           </div>

           <div className="rightAbout">
           <div className="starIconCon3">
            <StarIcon/>
           </div>
             <h2>ABOUT US</h2>
             <p>
               
                With creators who hail from Nigerian heritage, our 
                beginnings are firmly embedded in Africa. Our resilience, dedication, cultural richness, ambition, and fortitude are intricately tied to this heritage. We intimately grasp the transformative power of education and opportunities firsthand. Our aim is to dismantle barriers for African youth worldwide, empowering 
                them one talent at a time. To achieve this vision, we harness established professional networks to foster partnerships and offer expedited learning, mentorship, and career
                guidance to young individuals throughout Africa.
            </p>
            <button className="btn" >Read More</button>
           </div>
        </div>
    )
}



export  default AboutUs