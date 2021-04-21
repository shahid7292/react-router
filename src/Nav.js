import React from 'react'
import { Link, useHistory,useLocation } from 'react-router-dom'
import './App.css';

function Nav() {
    const location=useLocation()
    const history=useHistory()

    const handleClick=()=>{
        history.goBack();
    }

    return (
        <div>
            {
                location.pathname==="/about" ? 
                <nav>
                <Link to="/" className="link list1">
                    <li>
                        <h2>LOGO</h2>
                     </li>
                </Link>
                <ul className="list">
                    <Link to="/" className="link">
                        <li><h3>Home</h3></li>
                    </Link>
                    <Link to="/about" className="link">
                        <li><button onClick={handleClick}>Go back</button></li>
                    </Link>
                    <Link to="/products" className="link">
                        <li><h3>Product</h3></li>
                    </Link>
                </ul>
            </nav>
                :
                <nav>
                <Link to="/" className="link list1">
                    <li>
                        <h2>LOGO</h2>
                     </li>
                </Link>
                <ul className="list">
                    <Link to="/" className="link">
                        <li><h3>Home</h3></li>
                    </Link>
                    <Link to="/about" className="link">
                        <li><h3>About</h3></li>
                    </Link>
                    <Link to="/products" className="link">
                        <li><h3>Product</h3></li>
                    </Link>
                </ul>
            </nav>

            }
            
        </div>
    )
}

export default Nav
