import "../styles/_team.scss" 
import team1 from "../assets/team/Frame 63.png"
import team2 from "../assets/team/Frame 64.png"
import team3 from "../assets/team/Frame 65.png"
import team4 from "../assets/team/Frame 66.png"


const OurTeam = () => {

    return (
        <div className="ourTeam">
            <h2>OUR TEAM</h2>
          <p>{"Let's meet our team members who are professional and have rich experiences."}</p>
      
     
          <div className="teamCardCon">
             <div className="teamCard">
                 <div className="teamImg">
                   <img src={team1}  alt="Seth Team Members"/>
                </div>
                <h2>Tolu Coker</h2>
                <p>Founder</p>
             </div>

             <div className="teamCard">
                 <div className="teamImg">
                   <img src={team2}  alt="Seth Team Members"/>
                </div>
                <h2>May Assam</h2>
                <p>Founder</p>
             </div>

             <div className="teamCard">
                 <div className="teamImg">
                   <img src={team3}  alt="Seth Team Members"/>
                </div>
                <h2>George Wells</h2>
                <p>Photographer</p>
             </div>


             <div className="teamCard">
                 <div className="teamImg">
                   <img src={team4}  alt="Seth Team Members"/>
                </div>
                <h2>Fannie Schoen</h2>
                <p>Creative Manager</p>
             </div>
          
          </div>


        </div>
    )
}


export default OurTeam