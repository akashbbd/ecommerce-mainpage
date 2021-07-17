import React from 'react'

function Header() {
    return (
        
            <div class="header">
            <div class="container">
            <div class="navbar">
            <div class="logo">
            <a href="#">
                <img src="images/lo.png" width="125px" />
            </a>
            </div>
            <nav>
                    <ul id="MenuItems">
                        <li> <a href="#">Home</a></li>
                        <li> <a href="#">Products</a></li>
                        <li> <a href="#">About</a></li>
                        <li> <a href="#">Contact</a></li>
                        <li> <a href="#">Account</a></li>
                    </ul>
                </nav>
                <a href="#"><img src="images/cart.png" width="30px" height="30px" />
                <img src="images/menu.png" class="menu-icon" onclick="menutoggle()" />
                </a>
                </div>
                <div class="row">
                <div class="col-2"> 
                <h1>Give Your Shopping <br />A New Style</h1>
                    <p>Shopping is something which is loved by all of us. It is <br /> said that many people find shopping
                        relaxing. </p>
                    <a href="" class="btn">Explore Now &#8594; </a>
                </div>
                <div class="col-2">
                <img src="images/ban.png" />
                </div>
            </div>
            </div>
            </div>
            
            
    
    )
}

export default Header;
