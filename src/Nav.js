import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';

function Nav() {
    return (
        <div>
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
        </div>
    )
}

export default Nav
