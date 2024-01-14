import "../styles/_about.scss"
import  image2 from  "../assets/Frame 75.png"
import { StarIcon } from "../assets/icon"





const AboutUs = ()=> {

    return (
        <div className="about">
           <div className="leftAbout">
             <img src={image2}  alt="About Seth"/>
           </div>

           <div className="rightAbout">
           <div className="starIconCon3">
            <StarIcon/>
           </div>
             <h2>ABOUT US</h2>
             <p>
                With founders who with a Nigerian heritage, our origins are deeply rooted in Africa. Our grit, hard work, culture, desire and strength of character are directly traceable to this origin.
                We understand first-hand the difference, opportunities and a proper education make. Our mission is to level the playing ground for African youth on the global field, one talent at a time.
                With this goal in mind, we leverage existing professional relationships to partner and provide accelerated learning and training, professional mentorship and career coaching to youth
                across Africa.
            </p>
            <button className="btn" >Read More</button>
           </div>
        </div>
    )
}



export  default AboutUs