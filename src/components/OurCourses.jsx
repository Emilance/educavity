import "../styles/_ourCourses.scss"
import AIimg from "../assets/courses/Artificial intelligence.png"
import Webimg from "../assets/courses/Worldwide.png"
import Designimg from "../assets/courses/Vector.png"
import Marketingimg from "../assets/courses/Marketing.png"






const OurCourses = () => {

    return (
      <div className="ourCourses">
          <h2>Our Service</h2>
          <p>{'We provide a one-stop service for you.We understand the nuances of operating in your region and we’ll ensure the nature of our services fit your box perfectly.'}</p>
      
          <div className="courseCardCon">
            <div className="courseCard">
               <div className="courseIcon">
                 <img src={Webimg}  alt="seth Web"/>
               </div>
               <p>Full - Stack Development</p>
            </div> 

            <div className="courseCard">
               <div className="courseIcon">
                 <img src={AIimg}  alt="seth Web"/>
               </div>
               <p>Artficial Intelligence</p>
            </div> 

            <div className="courseCard">
               <div className="courseIcon">
                 <img src={Designimg}  alt="seth Web"/>
               </div>
               <p>Web Design and Graphics</p>
            </div> 
            <div className="courseCard">
               <div className="courseIcon">
                 <img src={Marketingimg}  alt="seth Web"/>
               </div>
               <p>Social Media Marketing</p>
            </div> 

          
          </div>
      </div>
    )
}




export default OurCourses