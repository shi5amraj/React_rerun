

import "./Navbar.css"

function Navbar()
{

    return(
        <div className="navBar">
            <div className="leftDiv">
             <span>GEEKSTER</span>
            </div>

            <div className="rightDiv">
             <a href="#">Home</a>
             <a href="#">About</a>
             <a href="#">Products</a>
             <a href="#">Contact Us</a>

            </div>



        </div>

    )
}
export default Navbar;