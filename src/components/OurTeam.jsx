import "../styles/_team.scss" 
import team1 from "../assets/team/Frame 63.png"
import team2 from "../assets/team/Frame 64.png"
import team3 from "../assets/team/Frame 65.png"
import team4 from "../assets/team/Frame 66.png"


const OurTeam = () => {

    return (
        <div id="team" className="ourTeam">
            <h2>OUR TEAM</h2>
          <p>{"Let's meet our team members who are professional and have rich experiences."}</p>
      
     
          <div className="teamCardCon">
             <div className="teamCard">
                 <div className="teamImg">
                   <img src={team1}  alt="Seth Team Members"/>
                </div>
                <h2>Mayor Joy</h2>
                <p>Founder</p>
             </div>

             <div className="teamCard">
                 <div className="teamImg">
                   <img src={team2}  alt="Seth Team Members"/>
                </div>
                <h2>Putin Cole</h2>
                <p>Founder</p>
             </div>

             <div className="teamCard">
                 <div className="teamImg">
                   <img src={team3}  alt="Seth Team Members"/>
                </div>
                <h2>GIdris Wells</h2>
                <p>Photographer</p>
             </div>


             <div className="teamCard">
                 <div className="teamImg">
                   <img src={team4}  alt="Seth Team Members"/>
                </div>
                <h2>Bet Mytan</h2>
                <p>Creative Manager</p>
             </div>
          
          </div>


        </div>
    )
}


export default OurTeam