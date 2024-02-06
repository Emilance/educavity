
import "../styles/_header.scss"

const Header =() => {
    return (
        <div className="header">
           <div className="brand">
               <h1>Edu<span>Cav</span>ity</h1>
           </div>
          
                <div className="navbar">
                    <a href="#about">About Us</a>
                    <a href="#services">Our Service</a>
                    <a href="#pricing">Pricing</a>
                    <button className="btn">
                        Contact Us
                    </button>
                </div>
               
        </div>
    )
}


export default Header