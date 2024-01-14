
import "../styles/_header.scss"

const Header =() => {
    return (
        <div className="header">
           <div className="brand">
               <h1>Logo</h1>
           </div>
          
                <div className="navbar">
                    <a href="">About Us</a>
                    <a href="">Our Service</a>
                    <a href="">Pricing</a>
                    <button className="btn">
                        Contact Us
                    </button>
                </div>
               
        </div>
    )
}


export default Header