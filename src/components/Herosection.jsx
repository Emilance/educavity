
import "../styles/_hero.scss"
import centerImg from "../assets/hero/Ellipse 84.png"
import topImg1 from "../assets/hero/Rectangle 203.png"
import topImg2 from "../assets/hero/Rectangle 200.png"
import bottomImg1 from "../assets/hero/Rectangle 204.png"
import bottomImg2 from "../assets/hero/Rectangle 205.png"
import { DawnIcon, StarIcon } from "../assets/icon"





const HeroSetion = ()=> {
   return (
    <div className="hero">
        <div className="starIconCon1">
            <StarIcon/>
        </div>
        <div className="starIconCon2">
            <StarIcon/>
        </div>
        <div className="rightHero">
            <h1>
                ELEVATING THE AFRICAN YOUTHS THROUGH 
               WORLD CLASS EDUCATION.
            </h1>
            <p>
                By arming African youth with technological 
                skills, cultivating a supportive network,
                and expanding employment avenues.
            </p>
            <button className="btn" >Learn More</button>
        </div>
        <div className="leftHero">
            <div className="topImgCon">
                    <div className="divCon">
                    <img src={topImg1} alt="Seth Dedan Solution " />
                    </div>
                    <div className="divCon">
                    <img src={topImg2} alt="Seth Dedan Solution " />
                    </div>
            </div>
            <div className="middleImgCon">
                <img src={centerImg} alt="Seth Dedan Solution " />
            </div>
            <div className="bottomImgCon">
                    <div className="divCon">
                    <img src={bottomImg1} alt="Seth Dedan Solution " />
                    </div>
                    <div className="divCon">
                    <img src={bottomImg2} alt="Seth Dedan Solution " />
                    </div>
            </div>
            <div className="dawnIconCon">
                <DawnIcon/>
            </div>
        </div>
       
    </div>
   )
}

export default HeroSetion