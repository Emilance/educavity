import { TickIcon } from "../assets/icon2"
import "../styles/_ourPricing.scss" 



const OurPricing = () => {

    return (
        <div id="pricing" className="ourPricing">
            <h2>OUR PRICING</h2>
          <p>{"These prices are based on tuiton fees per student."}</p>
      
     
          <div className="pricingCardCon">
                <div className="pricingCard">
                    <p>Artificial Intelligence</p> 
                    <h2>$119</h2>
                <div className="package">
                        <p >
                        <TickIcon/>
                        <span >Beginner Class on ChatGPT</span>    
                        </p>   
                        <p >
                        <TickIcon/>
                        <span >Beginner Class on ChatGPT</span>    
                        </p>  
                        <p >
                        <TickIcon/>
                        <span >Beginner Class on ChatGPT</span>    
                        </p>  
                        <p >
                        <TickIcon/>
                        <span >Beginner Class on ChatGPT</span>    
                        </p>  
                    </div>
                    
                </div>

            

             <div className="pricingCard">
                 <p>Full Stack Development</p> 
                 <h2>$200</h2>
               <div className="package">
                    <p >
                       <TickIcon/>
                       <span >How to setup a code</span>    
                    </p>   
                    <p >
                       <TickIcon/>
                       <span >Beginner Class on Frontend Development</span>    
                    </p>  
                    <p >
                       <TickIcon/>
                       <span >Beginner Class on Backend</span>    
                    </p>  
                 
                </div>
                
             </div>

             <div className="pricingCard">
                 <p>A Web Design and Graphic Design</p> 
                 <h2>$310</h2>
               <div className="package">
                    <p >
                       <TickIcon/>
                       <span >Introduction to Figma</span>    
                    </p>   
                    <p >
                       <TickIcon/>
                       <span >Introduction to Photoshop</span>    
                    </p>  
                    <p >
                       <TickIcon/>
                       <span >Introduction to Illustrator</span>    
                    </p>  

                </div>
                
             </div>


         
          </div>

           <button className="btn">Learn More</button>
        </div>
    )
}


export default OurPricing