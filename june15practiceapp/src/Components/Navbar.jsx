

import "./Navbar.css"

import{Link} from "react-router-dom"

function Navbar()
{

    return(
        <div className="navBar">
            <div className="leftDiv">
             <span>GEEKSTER</span>
            </div>

            <div className="rightDiv">
           

             <Link to="/" >Home</Link>
             <Link to="/products" >Products</Link>
             <Link to="/cart" >Cart</Link>

            </div>



        </div>

    )
}
export default Navbar;